# Assignment 2 - Web API.

Name: Gedvydas Jucius

## Features.

[A bullet-point list of the ADDITIONAL features/endpoints you have implemented in the API **THAT WERE NOT IN THE LABS** ]. 

 + Feature 1 - Actor Details with API Route 

 + Feature 2 - Movie credits in movie details 

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

getting/installing the software:

```bat
git clone https://github.com/Ged-J/wad-api-assignement2
```

followed by installation

install required npm components to the app
```bat
cd .\movies-api\
npm install
cd .\reactApp\
npm install
```
ensure mongoDB is installed and running with 
```bat
mongod -dbpath db
```
sometimes the passport node module needs to be installed indendantly to the movies-api
```bat
npm install --save passport passport-jwt jsonwebtoken bcrypt-nodejs
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB,** just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://127.0.0.1:27017/movies_db
SEED_DB=True
SECRET=ilikecake
TMDB_key=(secret key)
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A |
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A |  
| /tv/{tv_id} | Get TV Details | N/A | N/A | N/A |
| /person/{person_id} | get Actor details | N/A | N/A | N/A | 
| /person/popular | Get A list of popular actors | N/A | N/A | N/A |
| /movie/${id}/credits | Get movie Credits (Cast and Crew) | N/A | N/A | N/A |
| /movie/upcoming | Get Upcoming Movies | N/A | N/A | N/A |
| /movie/popular | Get Popular movies | N/A | N/A | N/A | 
| /person/${id}/images | get Actor images | N/A | N/A | N/A |
| /tv/popular | get popular tv shows | N/A | N/A | N/A |   
| /tv/${id}/images | gets the images for the tv shows | N/A | N/A | N/A |
| /tv/${id}/reviews | Get all reviews for tv shows | N/A | N/A | N/A |
| /genre/tv/list | Gets Genres for a tv show | N/A | N/A | N/A |
| /api/users | Gets users | Login | N/A | N/A |
| /api/users/{userid} | Gets single user | N/A | N/A | N/A |
| /api/users?action=register | N/A | Adds a new user | N/A | N/A |  
| ... | ... | ... | ... | ...

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. **REMEMBER: DON'T PUT YOUR OWN

Json Web Tokens are used to authenticate users.

All routes in the index.js file of the src folder are private aside from the sign up and login routes.

USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB**

## Integrating with React App

~~~Javascript

export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};
~~~

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  
