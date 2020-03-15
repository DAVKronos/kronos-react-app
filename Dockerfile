# base image
FROM node:12.2.0-alpine

ENV NODE_ENV=development
# set working directory
WORKDIR /app
COPY . ./

RUN npm install
# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
#COPY package.json /app/package.json
#RUN npm install
#RUN npm install react-scripts@3.0.1 -g --silent
#RUN npm install react-scripts@3.0.1 -g --silent

# start app
CMD ["npm", "start"]