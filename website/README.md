# transmediale 2021/22 front end

Made with [Svelte](https://svelte.dev).

## develop

```
npm install
npm run dev
```

Visit [localhost://5000](localhost:5000)

Copy `.env.example` to `.env` and change the values to make queries work.

## build

```
npm run build
```

## deploy to [dokku](https://github.com/dokku/dokku)

Assuming `dokku cli` is installed and server is `transmediale.intergestalt.cloud`

```
DOKKU_HOST=transmediale.intergestalt.cloud dokku --remote staging apps:create
dokku --remote staging proxy:ports-set http:80:5000
dokku --remote staging docker-options:add build --build-arg GRAPHQL_URL=https://data.transmediale.de/api --build-arg GRAPHQL_BEARER_TOKEN=your_token
git push staging `git subtree split --prefix website master`:master
dokku --remote staging letsencrypt
dokku --remote staging ps:scale web=2
```
