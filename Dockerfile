# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Debug step to inspect the contents of the /app directory
RUN ls -la /app

# Stage 2: Create the runtime image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next

# Install only production dependencies
RUN npm install --only=production --legacy-peer-deps

# Expose the port the app runs on
EXPOSE 8080

# Start the application
CMD ["npm", "start"]