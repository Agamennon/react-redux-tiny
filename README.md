# React Redux Tiny Router Univeral Example

npm install

npm run start

a starter for [redux-tiny-router](https://github.com/Agamennon/redux-tiny-router) 

Change inside `paths.js` and set `universal:true`,  to enable universal rendering please note
that in development, the css will not be processed, so you will see a change when client side css loads,
if you want, uncomment componentWillMount from the Home.jsx component (that will make a 2 second async request),
you can then use `curl http://localhost:3000` to see that all the state was rendered!.

Server will run in port:4000


 
 

