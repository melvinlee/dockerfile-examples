## Build image with docker file

    $ docker build -t melvinlee/nginx .

## Run the image and expose port 80

    $ docker run -p 80:80 melvinlee/nginx

## Publish image to docker hub

    $ docker login
    $ docker push melvinlee/nginx

## Test

    $ curl localhost