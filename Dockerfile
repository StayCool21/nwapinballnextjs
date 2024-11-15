# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies for build (production + dev dependencies)
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Remove dev dependencies after build
RUN npm prune --legacy-peer-deps --omit=dev

# Stage 2: Production image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy production-ready files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port the app runs on
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
