# Step 1: Build the Angular App with SSR
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:ssr

# Step 2: Set up the Node.js server for SSR
FROM node:18 AS server
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=build /app/dist/monetriq/server ./dist/server
COPY --from=build /app/dist/monetriq/browser ./dist/browser
EXPOSE 4000
CMD ["node", "dist/monetriq-server/main.js"]
