var movies = require("../assets/movies.json");

// This function returns a sorted list of all actors in our movie dataset.
export function getAllActors() {
  var actors = new Set();
  movies.forEach((movie) => {
    movie.actors.forEach((actor) => {
      actors.add(actor);
    });
  });
  return Array.from(actors).sort();
}
