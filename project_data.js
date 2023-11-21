import { data } from './data.js'

const github_data = [];
const behance_data = [];

for(let i = 0; i < data.length; i++){
    if(data[i].type == 'github'){
        github_data.push(data[i]);
    }
    if(data[i].type == 'behance'){
        behance_data.push(data[i]);
    }
}

const container1 = document.querySelector('.project-github');
const container2 = document.querySelector('.project-behance');

function createCard(data, container){
    data.map((post_data) =>{
        const card = document.createElement('div')
        card.classList.add('col', 'project')
        card.innerHTML = `
            <div class="card h-100 shadow project-card">
            <img src="${post_data.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${post_data.title}</h5>
                <p class="card-text">${post_data.desc}</p>
                <a href="${post_data.link}" class="btn btn-primary shadow stretched-link">Read More ></a>
            </div>
            </div>
        `
        container.appendChild(card)
    })
}

createCard(github_data, container1)
createCard(behance_data, container2)