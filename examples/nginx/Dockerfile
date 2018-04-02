FROM ubuntu:14.04

RUN apt-get update && apt-get install -y nginx

WORKDIR /app/html
COPY . /app/html

# Patch nginx.conf
RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.original
RUN mv /app/html/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx"]