FROM node:alpine
ENV NODE_ENV=production
COPY . /app
WORKDIR /app
RUN npm --omit=dev ci
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]