import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'
import sveltePreprocess, { replace } from 'svelte-preprocess';
import dotenv from "dotenv"
import rootImport from 'rollup-plugin-root-import';
//import { svelteStyleDirective } from 'svelte-style-directive'

dotenv.config() // inject the content of the .env file into 'process.env'

const production = !process.env.ROLLUP_WATCH;
if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = production ? "production" : "development"
}

function serve() {
	let server;
	
	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev', '--single'], {
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
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		rootImport({
			// Will first look in `client/src/*` and then `common/src/*`.
			root: `${__dirname}/src`,
			useInput: 'prepend',

			// If we don't find the file verbatim, try adding these extensions
			extensions: ['.js', '.svelte'],
		}),
		svelte({
			preprocess: [
				replace([
					[
						/process\.env\.(\w+)/g,
						(x, prop) => JSON.stringify(process.env[prop]),
					]]),
					sveltePreprocess({
					sourceMap: !production,
					postcss: {
						plugins: [require('autoprefixer')()]
					}
				}),
				//svelteStyleDirective({}),
			],
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('bundle.css');
			}
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
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
