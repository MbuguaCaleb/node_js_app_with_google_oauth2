**Project Packages**

```
npm i express mongoose connect-mongo express-session express-handlebars dotenv method-override moment morgan passport passport-google-oauth20


(a)connect-mongo-Helps us store our sessions in our database so that when we reset the server we do not get logged out.

(b)express-session-It is for sessions and cookies.

(c)express-handlebars-It is our templating engine.Alternatives are like pug or ejs.

(d)dotenv for config.

(d)method override-put and delete requests from our templates.

(e)passport -authentication.

(f)passport-google-oauth20-Helps me in using google oauth together with  passport.

(g)morgan is used for logging requests that have made into our app via the console.
HTTP request logger middleware for node.js


DEV DEPENDENCES

npm i -D nodemon cross-env

cross-env helps you not to worry about the environemntal property for the platform.

cdn.js.com(awesome place to get my fontawesome)

```

**Node JS Path Module**

```
The Path module provides a way of working with directories and file paths.


To serve static files such as images, CSS files, and JavaScript files, use the express.static ().This is how
the css static stlyes have been served to used by the handlebars layout.
```

**Express handlebars process flow**

```
(a)Remember how initilialisation to .hbs happenns.

(b)Remember that handlebars view package has a particular structure of laying out your views.
 views->layouts->main.hbs

 At main.hbs is where i have my main html compoents/styles and libraries  and all other views are passed into this as
 partials {{{body}}}

(c)res.render is used to render the views and when you are passing a unique layout that is not main.hbs you
pass it as an optional argument to the render.

```
