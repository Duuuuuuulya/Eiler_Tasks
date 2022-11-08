const AnswerBtn = document.getElementById('answer');


const one = () =>{
  let summ = 0 
  let value = 0
  while(value < 1000) {
  if(value % 3 === 0 || value % 5 === 0) {
    summ = summ + value
  }
  value++
}
  console.log(summ)
  return summ
}



AnswerBtn.addEventListener('click', one);