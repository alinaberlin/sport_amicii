# sport_amicii


### Table of Contents

- [About the Project](#about-the-project)
  - [Title](#title)
  - [Description](#description)
  - [Objective](#objective)
  - [Goals](#goals)
  - [Author](#author)
  - [Sources](#sources)
  - [Built With](#built-with)
  - [Deploying and scaling app](#deploying-and-scalling-app)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Versioning](#versioning)
- [Usage](#usage)
- [Project Structure](#project-structure)
  - [Classes](#classes)
  - [HTTP Request Examples](#axios-examples)

a name="description"/>

### Description
A web application for gathering people who want to play sports together, lose weight and keep healthy.
<a name="objective"/>

### Title
 +SportAmicii 
 
### Objective
This application wants to be a fantastic tool by which people can meet to form teams to practice different sports together, to share the costs related to the location, maybe to organize team practice tournaments, having the chance to connect friends while you keep fit and improve your mood.
Last but not least, the application is thought of as a place where people can be motivated to play sports, knowing that it is sometimes not motivating to practice jogging if there is no second person to set goals with.
<a name="goals"/>

### Goals
Membership through registration is required to use the app<br />
Every member choose a favorite sport or sports to play on their profile page.<br />
Users can also creat sport event by choosing a venue and a date<br />
User can see on the map where is venue location<br />
<a name="author"/>

### Author 
Alina Ghetler
<a name="sources"/>

### Sources
This project is created within the frame of Women Techmakers Berlin's JavaScript Crash Course 2019 in WayFair

<a name="built-with"/>

### Built With

Major frameworks used in this project:

- Javascript Framework - [VueJs ](https://vuejs.org) 
- Testing Framework - [Avajs/Ava](https://github.com/avajs/ava)

Major libraries used in this project:

- Mongoose Object Data Modeling - [Mongoose](https://mongoosejs.com/)
- Pug Template Engine - [Pug](https://pugjs.org/api/getting-started.html)
- Promise based HTTP client - [Axios](https://github.com/axios/axios)
- Code Styling - [Eslint](https://eslint.org)

### Deploying and scalling app
-Docker 
-Heroku
<a name="deploying-and-scaling app"/>

## Getting Started

<a name="prerequisites"/>

#### Prerequisites

- [Node.js](https://nodejs.org/en/) is required 
  _ latest version 
  _ check your current node version with: `node -v`

- [NPM](https://www.npmjs.com/) is required
  _ install package manager npm with: `npm install npm@latest -g`
  _ check your current npm version with: `npm -v`

- [MongoDB](https://www.mongodb.com/) is required
  _ check your current mongodb version with: `mongo -v`
  _ Install according to [MongoDB documentation](https://docs.mongodb.com/manual/installation/)

- [Robo3T](https://www.mongodb.com/) is required
  _ download here: [Robo3T download](https://robomongo.org/download)

- [Docker](https://docs.docker.com):
  _ latest version or at least >= 19.03.2
  _ check your current node version with: `docker -v`
  _ Install according to [Docker documentation](https://docs.docker.com)

<a name="installation"/>

#### Installation

The code is hosted on GitHub:

1. Clone the repo:
   `git clone <github_repository>`
      
Build and start either with NPM:

2. Install NPM packages and dependencies:
   `npm install`
3. to start the local environment run: `npm run serve`


## Usage

Compiles and hot-reloads for development:

- Start you local frontend environment: `npm run serve`

- Compiles and minifies for production: `npm run build`

- Connect to database: `brew services start mongodb-community@4.2`

- Start your local backend environment: `nodemon index.js`

- Run your tests: `npm run test`

<a name="project-structure"/>

## Project Structure 

```
├───backend
│   ├───models
│   ├───routes
│   ├───services
│   ├───test
│   └───views
└───frontend
    ├───public
    └───src
        ├───assets
        ├───axios-auth
        ├───components
        │   └───forms
        ├───data
        ├───router
        ├───store
        └───views

```  
<a name="classes"/>

### Classes 

#### User
>-**firstName**: _String_<br />
>-**secondName**: _String_<br />
>-**email**: _String_<br />
>-**password**: _String<br />
>-**gender**: _String<br />
>-**location**: _String<br />
>-**sports**: _Array_<br />
>

#### Sport
>-**name**: _String_<br />
>-**minAttendee**: _Number_<br />

#### Venue
>-**name**: _String_<br />
>-**address**: _String_<br />
>-**sports**: _Array_<br />

#### SportEvent
>-**date**: _Date_<br />
>-**maxNumber**: _Number_<br />
>-**sport**: _Array_<br />
>-**participants**: _Array_<br />
>-**waitingList**: _Array_<br />



<a name="axios-examples"/>

### HTTP Request Examples using Axios

## Sport enpoints

1. Create a sport

```javascript
axios
    .post("/sport", {
        name: "Football",
        minAttendee: 2
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
```

2. Get by a id

```javascript
axios
    .get("/sport/5dd31c6e0972723ee789b1c8")
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
```

## User end point axios examples

1. Create user

```javascript
axios
    .post("/user", {
        firstName: "Alina",
        lastName: "Ghetler",
        email: "al@ghetler.com",
        password: "password1234",
        sports: [
            {
                _id: "5dd31c6e0972723ee789b1c8"
            }
        ]
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
```

2. Get user

```javascript
axios
    .get("/user/5dd31c6e0972723ee789b1c8")
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
```
