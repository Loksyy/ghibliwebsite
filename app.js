
const index = document.querySelector('#main');

const container = document.createElement('div');
container.setAttribute('class', 'container');

index.appendChild(container);

const GetAPI = async() => {
    const res = await axios.get('https://ghibliapi.herokuapp.com/films');
    const data = res.data;
    data.forEach(Ghibli);
    function Ghibli(movie) {

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const cardImg = document.createElement('div');
        cardImg.setAttribute('class', 'card-image');

        const cardContent = document.createElement('div');
        cardContent.setAttribute('class', 'card-content');

        container.appendChild(card);
        card.appendChild(cardImg);
        card.appendChild(cardContent);

        const img = document.createElement('IMG');
        img.src = movie["image"]
        const h = document.createElement('h1');
        const b = document.createElement('b');
        const p = document.createElement('p');
        
        cardImg.appendChild(img);
        cardContent.appendChild(h);
        cardContent.appendChild(b);
        cardContent.appendChild(p);

        h.innerHTML=`${movie["title"]} (${movie["original_title_romanised"]})`;
        p.innerHTML=movie["description"];
        b.innerHTML=`Release date : ${movie["release_date"]}`;
    }
}

GetAPI()

