const playerContainer = document.getElementById('all-players-container');
const newPlayerContainer = document.getElementById('new-player-form');

const cohortName = '2304-FTB-ET-WEB-FT'; 
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

async function fetchAllPlayers() {
    try {
        let response = await fetch(`${APIURL}/players`);
        let translatedData = await response.json();
        // console.log(translatedData);
        let actualData = translatedData.data.players;
        return actualData
    } catch (error) {
        console.log(error);
    }
}; 

async function renderAllPlayers() {
    let playerArray = await fetchAllPlayers();
    for (let i=0; i<playerArray.length; i++) {
        let currentPuppy = playerArray[i]; 
        let puppyCardContainer = document.createElement("div");
        puppyCardContainer.className = "puppy-card"; 

        let puppyNameCard = document.createElement('h2'); 
        puppyNameCard.innerText = currentPuppy.name;

        let seePuppyDetails = document.createElement('button');
        seePuppyDetails.id = 'details-button';
        seePuppyDetails.innerText = 'Details';
        seePuppyDetails.addEventListener("click", () => {
            localStorage.setItem("puppyName", currentPuppy.name);
            localStorage.setItem("puppyBreed", currentPuppy.breed);
            localStorage.setItem("puppyStatus", currentPuppy.status);
            localStorage.setItem("puppyImage", currentPuppy.imageUrl);

            window.location.href = "puppy-details.html"
        })
        puppyCardContainer.appendChild(puppyNameCard);
        puppyCardContainer.appendChild(seePuppyDetails);
        playerContainer.appendChild(puppyCardContainer);
    }
}
renderAllPlayers(); 