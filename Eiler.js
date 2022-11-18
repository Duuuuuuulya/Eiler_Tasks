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

const two = () => {
  // const array = [0, 1];
  // const summ = 0;
  // const counter  = array.reduce((previousValue, currentValue) => previousValue + currentValue)
  // while (counter !== 4000000) {
  //   array.push(counter)
  //   if(counter % 2 === 0) {
  //     summ = summ + counter
  // }
  // console.log(summ)
  // return summ
  // }
  let counter = 0
  let x = 1
  let y = 1
  let c = x+y
  while (c < 4000000){
  counter += c
  x = y + c
  y = c + x
  c = x + y
  }
  console.log(counter)
}

AnswerBtn.addEventListener('click', two);