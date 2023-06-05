window.onload = () => {
    let puppyName = localStorage.getItem("puppyName"); 
    let puppyBreed = localStorage.getItem("puppyBreed"); 
    let puppyStatus = localStorage.getItem("puppyStatus"); 
    let puppyImage = localStorage.getItem("puppyImage");

    let puppyDetailsContainer = document.getElementById("puppy-details-container");

    let nameOfPuppy = document.createElement('h2');
    nameOfPuppy.innerText = puppyName;
    

    let breedOfPuppy = document.createElement('p'); 
    breedOfPuppy.innerText = `Breed: ${puppyBreed}`; 
    

    let statusOfPuppy = document.createElement('p'); 
    statusOfPuppy.innerText = `Status: ${puppyStatus}`;
    

    let imageOfPuppy = document.createElement('img'); 
    imageOfPuppy.src = puppyImage;
    imageOfPuppy.style.width = "40%"

    let returnButton = document.createElement('button')
    returnButton.id = 'return-button'
    returnButton.innerText = 'Return'
    returnButton.addEventListener('click', () => {
        window.location.href = "index.html";
    })
    

    puppyDetailsContainer.appendChild(nameOfPuppy)
    puppyDetailsContainer.appendChild(breedOfPuppy)
    puppyDetailsContainer.appendChild(statusOfPuppy)
    puppyDetailsContainer.appendChild(imageOfPuppy)
    puppyDetailsContainer.appendChild(returnButton)

}