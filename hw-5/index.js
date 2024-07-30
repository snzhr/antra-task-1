/*

1) What’s package.json and package-lock.json?

Basically. package.json file contains all information about our project, basic information
like author, description as well as some advanced like dependencies, scripts etc.
    
Package-lock.json file is responsible for consistency across installations. It has exact
versions of dependencies so it makes sure that our app works properly in different environments
and everyone working in our project has the same setup.
 
###############################################################################################

2) What’s the difference between npm and npx?

npm is a node package manager, which helps us to install various packages or libraries which we 
need in our app. 

npx is a node package executer, which helps us to run or execute various packages without 
installing them locally or globally.

###############################################################################################

3) What is babel?

Babel is a tool that converts modern JS code into old JS code. We need it, because not all browsers
can support new JS features. Some old browsers, like IE, Opera mini etc. may not support them, 
that's why, we have to make sure sure that our code works in all browsers. So, Babel transforms our
code into old JS code.

###############################################################################################

4) What is webpack?

Webpack is a tool that help us combine and collect all pieces of code into one file. For example,
we may have multiple JS, CSS etc. files, so it's better to make it one JS, one CSS and so on.
So here webpack can do this job for us, it collects everything and creates a bundle. By doing this,
we are optimizing our project.

*/