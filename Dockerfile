FROM node:16.15.0-alpine

#Create app directory
WORKDIR /usr/src/github-finder

#Copy file with app dependencies declaration
COPY package*.json ./

# Bundle app source
COPY . .

# install dependencies
RUN npm ci

# Build the app
RUN npm run build

EXPOSE 3000

# Start the app
CMD [ "npx", "serve", "build" ]