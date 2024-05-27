let inp=document.querySelector('input');
let para=document.createElement('p');
let sab=document.querySelector('body');
inp.addEventListener('input',function()
{
  console.log(inp.value);
  para.innerText=inp.value;
  para.style.fontFamily="Arial"
  sab.append(para);
})