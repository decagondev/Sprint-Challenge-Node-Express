# Review Questions

## What is Node.js?

Node Js is a non blocking JavaScript runtime Environment using The V8 engine.

## What is Express?

Express is a middleware library that sits in the node ecosystem and deals with network requests and endpoints in a streamline manner, making use of other middleware to get the job done

## Mention two parts of Express that you learned about this week.

- Express Routers - The express routers allow endpoints to be refactored in to seperate files for a better organizational model. The use of Decomposition of the roecources that are available to us goes along well with a modulat and component based ecosystem.

- Error Middleware along with the other pre built and custom middleware - the error handling middleware takes in another argument to hold the error so we now have 4 arguments at our disposal (error, req, res , next).

## What is Middleware?

Middleware is a function or module that sits in between a stream of other middleware such as endpoints and error handlers / filters etc it sits somewhere between the UI and the database to perform operations on the data that passes through it.

## What is a Resource?

A resource can be one of many things but it usually all boild down to data that is passed rount your application such as posts, images, meda such as audio or video. In most cases the resources will be held in a database or be pulled in from another api down the line.

## What can the API return to help clients know if a request was successful?

- the status code 200 === success
  Status codes and messages can be returned to let the user know if the request was sucsessful or not common codes might be (SUCCESS 200), 400, 500, 404, 422, 301 and a miraid of other codes which you can look up at https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

## How can we partition our application into sub-applications?

we can decompose the application by moving the code in to other files and directories using one of a few possible methodologies. This can be avheived via express routes and some decomposition in general.
The mothodologies and structure can be:

- by type (reducers, actions, components)
- by feature/resource (users, posts, friends)
- hybrid feature > type or type > feature

## What is express.json() and why do we need it?

express.json() is expresses way of accessing body-parser as body-parser is now a part of express and can be used to ensure that the data / code received by the UI / front end is always defaulting to Javascript Objects.
