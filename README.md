# Coin - Savings tracker website 
By Bermet Kydykova, Enxhi Osmanllari, Marko Grgic, Jiancong Lu



## Instruction for setup/start Backend server

### Installation:

- Install PostgreSQL on your computer and create a password for the database.
- If npm isn't installed on your computer, download it here https://www.npmjs.com/get-npm. This will help you with npm commands
- Once pgAdmin is opened, create a database named "coinDB" (without quotes, case sensitive)
- Once the database is created, go to Schemas > public > Tables
- Create a table named users
- In that table, create 5 columns: id, username, email, createdAt, updatedAt
  - id will be the primary key. It is data type integer
  - username, email, createdAt, updatedAt will be "character varying" data types

- Install required dependencies in your project folder by typing "npm i" (without quotes)
- Once the database is set up and dependencies are installed, create a file named ".env" (without quotes) in the main repo folder. Edit the file and type in LOCAL_DATABASE_PASSWORD='yourpasswordhere', replacing 'yourpasswordhere' with the password you used when setting up PostgreSQL

- Everything should be set up. Type "npm run dev" into your command/terminal. 
- Open a browser and type in "localhost:5000" in the URL. The connection has been established and everything is running fine if you see an "ok" message.


### Usage/Commands:
`localhost:5000/users` - GET request to view all users in database

`localhost:5000/users/add` - POST request to add users to database



## Instruction for setup/start Frontend server
Frontend is using a separate server right now, will run build with webpack later for production.
- Navigate to client folder
```
npm i
npm start
```