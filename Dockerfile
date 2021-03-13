FROM node:14-alpine

RUN mkdir /opt/nuxt
COPY . /opt/nuxt
WORKDIR /opt/nuxt
RUN npm install
ENV NODE_ENV production
ENV HOST 0
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]
