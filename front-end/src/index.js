const signInFormDiv = document.querySelector('#sign-in-form-div')
const signInForm = document.querySelector('#sign-in-form')
const navBar = document.querySelector('#nav-bar')
const userContainer = document.querySelector('#user-container')
const potentialContainer = document.querySelector('#potential-matches')
const header = document.querySelector('#header')
const meatText = document.querySelector('#meat')
const createProfileLink = document.querySelector('#create-profile-link')
const createProfileFormDiv = document.querySelector('#create-profile-form-div')
const createProfileForm = document.querySelector('#create-form')
const editProfileFormDiv = document.querySelector('#edit-profile-form-div')
const titleHeader = document.querySelector('#title-header')
const backBtn = document.querySelector('#back-to-login')
const logOutBtn = document.querySelector('#logout-button')
const editBtn = document.querySelector('#edit-button')
const deleteBtn = document.querySelector('#delete-button')

//Need to include password entry
//function to let user sign-in before seeing profile and matches
function signIn(){
    titleHeader.style.display = "block"
    signInFormDiv.style.display = "block"
    editProfileFormDiv.style.display = "none"
    navBar.style.display = "none"
    createProfileForm.style.display = "none"
    userContainer.style.display = "none"
    potentialContainer.style.display = "none"
    signInFormDiv.addEventListener('submit', function(event){
        event.preventDefault()
        const name = event.target[0].value
        const password = event.target[1].value
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(profiles => {
            const instance = profiles.data.find(function(profile){ return profile.attributes.name === name })
            if (instance && password === instance.attributes.password){
                editBtn.setAttribute('data-id', instance.id)
                deleteBtn.setAttribute('data-id', instance.id)
                //assign id to all necessary buttons
                signInFormDiv.style.display = "none"
                titleHeader.style.display = 'none'
                navBar.style.display = "block"
                signInForm.reset()
                showUserAndPotentialMatchProfiles(instance.id)
            } else {
                alert("Incorrect Name or Password")
            }
        })
    })
}

//allows user to go back to sign-in page
// function backToSignIn(){
//     backBtn.addEventListener('click', function(event){
//         createProfileForm.style.display = "none"
//         signInFormDiv.style.display = "block"
//         userContainer.style.display = "none"
//     })
// }

function createProfile(){
    navBar.style.display = "none"
    createProfileForm.style.display = "none"
    createProfileLink.addEventListener('click', function(event){
        signInFormDiv.style.display = "none"
        createProfileForm.style.display = "block"
        createProfileFormSubmission()
    })
}

function deleteProfile(){
    deleteBtn.addEventListener('click', function(event){
        const userId = event.target.dataset.id
        debugger
        fetch(`http://localhost:3000/users/${userId}`, { method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            signIn()
        })
    })
}

//ISSUE WITH DISPLAYING OLD PROFILE AND NEW ONE
function editProfile(){
    editBtn.addEventListener('click', function(event){
        userContainer.style.display = "none"
        potentialContainer.style.display = "none"
        const userId = event.target.dataset.id
        fetch(`http://localhost:3000/users/${userId}`)
        .then(resp => resp.json())
        .then(profile => {
            editProfileFormDiv.style.display = "block"
            editProfileFormDiv.innerHTML = `
            <form id="edit-form" data-id=${profile.data.id}>
                <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" value="${profile.data.attributes.name}">
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" value="${profile.data.attributes.password}">
                </div>

                <div class="form-group">
                    <label>Age</label>
                    <input type="text" class="form-control" value="${profile.data.attributes.age}">
                </div>

                <div class="form-group">
                    <label>Image URL</label>
                    <input type="text" class="form-control" value="${profile.data.attributes.image_url}">
                </div>

                <div class="form-group">
                    <label>Attracted to</label>
                    <input type="text" class="form-control" value="${profile.data.attributes.attracted_to}">
                </div>

                <div class="form-group">
                    <label>Occupation</label>
                    <input type="text" class="form-control" value="${profile.data.attributes.occupation}">
                </div>

                <div class="form-group">
                    <label>Interests</label>
                    <input type="text" class="form-control" value="${profile.data.attributes.interests}">
                </div>

                <div class="form-group">
                    <label>Location</label>
                    <input type="text" class="form-control" value="${profile.data.attributes.location}">
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" value="${profile.data.attributes.phone_number}">
                </div>

                <div class="form-group">
                    <label>Email Address</label>
                    <input type="text" class="form-control" value="${profile.data.attributes.email_address}">
                </div>

                <div class="form-group">
                    <label>Veggie Type</label>
                    <input type="text" class="form-control" value="${profile.data.attributes.veggie_type}">
                </div>

                <div class="form-group">
                    <label>Bio</label>
                    <input type="text" class="form-control" value="${profile.data.attributes.bio}">
                </div>
                
                <button type="submit" class="btn btn-primary" id="edit-submit-button" data-id="${profile.data.id}">Submit</button>
                <!-- <button type="submit" class="btn btn-primary" id="back-to-login">Back to Login</button> -->
              </form>
            `
        })
        editProfileFormDiv.addEventListener('submit', function(event){
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
            const bio = event.target[11].value
            const userId = event.target.dataset.id
    
            newProfile = {
                name: name,
                password: password,
                age: age,
                image_url: imageUrl,
                attracted_to: attractedTo, 
                occupation: occupation,
                interests: interests,
                location: location, 
                phone_number: phoneNumber,
                email_address: emailAddress,
                veggie_type: veggieType, 
                bio: bio
            }
    
            reqObj = {
                method: 'PATCH',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(newProfile)
            }
    
            fetch(`http://localhost:3000/users/${userId}`, reqObj)
            .then(resp => resp.json())
            .then(newProfile => {
                editProfileFormDiv.style.display = "none"
                showUserAndPotentialMatchProfiles(newProfile.data.id)
            })    
        })   
        
    })
}


function logOut(){
    logOutBtn.addEventListener('click',function(event){
        signIn()
    })
}


function createProfileFormSubmission(){
    createProfileFormDiv.addEventListener('submit', function(event){
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
        const bio = event.target[11].value


        newProfile = {
            name: name,
            password: password,
            age: age,
            image_url: imageUrl,
            attracted_to: attractedTo, 
            occupation: occupation,
            interests: interests,
            location: location, 
            phone_number: phoneNumber,
            email_address: emailAddress,
            veggie_type: veggieType, 
            bio: bio
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
            createProfileFormDiv.style.display = "none"
            showUserAndPotentialMatchProfiles(newProfile.data.attributes.name)
        })
    })
}

//function to display user profile and potential match profiles
//Used a contiditional statement to place user profile inside userContainer
//and potential matches inside potentialContainer
function showUserAndPotentialMatchProfiles(id){
    navBar.style.display = "block"
    titleHeader.style.display = "none"
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(profiles => {
    profiles.data.filter(profile => {
        if (profile.id === id) {
            userContainer.innerHTML = 
                `<br>
                <div class="card mx-auto shadow-sm p-3 mb-5 bg-white rounded" style="width: 25rem;" name="profile-card" data-id=${profile.id}>
                    <img src="${profile.attributes.image_url}" class="card-img-top rounded-circle border border-info" alt="profile picture">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold text-center">${profile.attributes.name}, ${profile.attributes.age}</h5>
                        <p class="card-text text-center">"${profile.attributes.bio}"</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center">${profile.attributes.occupation}</li>
                        <li class="list-group-item text-center">${profile.attributes.attracted_to}</li>
                        <li class="list-group-item text-center">${profile.attributes.interests}</li>
                        <li class="list-group-item text-center">${profile.attributes.veggie_type}</li>
                    </ul>
                </div>
                <br>`
                userContainer.style.display = "block"
            } else {
                potentialContainer.innerHTML += 
                `<br>
                <div class="card mx-auto shadow-sm p-3 mb-5 bg-white rounded" style="width: 25rem;" name="profile-card" data-id=${profile.id}>
                    <img src="${profile.attributes.image_url}" class="card-img-top rounded-circle border border-info" alt="profile picture">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold text-center">${profile.attributes.name}, ${profile.attributes.age}</h5>
                        <p class="card-text text-center">"${profile.attributes.bio}"</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center">${profile.attributes.occupation}</li>
                        <li class="list-group-item text-center">${profile.attributes.attracted_to}</li>
                        <li class="list-group-item text-center">${profile.attributes.interests}</li>
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
                potentialContainer.style.display = "block"
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
editProfile()
deleteProfile()
logOut()
// backToSignIn()