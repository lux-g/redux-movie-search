# Movie Search site w/ React & Redux
Used API from https://www.themoviedb.org/

Home Page - 
Displays feauture movie that updates everytime the page is loaded which is linked to movie details component 
that shows movie details including trailer which is a modal that opens up using a library called react-modal-video.

Images sliders showing Trending, Popular, Upcoming, and Top Rated movies. When image is clicked in it will go to the movie details
component and show details of that movie. The route path is dynamic based on the movie id.

On the movie details page i am also showing the cast and crew of each movie by calling different api's to get the data.

Search -
the nav bar has the search input which is displayed on all pages. When movie is searched it opens the SearchResults movie component. It does this by using 
useHistory and upon the search submit it pushes the route to that component. if the searched value length is less than 1 then it pushes back to the home page.

-used multiple conditionals such as &&, ?. and filters to handle if there is no image or data available

- redux for state management
- useEffect, useState
- axios to get requests from API
- react router dom (useParams, useHistory, Link, handle all routes)
- suspense and lazy load
- passing props
- SASS
- swiperJS for image sliders


