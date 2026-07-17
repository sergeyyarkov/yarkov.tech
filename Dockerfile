ARG NODE_IMAGE=node:24.0.0-alpine

FROM ${NODE_IMAGE} AS build

RUN apk add --no-cache python3 make g++

WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --omit=dev

FROM ${NODE_IMAGE} AS production
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json .

EXPOSE 9966
CMD [ "node", "./dist/server/entry.mjs"]