// Members Data
const membersList = [
    {
        name: "Alejandro Maduro",
        section: "02",
        id: "22401028",
        image: "./Images/Alejandro.jpg"
    },
    {
        name: "Efekan Sahin",
        section: "04",
        id: "22302571",
        image: "./Images/Efekan.jpg"
    },
    {
        name: "Erida Puka",
        section: "04",
        id: "22401239",
        image: "./Images/Erida.jpg"
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



const nums=[]

function blackTiles(){
    do{
        const rnd=Math.floor(Math.random() * 16)+1;
            if (!nums.includes(rnd)){
                nums.push(rnd)
            }
        }while(nums.length<3)
        const t1= document.getElementById(`${nums[0]}`)
        const t2= document.getElementById(`${nums[1]}`)
        const t3= document.getElementById(`${nums[2]}`)

        t1.classList.add("black")
        t2.classList.add("black")
        t3.classList.add("black")
}


blackTiles();


const table = document.getElementById("table")       
      
   
let gameStart = true
let gameOver = false

const gameCounter = document.getElementById("time")
   



let points = 10
let timer = 10
let pointsTimer
const newHigh=document.getElementById("newHigh")
const totalPoints= document.getElementById("score")
let totalP=0
 
const hiscore = document.getElementById("hiScore")
 
  
let highScore = Number(localStorage.getItem("highScore")) || 0;
hiscore.textContent = highScore;

const playAgain=document.getElementById("again")

const progressBar = document.getElementById("progressBar")
table.addEventListener("click",function(e){
    if(gameOver){
      return;
    }
      
    progressBar.style.width=350+"px"
    const tile = e.target.closest("td.black");
    if (!tile) return;
    pointsTimer = 10
    if(gameStart){
        document.getElementById("msg").classList.add("hiddenH2")
        gameCounter.textContent = timer;
        const countdownInterval = setInterval(() => {
        timer--;
        const timerPoints = setInterval(() => {
        pointsTimer--
        progressBar.style.width=(progressBar.offsetWidth-35)+"px"
        if(pointsTimer>=0){
            points=pointsTimer
        }
        else {
            clearInterval(timerPoints)

        }}, 100);
        if (timer >= 0) {
            
            gameCounter.textContent = timer;
                  
        }else {
            clearInterval(countdownInterval);
            gameOver=true
            if(totalP>Number(localStorage.getItem("highScore"))){
            hiscore.textContent=totalP
            localStorage.setItem("highScore",totalP)
            newHigh.textContent="New hiScore"
            newHigh.classList.remove("hidden")
            newHigh.classList.add("visible")
            confetti({
                particleCount:200
            });
            }
            else{
                newHigh.textContent="Time is up"
                newHigh.classList.remove("hidden")
                newHigh.classList.add("visible")
            }
            playAgain.classList.remove("hidden")
            playAgain.classList.add("visible")
            playAgain.classList.add("heartbeat")
        }}, 1000); 
        gameStart=false;
    }
     
   
        tile.classList.remove("black")
        tile.classList.add("green")
           
        const id = Number(tile.id)
        nums.splice(nums.indexOf(id), 1);
        let rnd;
        do {
        rnd = Math.floor(Math.random() * 16) + 1;
        } while (nums.includes(rnd));

        nums.push(rnd);
        document.getElementById(`${rnd}`).classList.remove("green")
        document.getElementById(`${rnd}`).classList.add("black");

        tile.innerHTML=`<span>+${points}</span>`
        totalP=totalP+points
        totalPoints.textContent=totalP
      
 })

