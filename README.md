# Flickr Photo Stream Viewer

Single page web app to show the public [Flickr API](https://api.flickr.com/services/feeds/photos_public.gne?format=json).

The web page is written using the [React.js](https://reactjs.org/) and [Bootstrap](https://getbootstrap.com/) with some additional CSS to tweak the appearance.

The Flickr API has no Access-Control-Allow-Origin header present, so an API proxy/translation is also included in the solution. This is written in [Node.js](https://nodejs.org/) using [Express](https://expressjs.com/) framework.


### Possible future improvements

Although there are many future improvements that could be made, the next ones I would make are:
 * Add tag search box to header bar to restrict results
 * Allow clicking of tags below post to add them to the search bar
 * Add close button to photo cards so photos can be removed from the page
 * Add ability to save the current page state, or save photos to an album for later
