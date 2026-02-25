ARG NODE_IMAGE=node:24.0.0-alpine

FROM ${NODE_IMAGE} AS build

WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM ${NODE_IMAGE} AS production
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json .
RUN npm ci --omit=dev

EXPOSE 9966
CMD [ "node", "./dist/server/entry.mjs"]