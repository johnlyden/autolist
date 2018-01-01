## react application to mimick AutoList.com
part of coding challenge for frontend position

### what I would have liked to done
- utilizing react router so that a user could copy/paste url to a specific car
- implement a loader during requests
- better styling
- ran into dependency versioning issue with trying to use CssTransitionGroup to animate components - would have liked to use that approach for animating
- implement some basic tests

### what I'm happy with
- With the API request for collection of cars, the response is stored in Redux application state in such a way that the ID of each vehicale is the key of each property - making a specific vehicle lookup more efficient
- reducer for fetching cars accepts an object of filter information that will form a URL endpoint that make query parameters for each key/value - makes same method reusable for filtering by price, or specific information that is collected from inputs

