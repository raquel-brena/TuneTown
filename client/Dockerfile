# Use the official Node.js image (latest version)
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client-side application files
COPY . .

# Expose port 3000 for the development server
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
