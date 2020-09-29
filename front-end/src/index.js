const signInFormContainer = document.querySelector('#sign-in-form')
const navBar = document.querySelector('#nav-bar')
const userContainer = document.querySelector('#user-container')
const potentialContainer = document.querySelector('#potential-matches')
const header = document.querySelector('#header')
const meatText = document.querySelector('#meat')
const createProfileLink = document.querySelector('#create-profile-link')
const createProfileForm = document.querySelector('#create-profile-form')

const deleteProfileForm = document.querySelector('#delete-me')
const titleHeader = document.querySelector('#title-header'


//Need to include password entry
//function to let user sign-in before seeing profile and matches
function signIn(){
    navBar.style.display = "none"
    createProfileForm.style.display = "none"
    signInFormContainer.addEventListener('submit', function(event){
        event.preventDefault()
        const name = event.target[0].value
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(profiles => {
            const array = profiles.data.map(function(profile){ return profile.attributes.name })
            if (array.includes(name)){
                signInFormContainer.style.display = "none"
                titleHeader.style.display = 'none'
                navBar.style.display = "block"
                showUserAndPotentialMatchProfiles(name)
            } else {
                alert("Incorrect Name or Password")
            }
        })
    })
}

function createProfile(){
    navBar.style.display = "none"
    createProfileForm.style.display = "none"
    createProfileLink.addEventListener('click', function(event){
        signInFormContainer.style.display = "none"
        createProfileForm.style.display = "block"
        createProfileFormSubmission()
    })
}

function deleteProfile(){

}

function createProfileFormSubmission(){
    createProfileForm.addEventListener('submit', function(event){
        event.preventDefault()
        const name = event.target[0].value
        const password = event.target[1].value
        const age = event.target[2].value
        const imageUrl = event.target[3].value
        const attractedTo = event.target[4].value
        const occupation = event.target[5].value
        const interests = event.target[6].value
        const location = event.target[7].value
        const phoneNumber = event.target[8].value
        const emailAddress = event.target[9].value
        const veggieType = event.target[10].value

        newProfile = { 
            type: "user", 
            attributes: {
            name: name,
            // password: password,
            age: age,
            image_url: imageUrl,
            attracted_to: attractedTo, 
            occupation: occupation,
            interests: interests,
            location: location, 
            phone_number: phoneNumber,
            email_address: emailAddress,
            veggie_type: veggieType 
            }
        }

        reqObj = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newProfile)
        }

        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(newProfile => {
            createProfileForm.reset()
            createProfileForm.style.display = "none"
            debugger
            // showUserAndPotentialMatchProfiles(newProfile.attributes.name)
        })
    })
}

//function to display user profile and potential match profiles
//Used a contiditional statement to place user profile inside userContainer
//and potential matches inside potentialContainer
function showUserAndPotentialMatchProfiles(name){
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(profiles => {
    profiles.data.filter(profile => {
        if (profile.attributes.name !== name) {
            potentialContainer.innerHTML += 
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
            } else {
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
            }
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

//click for the footer
function meatClick(){
    meatText.addEventListener('click',function(){
        alert("Meat is MURDER!")
    })
}

signIn()
createProfile()