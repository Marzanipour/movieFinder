const api_key = 'bd39498cc0f9b596c35809174d8b402d';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const movies = data.results; const movieList = document.querySelector('#movie-list'); let output = '';
        movies.forEach(movie => {

            output += `
                <div class="movie">
                    <h2>${movie.title}</h2>
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                    <p>${movie.overview}</p>
                </div>
            `;
        });

        movieList.innerHTML = output;
    })
    .catch(error => console.log(error));

    function checkInput() {
          var query = document.getElementById('search').value;
          window.find(query);
          return true;
      }
