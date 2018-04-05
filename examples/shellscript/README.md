Build image with docker file

    $ docker build -t melvinlee/shellscript .

Run the image

    $ docker run melvinlee/shellscript
    5 + 6 = 11

Next, run the image by override the environment variable

    $ docker run -e INPUT_X=10 -e INPUT_Y=10 melvinlee/shellscript
    10 + 10 = 20

Now, let's override the default cmd

    $ docker run melvinlee/shellscript bash -c "hostname; cat /proc/version"