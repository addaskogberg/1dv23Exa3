# as224wq-examination-3

Assignment report

What is the address to your application?
https://www.addaskogberg.se

Describe what you have done to make your application secure, both in code and when configuring your application server
*Using package dotenv to handle environmental variables and not publishing it to git using the.gitignore file to keep the secret a secret.
*Used crypte to create a hashed secret
*Check if event is sent from git or rouge host using secure compare to verify that that the signature and hashed secret are the same if not there is a status 403 sent instead of status 200 
*It is a https connection created by using ...................................


Describe the following parts, how you are using them and what their purpose is

Reversed proxy

Process manager
The process manager pm2 is installed on the ubuntuserver and keeps controll that the site is up and running. It restarts the server if it stops. I had a lot of problems with this installation as I was not working in root but as created user. After killing it a few times and restarting it finaly worked. 

TLS certificates

Environment variables
Node package dotenv........

What differs in your application when running it in development from running it in production?

Which extra modules did you use in the assignment? Motivate the use of them and how you have make sure that they are secure enough for production
*I did not use anything not specified in the material on the course page.
Have you implemented any extra features (see below)? If so, describe them.

If you are aiming for a higher grade here is also the chance to motivate it
