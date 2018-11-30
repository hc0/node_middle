
FROM node

RUN mkdir -p /home/abc
WORKDIR /home/abc

COPY . /home/abc
RUN npm install
EXPOSE 808

CMD [ "npm", "start"]
