# WebAppAssignmentReact
This is the Repository for my WebAppDev assigment
# Assignment 1 - ReactJS app.

Name: Cillin Ivory

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - A similar movies added to the movie details to show movies that are similar to it. 
 + Feature 2 - Added an upcoming page which displays upcoming movies. These may intrest people to see what movies are becoming popular
 + Feature 3 = Added a top rated page to show the highest rated movies. This displays movies that people have voted to be the best
 + Feature 4 = Added a trending page to show trending movies. These movies are movies that are currently trending. Users  may be intrested in moveis which are popular at the momment.
 + etc

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/upcoming - gets a list of upcoming movies.. 
+ https://api.themoviedb.org/3/trending/movie/week - gets a list of movies trending over the week
+ https://api.themoviedb.org/3/movie/top_rated - gets a list of the top rated movies.
+ https://api.themoviedb.org/3/movie/${id}/similar - gets movies similar to id entered.

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][homePage]
>Displays a list of movies. Clicking on the movie cards will bring the user to movies details page. Using the nav bar located in the top right the user can also view different movies such as upcoming, top rated, etc... The user can also click the favorites button to add movies to favorites. This will remove the movie from the page and add it to the favourites page. Semantic was used to change the movies to card views. Along with this the sites header was changed to implment semantics icons along with some color changed to the site.

![][movieDetail]
>Movie details shows similar movies now, reviews are located below all similar movies. The user can click on the similar movie cards and bring them to that movies page and once again display similar movies. Movie details was also changed to a semantic ui table along with icons being added.

![][trending]
>Shows trending movies colors scheme is changed to white and grey. Users can click on these cards and bring the user to thier details pages.

![][upComing]
>Displays up coming movies. Can be clicked to bring the user to the movies detail pages.

![][topRated]
>Displays top rated movies in a movie list users can click on the cards and it will bring them to the movie details page.

![][favorites]
>Movies are split into sections in relation to where they were gotten from (upcoming, trending, etc...).



[movieDetail]: ./public/movieDetails.png
[trending]: ./public/trending.png
[upComing]: ./public/upComing.png
[topRated]: ./public/topRated.png
[stories]: ./public/storybook.png
[homePage]: ./public/homePage.png
[favorites]: ./public/favorites.png

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/upcoming (public) - displays upcoming movies.
+ /movies/trending (public) - displays trending movies.
+ /movies/toprated (public) - displays top rated movies.


### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg

[movieDetail]: ./public/movieDetails.png
[trending]: ./public/trending.png
[upComing]: ./public/upComing.png
[topRated]: ./public/topRated.png
[stories]: ./public/storybook.png
[homePage]: ./public/homePage.png
[favorites]: ./public/favorites.png
