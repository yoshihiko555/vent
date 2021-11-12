FROM node:17-alpine3.12

RUN apk update && \
apk add --no-cache \
git
