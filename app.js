
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

        container.appendChild(card);
        card.appendChild(cardImg);

        const img = document.createElement('IMG');
        img.src = movie["image"]
        const h = document.createElement('h1');
        const p = document.createElement('p');
        
        cardImg.appendChild(img);
        card.appendChild(h);
        card.appendChild(p);

        h.innerHTML=movie["title"]
        p.innerHTML=movie["description"];
    }
}

GetAPI()

