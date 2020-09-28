function main(){
    showProfiles()
}

function showProfiles(){
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(profile => {
        debugger
        profile

    })
}


main()
