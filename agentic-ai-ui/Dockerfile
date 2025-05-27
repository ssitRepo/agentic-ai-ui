# Stage 1: Build the Vite app
FROM node:latest AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application source code
COPY . .

# Build the Vite project for production
RUN npm run build

# Stage 2: Serve the built files with NGINX
FROM nginx:stable-alpine

# Remove default nginx index.html
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Vite app from the build stage to the NGINX html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]
