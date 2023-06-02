# ProjectImplement3
ProjectImplement3
JustPlan This project is about managing your trip, the user can add their trip, also they can edit and delete their trip.

Functions -Sign in
-Create a trip card
-Read a trip card
-Update a trip card
-Delete a trip card

Database schema image
<img width="215" alt="image" src="https://github.com/Ntckx/ProjectImplement3/assets/104750946/2d2c80f6-f337-474e-92be-dc0dbfc85779">


To run the backend in developing mode cd to backend and run "nodemon index.js".

To run the frontend in developing mode cd back to vite-project and run "npm run dev".

API endpoints URL

POST /Login

Request Body Parameter Type Description username String username password String password Example

{ "usernameOrEmail" : "banana", "password" : "1234" }

Success Response

Status Code

ok login success

Parameter Type Description username String username id String user id Example

{ "username":"banana", "id" : "1" }
