FROM node:18-alpine

WORKDIR C:\Users\mamat\Desktop\Epata1\water-gas-metering

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
