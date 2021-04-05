# bearer-auth

Authentication System: Token (Bearer) Authentication

the server is able to allow a user to create an account as well as to handle Basic Authentication (user provides a username + password). When a “good” login happens, the user is considered to be “authenticated” and our auth-server generates a JWT signed “Token” which is returned to the application

[deployed link]()


End Points
sign up : /signup
sign in : /signin

## Setup
 
Install

* Clone the repository from GitHub
* npm init -y
* install dependencies npm i express dotenv cors base-64 bcrypt mongoose jest @codefellows/supergoose 

Test
Run the command npm test to test and verify the server and the middle wares are working.
Run the command npm run lint for testing lint.

Run
Start the server using nodemon , npm start
npm test for testing 


# UML diagram 

![diagram ]()