## Build image with docker file

    $ docker build -t melvinlee/node-express .

## Run the image and expose port 80

    $ docker run -p 80:80 melvinlee/node-express

## Publish image to docker hub

    $ docker login
    $ docker push melvinlee/node-express

## Test

    $ curl localhost/?name=James

    Hello James! (You request served by host:329dac492e71)