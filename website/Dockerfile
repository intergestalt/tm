FROM node:12-alpine

WORKDIR /app

# copy files and install dependencies
COPY . ./
RUN npm install

# build
ARG GRAPHQL_URL
ARG GRAPHQL_BEARER_TOKEN
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
