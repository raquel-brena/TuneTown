# Use the official Node.js image (latest version)
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Copy the rest of the server-side application files
COPY . .

# Generate Prisma client and run migrationss
#RUN npm run migrate

# Expose port 8080 for the server application
EXPOSE 3333

# Start the server application
CMD ["npm", "run", "dev"]

# Start the server application using the wait-for-it script
CMD ["./wait-for-it.sh", "postgres", "--", "sh", "-c", "npx prisma migrate dev && npx prisma generate && npm run dev"]