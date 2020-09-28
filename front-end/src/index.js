function main(){
    showProfiles()
    
    // displayPotentials()
}

const userContainer = document.querySelector('#user-container')
const potentialContainer = document.querySelector('#potential-matches')



// function to display all users
function showProfiles(){
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(profiles => {
        
        profiles.data.forEach(function(profile){
            userContainer.innerHTML += 
            `<div class="card" style="width: 25rem;">
                <img src="${profile.attributes.image_url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${profile.attributes.name}</h5>
                    <p class="card-text">I play hard. I play fast.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${profile.attributes.age}</li>
                    <li class="list-group-item">${profile.attributes.occupation}</li>
                    <li class="list-group-item">${profile.attributes.attracted_to}</li>
                    <li class="list-group-item">${profile.attributes.interests}</li>
                    <li class="list-group-item">${profile.attributes.veggie_type}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">I want your broccoli</a>
                    <a href="#" class="card-link">Hard pass on that ass</a>
                </div>
            </div>
            <br>`
        })
    })
}


// function to display carosel on the right - needs refactoring

// function displayPotentials(){
//     potentialContainer.innerHTML =
//             `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//             <div class="carousel-inner">
//                 <div class="carousel-item active">
//                 <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo" class="d-block w-30" alt="...">
//                 </div>
//                 <div class="carousel-item">
//                 <img src="..." class="d-block w-100" alt="...">
//                 </div>
//                 <div class="carousel-item">
//                 <img src="..." class="d-block w-100" alt="...">
//                 </div>
//             </div>
//             <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Previous</span>
//             </a>
//             <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Next</span>
//             </a>
//             </div>`
// }
main()
