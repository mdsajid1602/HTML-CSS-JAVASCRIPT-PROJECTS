const btn = document.getElementById("btn");
const list = document.getElementById("oldelist");
const TotalScore = document.getElementById("TotalScore");
const TotalWicket = document.getElementById("TotalWicket");

btn.value = 2;
let Score = 0;
let Ball = 7;
let wickets = 0;


function btnClick() {
  if (btn.value <= Ball) {
    btn.textContent = 'Ball - '+btn.value++;
    const Computerscore = computerChoose();
    const data = [0, 1, 2, 3, 4, 6, "Wicket", "Wide"];



    if (data[Computerscore] === "Wide") {
      Ball++;
      Score = Score + 1;
      TotalScore.innerHTML = Score + " ";
      const li = document.createElement("li");
      li.textContent = " Its  " + data[Computerscore] + ' Ball';
      list.appendChild(li);

      btn.textContent = 'Ball - '+ btn.value;
    } 


    else if (data[Computerscore] === "Wicket") {
      wickets++;
      TotalWicket.innerHTML = wickets + " ";
      const li = document.createElement("li");
      li.textContent = data[Computerscore]+ ' Out ';
      list.appendChild(li);
    } 
    

    else {
      
      Score = Score + data[Computerscore];

      const li = document.createElement("li");
      li.textContent = " Run :  " + data[Computerscore];
      list.appendChild(li);

      TotalScore.innerHTML = Score + " ";
      TotalWicket.innerHTML = wickets + " ";
    }
  } 
  
  else {
    btn.textContent = "Start";
  }



  
}


function computerChoose() {
  const chooise = Math.floor(Math.random() * 8);
  return chooise;
}


