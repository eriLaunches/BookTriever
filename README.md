# BookTriever (Amex Challenge) 📚

BookTriever is a web application that allows book worms to easily search for the book of their dreams.
It is meant to be a fuss-free and intuitive app for users to search,view various results that match with their search criteria, and view details for a book that they are interested in reading.

## App Deployed at

https://booktriever.herokuapp.com/

## Developer's message

I had a lot of fun and learned a lot while building BookTriever as part of the Amex Library Coding Challenge. The challenge not only helped me get more practice on the front-end tech stack that I adore, but also thinking more about scalability and keeping code dry and modular. At the bottom of this README, I have included a section on future improvements/add-ons for this app.
Thank you for this fun and challenging assignment and for your consideration of my candidacy!

## 🛠️ Main Technologies Used

1.  React, Redux, HTML, CSS, Material UI

## Breaking down the application

The application can be split into 4 parts/views:

1.  Home View: What the user sees when they first enter the site. The UI is sleek and simple with the app logo and search bar. CSS was mainly used to stylize this view. Once the user provides a search input, the input is formatted and a GET request is made to Open Library API with the input passed in. The response object is destructured and stored in the Redux store.
    ![Homepage image](https://i.ibb.co/bH4S9j3/booktrieverlogo2.png)

2.  Search Results View: Upon submitting their search, the user will be navigated to this view showing a listing of books results matching their search criteria. Here, they can also filter and sort (including sorting on a filtered population). When the user hovers over the sort and filter icons, there are instructions on what each menu does. The user can also use the Navigation Bar at the top to search for another book or click on a book result to view its details.
3.  Detail Book View: The user can view details relating to the book including book cover, editions, subjects, and main characters. All this information is based on availability within Open API. The user can also choose to search for another book in the Navigation Bar
4.  Navigation Bar with Search input field: This navagation bar appears in both the Search Results view and the Detail Book View. The user can choose to search for a book at any time during the browsing process. They can also click on the app logo to navigate to the home view. A cool feature implemented here is the switching to light/dark mode. A user can toggle the icon and the application will switch themes (light background to dark background).

## To Run the App locally on your machine:

1.  Fork and clone this repo
2.  `npm install`
3.  Start the build process and your application with: `npm run start-dev`. If you are using Windows, you may need to execute `npm run start-server` and `npm run build-watch` separately (in their own terminal tabs).

## Future improvements/add-ons to the application

1.  Implement user login functionality and database storage to enhance user experience where users can have more customization (i.e. user can save their favorite books, leave reviews, create notes)
2.  Implement TDD methodologies in workflow (i.e. Test front end with Enzyme)
3.  Include additional additional filtering and sorting options
4.  Refactor codebase to be more dry and modular. Think about different helper functions that can be used to acheive dissection/slicing/formatting of data to fit with this application
5.  Add in an about me page that details the features of the site
6.  Add in additional features that enhance user experience and/or help with faster runtimes. Including but not limited to the following: lazy scroll/infinite scrolling/pagination, additional search options, progress bar/loading bar.
