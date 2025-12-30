// Members Data
const membersList = [
    {
        name: "Alejandro Maduro",
        section: "02",
        id: "22401028",
        image: "./src/Images/Alejandro.jpg"
    },
    {
        name: "Efekan Sahin",
        section: "04",
        id: "22302571",
        image: "./src/Images/Efekan.jpg"
    },
    {
        name: "Erida Puka",
        section: "04",
        id: "22401239",
        image: "./src/Images/Erida.jpg"
    }
];

const membersContainer = document.getElementById('membersContainer');

// Using DOM API to create the members
membersList.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.className = "member";

    const img = document.createElement('img');
    img.src = member.image;
    img.alt = member.name;

    const detailsDiv = document.createElement('div');
    detailsDiv.className = "details";

    const nameH2 = document.createElement('h2');
    nameH2.textContent = member.name;

    const sectionP = document.createElement('p');
    sectionP.textContent = `Section: ${member.section}`;

    const idP = document.createElement('p');
    idP.textContent = `ID: ${member.id}`;

    detailsDiv.appendChild(nameH2);
    detailsDiv.appendChild(sectionP);
    detailsDiv.appendChild(idP);

    memberDiv.appendChild(img);
    memberDiv.appendChild(detailsDiv);
    
    membersContainer.appendChild(memberDiv);
});

const members = document.getElementById("members");
const count = document.getElementById("count");
const countDown = document.getElementById("countdown");
const game = document.getElementById("game");

let isGameStarted = false;

document.body.addEventListener("click", function() {
    if (!isGameStarted) {
        isGameStarted = true;

        members.classList.add("hidden");
        count.classList.remove("hidden");

        let timer = 3;
        countDown.textContent = timer;

        const countdownInterval = setInterval(() => {
            timer--;
            
            if (timer > 0) {
                countDown.textContent = timer;
            } else {
                clearInterval(timer);
                count.classList.add("hidden");
                game.classList.remove("hidden");
                document.body.classList.add("body-white");
            }
        }, 1000);
    }
});

function createGrid() {
    const gameContainer = document.getElementById("gameBoard");
    gameContainer.innerHTML = '';

    
}



//Generates 3 random number in range [1-16] and returns it within an array.
function generateRandomCell() {
    let rndmArr = [-1,-1,-1];
    let rndNum = -1;
    let isUnique = true;

    for(let i = 0; i < 3; i++){
        rndNum = Math.floor(Math.random()*16 + 1);
        for(let k = 0; k < i; k++){
            if(rndNum == rndmArr[k]) {
                i--;
                isUnique = false;
            }
        }
        if(isUnique)
            rndmArr[i] = rndNum;
    }

    return rndmArr;
}
