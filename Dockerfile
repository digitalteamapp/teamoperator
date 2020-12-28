FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# If you are building your code for production
RUN npm install

# Bundle app source
COPY . .

# Expose 8080
EXPOSE 8080

# Run server.js
CMD [ "node", "server.js" ]