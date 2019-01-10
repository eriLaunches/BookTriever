# BookTriever (Amex Challenge) 📚

BookTriever is a web application that allows book worms to easily search for the book of their dreams.
It is meant to be an intuitive and sleek app for users to search, view various results that match with their search criteria, and view details for a book that they are interested in reading.

[📺 Video Demo](https://www.youtube.com/watch?v=tJEINa_r5NU)

### App Deployed at

https://booktriever.herokuapp.com/

### 📝 Developer's message

As part of the Amex coding challenge, I had a lot of fun building BookTriever. The challenge offered me great learning moments, provided me with more practice on the front-end tech stack that I adore, and allowed me to think more about scalability and keeping code dry and modular. At the bottom of this README, I have included a section on future improvements/add-ons for this app.
Thank you for this fun and challenging assignment and for your consideration of my candidacy!

### 🛠️ Main Technologies Used

JavaScript, React, Redux, HTML, CSS, Material UI

### To Run the App locally on your machine:

1.  Fork and clone this repo
2.  `npm install` dependencies
3.  Start the build process and your application with: `npm run start-dev`. If you are using Windows, you may need to execute `npm run start-server` and `npm run build-watch` separately (in their own terminal tabs).

### Main Functionality

1.  Allow the user to search for a book.
2.  Fetch and display a list of results from the Open Library API (https://openlibrary.org/developers/api).
3.  Allow the user to sort and filter results.
4.  Allow the user to click on a result and view additional details, including at least cover art and description.

### Add'l Highlight Features

* Sleek and clean UI design (User can toggle between dark/light theme within Navigation bar)
* User can sort on top of a filtered population
* Loading spinner to indicate searching in progress
* Helper text when hovering over certain icons/menu options to guide user
* Form validation on search input when search value is empty

### User Experience & Application Breakdown

<details><summary>Click to Open</summary>
The application can be split into 4 parts/views:

1.  🏠 Home View: What the user sees when they first enter the site. The UI is sleek and simple with the app logo and search bar. CSS was mainly used to stylize this view. Once the user provides a search input, the input is formatted and a GET request is made to Open Library Search API using formatted input. The response object is destructured and stored in the Redux store. If the user does not provide an input before submitting, an alert notfication will appear as part of form validation.
2.  📚 Search Results View: Upon submitting their search, the user will be navigated to this view showing a listing of books matching their search criteria. Here, they can also filter and sort (including sorting on a filtered population). When the user hovers over the sort and filter icons, there are instructions on what each menu does. The user can also use the Navigation Bar at the top to search for another book or click on a book result to view its details.
3.  📘 Detail Book View: The user can view details relating to the book including cover, description, editions, subjects, and main characters. All this information is based on availability within Open Library API. The user can also choose to search for another book in the Navigation bar at the top
4.  🔍 Navigation bar with Search field: The Navagation bar appears in both the Search Results and the Detail Book views. The user can choose to search for a book at any time during the browsing process. They can also click on the app logo to navigate to the home view. A cool feature implemented here is the switching to light/dark mode. A user can toggle the 'light' icon and the application will switch themes ( from light background to dark background).

### Future improvements/add-ons to the application

<details><summary>Click to Open</summary>

* Implement user login functionality and database storage to enhance user experience where users can have more customization (i.e. user can save their favorite books, leave reviews, create notes)
* Implement TDD methodologies in workflow (i.e. Test front end with Enzyme)
* Include additional filtering and sorting options
* Refactor codebase to be more dry and modular. Think about different helper functions that can be used to acheive dissection/slicing/formatting of data to fit with this application
* Add an 'About me' page that details the features of the site
* Add additional features that enhance user experience and/or help with faster runtimes. Including but not limited to the following: lazy scroll/infinite scrolling/pagination, caching using localStorage to preserve state of app on page refresh, additional search options
