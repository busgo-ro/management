
FROM node:18-bullseye-slim
WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app
COPY package*.json ./  
RUN npm i   
USER node
RUN npm run build
ENV PORT 80
EXPOSE 80  
CMD ["npm", "start"] 

