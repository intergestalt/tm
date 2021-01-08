//import svelte from 'rollup-plugin-svelte';
import svelte from 'rollup-plugin-svelte-hot';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import hmr from 'rollup-plugin-hot'
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'
import sveltePreprocess, { replace } from 'svelte-preprocess';
import dotenv from "dotenv"
import rootImport from 'rollup-plugin-root-import';
import gzipPlugin from 'rollup-plugin-gzip'
import { brotliCompressSync } from 'zlib'
// import alias from '@rollup/plugin-alias';
// import { svelteStyleDirective } from 'svelte-style-directive'

dotenv.config() // inject the content of the .env file into 'process.env'

const production = !process.env.ROLLUP_WATCH;
if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = production ? "production" : "development"
}

const hot = !production
console.log( hot ? "HMR enabled" : "HMR disabled")

function serve() {
	let server;
	
	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start:dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		// format will be overridden to 'system' when using Rollup + HMR
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	watch: {
		clearScreen: false
	},
	plugins: [
		rootImport({
			// Will first look in `src/*`
			root: `${__dirname}/src`,
			useInput: 'prepend',

			// If we don't find the file verbatim, try adding these extensions
			extensions: ['.js', '.svelte'],
		}),
		// alias({
		// 	entries: [
		// 		{ find: /^\/components\/([a-zA-Z]*)$/, replacement: '/components/$1.alias' },
		// 	]
		// }),
		svelte({
			preprocess: [
				replace([
					[
						/process\.env\.(\w+)/g,
						(x, prop) => JSON.stringify(process.env[prop]),
					]]),
					sveltePreprocess({
					sourceMap: !production,
					scss: {
						// We can use a path relative to the root because
						// svelte-preprocess automatically adds it to `includePaths`
						// if none is defined.
						prependData: `@import 'src/scss/includes.scss';`
					},
					postcss: {
						plugins: [require('autoprefixer')()]
					}
				}),
				//svelteStyleDirective({}),
			],

			// Use `hot: true` to use default options (as follow).
			//
			// Set `hot: false` to completely disable HMR shenanigans (you need this
			// for `npm run build`, for example).
			//
			hot: hot && {
				// Prevent preserving local component state
				noPreserveState: false,

				// If this string appears anywhere in your component's code, then local
				// state won't be preserved, even when noPreserveState is false
				noPreserveStateKey: '@!hmr',

				// Prevent doing a full reload on next HMR update after fatal error
				noReload: false,

				// Try to recover after runtime errors in component init
				optimistic: false,

				// --- Advanced ---

				// By default, when the hot option is enabled, the `css` option of this
				// plugin (same option as official plugin) will be changed to `false`,
				// because extracting CSS doesn't work with HMR currently. You can use
				// this option to disable this behaviour if it cause problems with your
				// setup.
				noDisableCss: true,

				// When you change only the <style> part of a component, then only the
				// CSS will be reinjected. Existing component instances won't be
				// recreated. Set `false` to force recreation.
				injectCss: true,

				// Delay to mitigate FOUC (flash of unstyled content) when a component
				// is updated, before the new version with the new CSS is loaded.
				cssEjectDelay: 100,

				// Prevent adding an HMR accept handler to components with
				// accessors option to true, or to components with named exports
				// (from <script context="module">). This have the effect of
				// recreating the consumer of those components, instead of the
				// component themselves, on HMR updates. This might be needed to
				// reflect changes to accessors / named exports in the parents,
				// depending on how you use them.
				acceptAccessors: false,
				acceptNamedExports: false,

				// Set true to enable support for Nollup (note: when not specified, this
				// is automatically detected based on the NOLLUP env variable)
				nollup: false,
			},

			// enable run-time checks when not in production
			// `dev: true` is required with HMR
			dev: hot,

			// we'll extract any component CSS out into
			// a separate file - better for performance
			// css: css => {
			// 	css.write('bundle.css');
			// }

			// Separate CSS file is not supported during HMR (neither with Nollup
			// nor rollup-plugin-hot), so we just disable it when `hot` is true.
			...(!hot && {
				css: css => {
					css.write('bundle.css')
				},
			}),

		}),

		copy({
			targets: [
				{ src: 'static/*', dest: 'public/build/' },
			]
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && !hot && livereload(['public', 'static']),
		!production && hot && livereload('static'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),

		hmr({
			public: 'public',
			inMemory: true,

			// Default host for the HMR server is localhost, change this option if
			// you want to serve over the network
			// host: '0.0.0.0',
			// You can also change the default HMR server port, if you fancy
			// port: '12345'

			// This is needed, otherwise Terser (in npm run build) chokes
			// on import.meta. With this option, the plugin will replace
			// import.meta.hot in your code with module.hot, and will do
			// nothing else.
			compatModuleHot: !hot,
		}),
		gzipPlugin(),
		gzipPlugin({
			customCompression: content =>
				brotliCompressSync(Buffer.from(content)),
			fileName: '.br',
		}),
	],
};
