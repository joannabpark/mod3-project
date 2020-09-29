const formContainer = document.querySelector('.form-container')
const navBar = document.querySelector('#nav-bar')
const userContainer = document.querySelector('#user-container')
const potentialContainer = document.querySelector('#potential-matches')
const header = document.querySelector('#header')
const meatText = document.querySelector('#meat')

function signIn(){
    navBar.style.display = "none"
    formContainer.addEventListener('submit', function(event){
        event.preventDefault()
        const name = event.target[0].value
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(profiles => {
            const array = profiles.data.map(function(profile){ return profile.attributes.name })
            if (array.includes(name)){
                formContainer.style.display = "none"
                navBar.style.display = "block"
                displaySignedInUser(name)
            }
        })
    }) 
}

function displaySignedInUser(name){
    console.log(name)
}

// function to display all users
function showProfiles(){
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(profiles => {
        
        profiles.data.forEach(function(profile){
            userContainer.innerHTML += 
            `<br>
            <div class="card mx-auto shadow-sm p-3 mb-5 bg-white rounded" style="width: 25rem;" name="profile-card" data-id=${profile.attributes.id}>
                <img src="${profile.attributes.image_url}" class="card-img-top rounded-circle border border-info" alt="profile picture">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold text-center">${profile.attributes.name}, ${profile.attributes.age}</h5>
                    <p class="card-text text-center">"${profile.attributes.bio}"</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-center">${profile.attributes.occupation}</li>
                    <li class="list-group-item text-center">${profile.attributes.attracted_to}</li>
                    <li class="list-group-item text-center">${profile.attributes.interests} & fuckin shit up</li>
                    <li class="list-group-item text-center">${profile.attributes.veggie_type}</li>
                </ul>
                <div class="card-body text-center">
                    <button type="button" name="match-button" class="btn btn-info btn-lg btn-block"> I want your broccoli.</button>
                </div>
                <div class="card-body text-center">
                    <button type="button" name="pass-button" class="btn btn-light text-danger btn-lg btn-block">Hard pass on that ass!</button>
                </div>
            </div>
            <br>`
        })
    })
}

//event listeners for buttons, need to add functionality to both buttons
function profileButtonsListener(){
    userContainer.addEventListener('click', function(event){
        if (event.target.name === "match-button"){
            console.log("Its a match made in heaven")
        } else if (event.target.name === "pass-button"){
            console.log("No thanks - they nasty AF")
        }
    })
}

function meatClick(){
    meatText.addEventListener('click',function(){
        alert("Meat is MURDER!")
    })
}

signIn()
