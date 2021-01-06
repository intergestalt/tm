FROM node:12-alpine
ARG GRAPHQL_URL
ARG GRAPHQL_BEARER_TOKEN

WORKDIR /app

# copy files and install dependencies
COPY . ./
RUN npm install
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
