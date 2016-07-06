# Starter Project node-express-simple
### What is this?
Simple start project running Node/Express configured to run and debug
in Visual Studio Code and deploy easily to Heroku. It is a fast way to
get Static Assets served or a simple API up and running.

#### Now with Jade and Nodemon

### Basic Functionality
- `index.js`: Entry point for the app. Add's Morgan logging and sets the default port
- `src/routes.js`: Place to add more routes in the future.
- `src/views/*`: Host Jade Templates
    - `URL: ./index.jade` Default Page to load
    - `URL: ./layout.jade` Template to use for other pages
- `src/assets/*`: Host static assets.
    - `URL: ./css/styles.css`
    - `URL: ./js/scripts.css`
- `src/api/api.js`: Place for RESTful API
    - `URL: /api`
    - `Accepts:GET & POST by default`
    - `GET` returns a basic hello world json object
    - `POST` echos whatever you send to it in the body.


### Spin up your own
Deploy the default to heroku by clicking the Deploy to Heroko button. I would recomend you fork this project so when you modify it you can deploy custom code. You will need to modify the url for the [Deploy to Heroku](https://devcenter.heroku.com/articles/heroku-button) to point to your own github project.

[![Deploy your own!](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https%3A%2F%2Fgithub.com%2Fbrabidou%2Fnode-express-simple)


### Development and Installation
The code in `.vscode` should allow you to run and debug right from [Visual Studio Code](https://code.visualstudio.com/) or you can run it from the command line. It will default to run on port 5000 if one is not given. Currently in


```
> npm install
> npm start
```


### TODO's
- Add nodemon for faster updateing of node files. No need to restart the project each time
- Add SQL Lite and an ORM for data access
- Create Permissions/Authenticated middleware for the API
- more....
