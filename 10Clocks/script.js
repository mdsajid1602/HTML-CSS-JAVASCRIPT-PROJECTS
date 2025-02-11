// const hourel=document.querySelector('.hour')
// const minutesel=document.querySelector('.minutes')
// const secondel=document.querySelector('.second')

// function updateClock(){
//   const currDate=new Date();
//   setTimeout(updateClock,1000)
//   // console.log(currDate);
//   const hour =currDate.getHours();
//   const minute =currDate.getMinutes();
//   const second =currDate.getSeconds();
//   const hourDeg=(hour/12)*360;
//   hourel.style.transform=`rotate(${hourDeg}deg)`
//   const minutedeg=(minute/60)*360;
//   minutesel.style.transform=`rotate(${minutedeg}deg)`
//   const seconddeg=(second/60)*360;
//   secondel.style.transform=`rotate(${seconddeg}deg)`

// }
// updateClock();

const hourel = document.querySelector('.hour');
const minutesel = document.querySelector('.minutes');
const secondel = document.querySelector('.second');

function updateClock() {
  const currDate = new Date();

  const hour = currDate.getHours();
  const minute = currDate.getMinutes();
  const second = currDate.getSeconds();

  const hourDeg = ((hour % 12) / 12) * 360;
  const minuteDeg = (minute / 60) * 360;
  const secondDeg = (second / 60) * 360;

  hourel.style.transform = `rotate(${hourDeg}deg)`;
  minutesel.style.transform = `rotate(${minuteDeg}deg)`;
  secondel.style.transform = `rotate(${secondDeg}deg)`;

  setTimeout(updateClock, 1000);
}

updateClock();


