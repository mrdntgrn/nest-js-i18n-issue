FROM node:12-alpine

ENV TERM xterm-256color

WORKDIR /app
COPY . .

RUN yarn
RUN yarn global add typescript ts-node
RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start:dev" ]
