FROM ubuntu:14.04

# Update package
RUN apt-get update && apt-get install -y curl

# Install Node8
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN apt-get install -y nodejs

WORKDIR /app
COPY . /app

ENV PORT 80
EXPOSE 80
CMD ["node", "server.js"]