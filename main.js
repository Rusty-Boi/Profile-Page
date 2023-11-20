const github_data = [
    {
        title: 'Moscila Brew',
        desc: 'Mosicla brew is a coffee bean e-commerce website. Customize and get your own custom house blend with this website.',
        img: './images/MoscilaBrew.JPG',
        link: 'https://github.com/Rusty-Boi/MoscilaBrew'
    },
    {
        title: '3D Solar System Simulation Project',
        desc: 'A 3D simulation of the solar system in a website using THREE JS.',
        img: './images/solarsystem.JPG',
        link: 'https://github.com/Rusty-Boi/ThreeJs-Project'
    },
    {
        title: 'SoulThrone',
        desc: 'A turn-based PRG game. This project is game design focused project.',
        img: './images/Cover SoulThrone.png',
        link: 'https://github.com/Rusty-Boi/SoulThrone'
    }
]

const behance_data = [
    {
        title: 'WanderLinx',
        desc: 'Mobile travelling application project design.',
        img: './images/WanderLinx.JPG',
        link: 'https://www.behance.net/gallery/171173803/Project-UX-Kelompok-7'
    },
    {
        title: 'Redesign Website Kemenkumham',
        desc: 'Kemenkumham website redesign project.',
        img: './images/Redesign.png',
        link: 'https://www.behance.net/gallery/164556863/Redesign-Website-Kemenkumham'
    },
    {
        title: 'FitNance',
        desc: 'FitNance is a mobile application for financial management.',
        img: './images/FitNance.png',
        link: 'https://www.behance.net/gallery/164214283/fitNance-Mobile-Finance-Management-App'
    }
]

const container1 = document.querySelector('.project-github');
const container2 = document.querySelector('.project-behance');

function createCard(data, container){
    data.map((post_data) =>{
        const card = document.createElement('div')
        card.classList.add('col', 'project')
        card.innerHTML = `
            <div class="card h-100 shadow rounded-4 project-card">
            <img src="${post_data.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${post_data.title}</h5>
                <p class="card-text">${post_data.desc}</p>
                <a href="${post_data.link}" class="btn btn-primary stretched-link">Read More ></a>
            </div>
            </div>
        `
        container.appendChild(card)
    })
}

createCard(github_data, container1)
console.log(github_data)
createCard(behance_data, container2)

// const assignData = ()=>{
//     project_data.map((post_data) => {
//         const postElement = document.createElement('div')
//         postElement.classList.add('col', 'project')
//         postElement.innerHTML = `
//         <div class="col project">
//             <div class="card h-100">
//             <img src="${post_data.img}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${post_data.title}</h5>
//                 <p class="card-text">${post_data.desc}</p>
//                 <a href="${post_data.link}" class="card-link">Read More ></a>
//             </div>
//             </div>
//         </div>
//         `
//         container1.appendChild(postElement)
//     })
// }

// const assignDataBehance = ()=>{
//     behance_data.map((post_data) => {
//         const postElement = document.createElement('div')
//         postElement.classList.add('col', 'project')
//         postElement.innerHTML = `
//         <div class="col project">
//             <div class="card h-100">
//             <img src="${post_data.img}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${post_data.title}</h5>
//                 <p class="card-text">${post_data.desc}</p>
//                 <a href="${post_data.link}" class="card-link">Read More ></a>
//             </div>
//             </div>
//         </div>
//         `
//         container2.appendChild(postElement)
//     })
// }

// assignDataBehance()
// assignData()