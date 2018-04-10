Build image with docker file

```sh
$ docker build -t melvinlee/shfunction .
```

Run the image with default parameter

```sh
$ docker run melvinlee/shfunction
5 + 6 = 11
```

Next, run the image by passing argument

```sh
$ docker run melvinlee/shfunction 1 2
1 + 2 = 3
```