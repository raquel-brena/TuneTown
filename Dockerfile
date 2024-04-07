# Use the official Node.js 14 image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY client/ ./

# Install PostgreSQL client libraries
RUN apt-get update && apt-get install -y postgresql-client

# Expose port 3000
EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "dev"]
