

function three() {
  let number  = 600851475143
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if ( number % i === 0) {
      number = number / i
    }
  }
  console.log(number)
}

three()

