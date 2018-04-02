## Dockerfile

    # Using ubuntu image 
    FROM ubuntu:14.04

    # Update package
    RUN apt-get update && apt-get install -y curl

    # Install Node8
    RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    RUN apt-get install -y nodejs

## Build image with docker file

    $ docker build -t melvinlee/node-http .

## Run the image and expose port 80

    $ docker run -p 80:80 melvinlee/node-http

## Publish image to docker hub

    $ docker login
    $ docker push melvinlee/node-http

## Test

    $ curl localhost

    Hello from nodejs!