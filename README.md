# as224wq-examination-3

Assignment report

What is the address to your application?
https://www.addaskogberg.se

Describe what you have done to make your application secure, both in code and when configuring your application server
*Using package dotenv to handle environmental variables and not publishing it to git using the.gitignore file to keep the secret a secret.
*Used crypte to create a hashed secret
*Check if event is sent from git or rouge host, using secure compare to verify that that the signature and hashed secret are the same if not there is a status 403 sent instead of status 200 
*It is a https connection created by using nginx and SSL self signed certficates
*The server is configeured with the firewall only allowing traffic on port 80 and 443
*I'm using github personal access token instead of username and password to access the issues in the repo. I can at any time revoke the accesstoken, disabling requests.

Describe the following parts, how you are using them and what their purpose is

Reversed proxy
Ngrok is a creating a secure tunnel between github and the host and is the used reversed proxy that is passing the webhook message from github to the application and the status code back to github.

Process manager
The process manager pm2 is installed on the ubuntuserver and keeps controll that the site is up and running. It restarts the server if it stops. You can use the PM2 to get status information about the server health. I had a lot of problems with this installation as I was not working in root but as created user. After killing it a few times and restarting it finaly worked with my created user.

TLS certificates
The purpose of is to identify the server as safe to the client by providing the certificate it ensures the identity of the remote computer and proves your identity to the remote computer. We created a self signed certificate which isn't proving server identity as it isn't created by a certified authority, but still encrypts the traffic.

Environment variables
In this application the environmental variables are used to keep the secret password to the webhook secret. The password is kept in an .env file and passed as a variable to the app.js file. The .env file is prevented from pushing to git using the .gitignore file.
In this application I used the moduele dotenv.

What differs in your application when running it in development from running it in production?
In production the application is run remote on an Unix server. The processmanager is used in production to keep my site up and running. Nginx is the webserver for the websever that handles SSL traffic separating the application from the client. There is a DNS forwarding rule from domain name to IP-address.

Which extra modules did you use in the assignment? Motivate the use of them and how you have make sure that they are secure enough for production
dotenv, crypto, secureCompare 

Have you implemented any extra features (see below)? If so, describe them.
I'm using my own domain using DNS forwarding. Use ping www.addaskogberg.se to retreive the real IP-address.
I'm using github personal access token instead of username and password to access the issues in the repo.

If you are aiming for a higher grade here is also the chance to motivate it
