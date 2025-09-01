# MAIN INFO

This repo created with a help of some youtube videos, this is a raw imitation of the store, but it can be updated
this repo includes work with local database (local server) and frontend work

How to work with it

## server 
1. you need some database, it's better to use pgAdmin 4

2. go to server folder and create .env with params of your database
PORT=5000
DB_NAME=online_store
DB_USER=postgres
DB_PASSWORD=123456
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY=RANDOM_SECRET_KEY

3. 
run the server with
#### npm run dev

## client 

1. create .env with this params
REACT_APP_API_URL='http://localhost:5000/' or your localhost of the server 

2.
run the server with
#### npm start
