const inputfield=document.getElementById('result');

const buttonsEle=document.querySelectorAll('button');
for(let i=0;i<buttonsEle.length;i++){
  buttonsEle[i].addEventListener('click',()=>{
    const buttonValue=buttonsEle[i].textContent;
    if(buttonValue === 'C'){
      clearResult();
    }
    else if(buttonValue === '='){
      claculateResult();

    }else{
      appendvalue(buttonValue);
    }
  });
}

function clearResult(){
inputfield.value='';
}

function   claculateResult(){
  inputfield.value=eval(inputfield.value)

}

function appendvalue(buttonValue){
inputfield.value += buttonValue
}