const btn=document.getElementById('btn');
const ageInput=document.getElementById('ageInp');
const result=document.getElementById('result');


btn.addEventListener('click',(e)=>{
e.preventDefault();
const birthdate=new Date(ageInput.value);
const today=new Date();
const year= yearCalculator(birthdate,today);
const month = monthCalculator(birthdate,today);
const day = dayCalculator(birthdate,today);

if(birthdate.getFullYear()>today.getFullYear()){

  result.textContent=`Please Enter Valid Birth Date`;

}else{

  result.textContent=`You are ${year} Year  ${month} Month and ${day} old`;
}


});



function yearCalculator(birthdate,today){
  let age=today.getFullYear()-birthdate.getFullYear();
  let month=today.getMonth()-birthdate.getMonth();
  if(month<0 || (month === 0 && today.getDate()<birthdate.getDate())){
    age--;
  }
  return age;
}


function monthCalculator(birthdate,today){
  let month=today.getMonth()-birthdate.getMonth();
  if(month<0){
    return 12+(month);
  }
  return month;
}


function dayCalculator(birthdate,today){
  let day=today.getDate()-birthdate.getDate();
  const currMonth=today.getMonth()+1;
  if(currMonth == 1 ||currMonth == 3 ||currMonth == 5 || currMonth == 7 || currMonth == 8 ||currMonth == 10 ||currMonth == 12){
    return 31-(day);
  }else if(today.getMonth() == 2){
    return 28-(day);
  }else{
    return 30-(day);
  }
}