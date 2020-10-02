const signInFormDiv = document.querySelector('#sign-in-form-div')
const signInForm = document.querySelector('#sign-in-form')
const navBar = document.querySelector('#nav-bar')
const userContainer = document.querySelector('#user-container')
const potentialContainer = document.querySelector('#potential-matches')
const headerLogo = document.getElementsByName('nav-header-logo')[0]
const meatText = document.querySelector('#meat')
const createProfileLink = document.querySelector('#create-profile-link')
const createProfileFormDiv = document.querySelector('#create-profile-form-div')
const createProfileForm = document.querySelector('#create-form')
const editProfileFormDiv = document.querySelector('#edit-profile-form-div')
const titleHeader = document.querySelector('#title-header')
const backBtn = document.querySelector('#go-back-btn')
const logOutBtn = document.querySelector('#logout-button')
const editBtn = document.querySelector('#edit-button')
const deleteBtn = document.querySelector('#delete-button')
const myMatchesBtn = document.querySelector('#match-button')
const myMatchesDiv = document.querySelector("#my-matches")
const findMatchesBtn = document.querySelector("#find-match-button")
const btnDiv = document.querySelector('#button-div')
const broccoliBtn = document.querySelector('#make-match-button')
const passBtn = document.querySelector('#pass-button')
const discardBtn = document.querySelector('#disgard-button')

function signIn(){
    titleHeader.style.display = "block"
    backBtn.style.display = "none"
    signInFormDiv.style.display = "block"
    editProfileFormDiv.style.display = "none"
    createProfileFormDiv.style.display = "none"
    navBar.style.display = "none"
    createProfileForm.style.display = "none"
    userContainer.style.display = "none"
    potentialContainer.style.display = "none"
    myMatchesDiv.style.display = 'none'
    btnDiv.style.display = 'none'
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
                myMatchesBtn.setAttribute('data-id', instance.id)
                findMatchesBtn.setAttribute('data-id', instance.id)
                headerLogo.setAttribute('data-id', instance.id)
                signInFormDiv.style.display = "none"
                titleHeader.style.display = 'none'
                navBar.style.display = "block"
                btnDiv.style.display = 'block'
                signInForm.reset()
                showUserAndPotentialMatchProfiles(instance.id)
            } else {
                alert("Incorrect Name or Password")
            }
        })
    })
}

function createProfile(){
    createProfileLink.addEventListener('click', function(event){
        backBtn.style.display = "block"
        signInFormDiv.style.display = "none"
        createProfileForm.style.display = "block"
        createProfileFormDiv.style.display = 'block'
        createProfileFormSubmission()
    })
}

function deleteProfile(){
    deleteBtn.addEventListener('click', function(event){
        const userId = event.target.dataset.id
        fetch(`http://localhost:3000/users/${userId}`, { method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            alert("Profile deleted")
            signIn()
        })
    })
}

function editProfile(){
    editBtn.addEventListener('click', function(event){
        userContainer.style.display = "none"
        potentialContainer.style.display = "none"
        myMatchesDiv.style.display = 'none'
        btnDiv.style.display = 'none'
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
                    <input type="password" class="form-control" value="">
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

function backToSignIn(){
    backBtn.addEventListener('click',function(event){
        signIn()
    })
}

function logOut(){
    logOutBtn.addEventListener('click',function(event){
        signIn()
    })
}

function seeMatches(){
    myMatchesBtn.addEventListener('click', function(event){
        const userId = event.target.dataset.id
        potentialContainer.style.display = 'none'
        editProfileFormDiv.style.display = "none"
        userContainer.style.display = "none"
        btnDiv.style.display = 'none'
        fetch('http://localhost:3000/matches/')
        .then(resp => resp.json())
        .then(matches => {
            const whereUserIsMatcherArray =  matches.data.filter(match => match.attributes.matcher_id == userId)
            const usersMatcheesIdsArray = whereUserIsMatcherArray.map(match => match.attributes.matchee_id)
            const whereUserIsMatcheeArray =  matches.data.filter(match => match.attributes.matchee_id == userId)
            const usersMatchersIdsArray = whereUserIsMatcheeArray.map(match => match.attributes.matcher_id)
            fetch('http://localhost:3000/users/')
            .then(resp => resp.json())
            .then(users => {
                myMatchesDiv.innerHTML = ""
                users.data.forEach(user => {
                    if (usersMatcheesIdsArray.includes(parseInt(user.id))){
                        myMatchesDiv.style.display = 'block'
                        myMatchesDiv.innerHTML += 
                        `
                        <br>
                        <div class="card mx-auto shadow-sm p-3 mb-5 bg-white rounded" style="width: 25rem;" name="profile-card" data-id=${user.id}>
                            <img src="${user.attributes.image_url}" class="card-img-top rounded-circle border border-info" alt="profile picture">
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold text-center">${user.attributes.name}, ${user.attributes.age}</h5>
                                <p class="card-text text-center">"${user.attributes.bio}"</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item text-center">Occupation: <strong>${user.attributes.occupation}</strong></li>
                                <li class="list-group-item text-center">Attracted to: <strong>${user.attributes.attracted_to}</strong></li>
                                <li class="list-group-item text-center">Interests: <strong>${user.attributes.interests}</strong></li>
                                <li class="list-group-item text-center">Veggie Type: <strong>${user.attributes.veggie_type}</strong></li>
                                <li class="list-group-item text-center">Location: <strong>${user.attributes.location}</strong></li>
                                <li class="list-group-item text-center">Phone: <strong>${user.attributes.phone_number}</strong></li>
                                <li class="list-group-item text-center">Email: <strong>${user.attributes.email_address}</strong></li>
                                <li class="list-group-item text-center"><button class='discard-button' data-id='${user.id}'>Discard this Veggie</button></li>
                            </ul>
                        </div>
                        <br>`
                    }
                    if (usersMatchersIdsArray.includes(parseInt(user.id))){
                        myMatchesDiv.style.display = 'block'
                        myMatchesDiv.innerHTML += 
                        `
                        <br>
                        <div class="card mx-auto shadow-sm p-3 mb-5 bg-white rounded" style="width: 25rem;" name="profile-card" data-id=${user.id}>
                            <img src="${user.attributes.image_url}" class="card-img-top rounded-circle border border-info" alt="profile picture">
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold text-center">${user.attributes.name}, ${user.attributes.age}</h5>
                                <p class="card-text text-center">"${user.attributes.bio}"</p>
                            </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item text-center">Occupation: <strong>${user.attributes.occupation}</strong></li>
                            <li class="list-group-item text-center">Attracted to: <strong>${user.attributes.attracted_to}</strong></li>
                            <li class="list-group-item text-center">Interests: <strong>${user.attributes.interests}</strong></li>
                            <li class="list-group-item text-center">Veggie Type: <strong>${user.attributes.veggie_type}</strong></li>
                            <li class="list-group-item text-center">Location: <strong>${user.attributes.location}</strong></li>
                            <li class="list-group-item text-center">Phone: <strong>${user.attributes.phone_number}</strong></li>
                            <li class="list-group-item text-center">Email: <strong>${user.attributes.email_address}</strong></li>
                                <li class="list-group-item text-center"><button class='discard-button' data-id='${user.id}'>Discard this Veggie</button></li>
                            </ul>
                        </div>
                        <br>`
                     }
                })
            })
        })
    })
}

// function discardMatch(){
//     myMatchesDiv.addEventListener('click', function(event){

//         if (event.target.className === 'discard-button'){

//         }
//     })
// }




function backToPotentialMatches(){
    findMatchesBtn.addEventListener('click', function(event){
        const userId = event.target.dataset.id
        showUserAndPotentialMatchProfiles(userId)
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
            myMatchesBtn.setAttribute('data-id', newProfile.data.id)
            editBtn.setAttribute('data-id', newProfile.data.id)
            deleteBtn.setAttribute('data-id', newProfile.data.id)
            myMatchesBtn.setAttribute('data-id', newProfile.data.id)
            findMatchesBtn.setAttribute('data-id', newProfile.data.id)
            headerLogo.setAttribute('data-id', newProfile.data.id)
            showUserAndPotentialMatchProfiles(newProfile.data.id)
        })
    })
}

let potentialMates = []


function showUserAndPotentialMatchProfiles(id){
    potentialMates = []
    createProfileFormDiv.style.display = "none"
    navBar.style.display = "block"
    titleHeader.style.display = "none"
    myMatchesDiv.style.display = 'none'
    btnDiv.style.display = 'block'
    editProfileFormDiv.style.display = "none"
    fetch('http://localhost:3000/matches')
    .then(resp => resp.json())
    .then(matches => {
        console.log(matches)
        const matchers = matches.data.filter(function(match){ return id == match.attributes.matcher_id })
        const matcheeIdArray = matchers.map(a => a.attributes.matchee_id)           
        const matchees = matches.data.filter(function(match){ return id == match.attributes.matchee_id})
        const matcherIdArray = matchees.map(a => a.attributes.matcher_id)
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(profiles => {
            potentialContainer.innerHTML = ""
            potentialMates = profiles.data.filter(profile => (profile.id !== id) && !(matcherIdArray.includes(parseInt(profile.id))) && !(matcheeIdArray.includes(parseInt(profile.id))))
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
                            <li class="list-group-item text-center">Occupation: <strong>${profile.attributes.occupation}</strong></li>
                            <li class="list-group-item text-center">Attracted To: <strong>${profile.attributes.attracted_to}</strong></li>
                            <li class="list-group-item text-center">Interests: <strong>${profile.attributes.interests}</strong></li>
                            <li class="list-group-item text-center">Veggie Type: <strong>${profile.attributes.veggie_type}</strong></li>
                        </ul>
                    </div>
                    <br>`
                    userContainer.style.display = "block"
                } 
            })
            selectCurrentPotential()
        })  
    })
}


function renderPotential(){
    const profile = potentialMates[0]
        if (profile){
        potentialContainer.innerHTML = 
            `<br>
            
                <div class="card mx-auto shadow-sm p-3 mb-5 bg-white rounded" style="width: 25rem;" name="profile-card" data-id=${profile.id}>
                    <img src="${profile.attributes.image_url}" class="card-img-top rounded-circle border border-info" alt="profile picture">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold text-center">${profile.attributes.name}, ${profile.attributes.age}</h5>
                        <p class="card-text text-center">"${profile.attributes.bio}"</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center">Occupation: <strong>${profile.attributes.occupation}</strong></li>
                        <li class="list-group-item text-center">Attracted To: <strong>${profile.attributes.attracted_to}</strong></li>
                        <li class="list-group-item text-center">Interests: <strong>${profile.attributes.interests}</strong></li>
                        <li class="list-group-item text-center">Veggie Type: <strong>${profile.attributes.veggie_type}</strong></li>
                    </ul>
                </div>
            
            <br>`
        } else { 
            potentialContainer.innerHTML = `<br><br><br><br><br><br><br><br><br><br><div class="card mx-auto shadow-sm p-3 mb-5 bg-white rounded" style="width: 25rem;" name="profile-card">
            <div class="card-body">
                <h1 class="card-title font-weight-bold text-center">No more veggies to munch on right now 😢.</h1>
            </div>
        </div>`
        btnDiv.style.display = 'none'
        }
        potentialContainer.style.display = "block"
        broccoliBtn.setAttribute('data-id',`${profile.id}`)
        passBtn.setAttribute('data-id',`${profile.id}`)
}

function selectCurrentPotential(){
        renderPotential()
        btnDiv.addEventListener('click', function(event){
            if (event.target.id === "make-match-button"){
                biteSoundEffect()
                const matcheeId = parseInt(event.target.dataset.id)
                const matcherId = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.children[1].dataset.id)
                const newMatch = {
                    matcher_id: matcherId,
                    matchee_id: matcheeId
                }
                const reqObj = {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(newMatch)
                }
                fetch(`http://localhost:3000/matches`, reqObj)
                .then(resp => resp.json())
                .then(match => {
                    console.log(match)
                })
                potentialMates.shift()
                renderPotential()
            }
            else if(event.target.id === "pass-button"){
                squishSoundEffect()
                potentialMates.shift()
                renderPotential()
            }
        })
}

function headerClickEvent(){
    headerLogo.addEventListener('click', function(event){
        const id = event.target.dataset.id
        showUserAndPotentialMatchProfiles(id)
    })
}

function profileButtonsListener(){
    potentialContainer.addEventListener('click', function(event){
        if (event.target.name === "make-match-button"){
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

function biteSoundEffect(){
    let audio = new Audio("bite.wav");
    audio.play();
}

function squishSoundEffect(){
    let audio = new Audio("squish.mp4");
    audio.play();
}


signIn()
backToSignIn()
createProfile()
seeMatches()
backToPotentialMatches()
headerClickEvent()
editProfile()
deleteProfile()
logOut()
profileButtonsListener()
meatClick()