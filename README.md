# myreads
An application allows the user to select books and categorize books they have read, are currently reading or want to read. this application is built with reactjs library and provides an api server and client library that I used to persist information as the user interacts with the application

# How to run the project
1 - clone the repo "https://github.com/MohamedIsmailAbdulMoneim/myreads.git"
2 - From the terminal write "$ npm install"
3 - start the project by this command "$ npm start"

# Components
The project has two main component mounted in app component:
1- Search : a component to search the library for specific book
2- Shelves : a component to show books in three different shelves

and each component includes grid component that has a reusable Book component

# Backend

backend contains the methods needed to perform necessary operations:

. getAll: returns all books you have in the library
. update: update books in the library
. search: select new books to read