const btn = document.getElementById('calculate')
const bill=document
.getElementById('bill');
const tip=document
.getElementById('tip');
const totalval=document.getElementById('total');
function total(){
  const billval=bill.value;
  const tipval=tip.value;
  const total=billval*(1+tipval/100);
  console.log(total)
  totalval.innerHTML=`${total}`
}
btn.addEventListener('click',total)