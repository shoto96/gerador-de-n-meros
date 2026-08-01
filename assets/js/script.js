const button=document.getElementById('generate');
const resultSpan=document.querySelector('#result span');

button.addEventListener('click',()=>{
  const min=parseInt(document.getElementById('min').value);
  const max=parseInt(document.getElementById('max').value);

  if(isNaN(min)||isNaN(max)){
    resultSpan.textContent="Erro";
    return;
  }

  const result=Math.floor(Math.random()*(max-min+1))+min;
  resultSpan.textContent=result;

  resultSpan.style.transform="scale(1.4)";
  setTimeout(()=>{resultSpan.style.transform="scale(1)";},200);
});
