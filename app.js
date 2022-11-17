const index = document.querySelector('#main');

const ghibliAPI = async() => {
    const res = await axios.get('https://ghibliapi.herokuapp.com/films');
    const data = res.data;
    data.forEach(ghibliMovie);
    function ghibliMovie(movie) {

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const cardImg = document.createElement('div');
        cardImg.setAttribute('class', 'card-image');

        const cardContent = document.createElement('div');
        cardContent.setAttribute('class', 'card-content');

        index.appendChild(card);
        card.appendChild(cardImg);
        card.appendChild(cardContent);

        const movieImg = document.createElement('IMG');
        movieImg.src = movie["image"]
        const movieTitle = document.createElement('h1');
        const movieReleaseDate = document.createElement('b');
        const movieDescription = document.createElement('p');
        
        cardImg.appendChild(movieImg);
        cardContent.appendChild(movieTitle);
        cardContent.appendChild(movieReleaseDate);
        cardContent.appendChild(movieDescription);

        movieTitle.innerHTML=`${movie["title"]} (${movie["original_title_romanised"]})`;
        movieDescription.innerHTML=movie["description"];
        movieReleaseDate.innerHTML=`Release date : ${movie["release_date"]}`;
    }
}

addEventListener('DOMContentLoaded', (event) => {
    ghibliAPI()
});
