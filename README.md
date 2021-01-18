# transmediale 2021/22 front end

Made with [Svelte](https://svelte.dev).

## develop

```
npm install
npm run dev
```

## build

```
npm run build
```

## deploy to [dokku](https://github.com/dokku/dokku)

Assuming `dokku cli` is installed and server is `transmediale.intergestalt.cloud`

```
DOKKU_HOST=transmediale.intergestalt.cloud dokku --remote staging apps:create
dokku --remote staging proxy:ports-set http:80:5000
dokku --remote staging docker-options:add build --build-arg GRAPHQL_URL=https://transmediale.frb.io/api --build-arg GRAPHQL_BEARER_TOKEN=your_token
git push staging master
dokku --remote staging letsencrypt
dokku --remote staging ps:scale web=2
```
