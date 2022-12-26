function seven() {
  let massive = [2,3]
  let start = 3
  while(true){
    if (massive.some((item) => !(start % item))){
      start= start + 2;
      continue;
    }
    massive.push(start)
    if(massive.length==10001) break;
  }
  }
seven()
