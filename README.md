# as224wq-examination-3

Assignment report

What is the address to your application?
https://www.addaskogberg.se

Describe what you have done to make your application secure, both in code and when configuring your application server
*Using package dotenv to handle environmental variables and not publishing it to git using the .gitignore file to keep the secret a secret.
*Used crypte to create a hashed secret
*Check if event is sent from git or rouge host, using secure compare to verify that that the signature and hashed secret are the same if not there is a status 403 sent instead of status 200. Using ngrok allows you to consume the webhooks provided from github by allowing you to reply to those requests. Ngrok is a creating a secure tunnel between github and is passing the webhook message from github to the application and the status code back to github.
*It is a https connection created by using nginx and SSL self signed certficates
*The server is configured with the firewall only allowing traffic on port 80 and 443
*I'm using github personal access token instead of username and password to access the issues in the repo. I can at any time revoke the accesstoken, disabling requests.

Describe the following parts, how you are using them and what their purpose is

Reversed proxy
Nginx is working between the ubuntu server and the client. It handles the SSL encrypting to ensure a secure connection to the server. In the case of the Ubuntu server, Nginx and client the HTTPS protocol functions between the Nginx and client.

Process manager
The process manager pm2 is installed on the ubuntuserver and keeps control that the site is up and running. It restarts the server if it stops. You can use the PM2 to get status information about the server health. I had a lot of problems with this installation as I was not working in root but as created user. After killing pm2 a few times and restarting it, pm2 finaly started with as root user. I used sudo to make this work as logged in created user, although it started using the root account which seems to have made the difference. Ports up to 1024 are reserved for the root account.

TLS certificates
The purpose of is to identify the server as safe to the client by providing the certificate it ensures the identity of the remote computer and proves your identity to the remote computer. We created a self signed certificate which isn't proving server identity as it isn't created by a certified authority, but still encrypts the traffic. THe client will have to aprove this until the site is rendered.

Environment variables
In this application the environmental variables are used to keep the secret password to the webhook secret. The password is kept in an .env file and passed as a variable to the app.js file. The .env file is prevented from pushing to git using the .gitignore file.
In this application I used the moduele dotenv.

What differs in your application when running it in development from running it in production?
In production the application is run remote on an Unix server. The processmanager is used in production to keep my site up and running. Nginx is the reversed proxy for the websever that handles SSL traffic separating the application from the client. There is a DNS forwarding rule from domain name to IP-address.

Which extra modules did you use in the assignment? Motivate the use of them and how you have make sure that they are secure enough for production
dotenv, crypto, secureCompare 

Have you implemented any extra features (see below)? If so, describe them.
I'm using my own domain using DNS forwarding. Use ping www.addaskogberg.se to retreive the real IP-address.
I'm using github personal access token instead of username and password to access the issues in the repo.

If you are aiming for a higher grade here is also the chance to motivate it
