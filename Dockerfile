
FROM node:18-bullseye-slim
WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app
COPY package*.json ./  
RUN npm i   
USER node
RUN npm run build
EXPOSE 3000  
CMD ["npm", "start"] 

