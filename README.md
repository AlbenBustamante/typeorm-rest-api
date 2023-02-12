# TypeORM Rest API

This is a little project made for introduce me to the apis development with TypeScript and NodeJS.

## How to run?

1. Clone the repository and enter the folder.

* ```git clone https://github.com/alnicode/typeorm-rest-api.git```

* ```cd ./typeorm-rest-api```

2. Install the dependencies.

* ```npm install```

3. Go to [db.ts](https://github.com/alnicode/typeorm-rest-api/blob/main/src/db.ts) and set the database properties.

4. Now, run the local server.

* ```npm run dev```

5. Use the route ```localhost:3000``` to access to the server.

It's all.

You can use ```npm run build``` to compile and generate the .js source and then, ```npm start``` to run the project compiled.

## Routes

* ``POST: /users`` to register a new user.
* ```GET: /users``` to get all the users.
* ```PUT: /users/id``` to update an existing user.
* ```DELETE: /users/id``` to delete an existing user.
* ```GET: /users/id``` to get an user.
