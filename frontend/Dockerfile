# Stage 1: Build the app
FROM node:14 AS builder

WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY ./my-app/package*.json ./

# Install development dependencies
RUN npm install --only=dev

# Copy the rest of the application files
COPY . .

# Build the Expo project
RUN npm run web

# Stage 2: Create a production image
FROM node:14-alpine

WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY ./my-app/package*.json ./

# Install only production dependencies
RUN npm install --only=prod

# Copy the built files from the builder stage
COPY --from=builder /usr/src/app/build /usr/src/app/build

# Expose the necessary ports
EXPOSE 3000

# Add a HEALTHCHECK instruction
HEALTHCHECK --interval=30s --timeout=30s CMD curl -f http://localhost:3000 || exit 1

RUN npm install -g expo


# Start the app
CMD ["npm", "start"]
