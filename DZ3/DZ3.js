//#1
function  prosto() {
    let n = 100
    let a = 2
    while (a < n) {
        let i = 2
      while (i < 2){
        if (a % i == 0)
        i++
        continue
    }
    console.log(a)
    a++
} 
}

//#2
const sum = [1, 6, 0].reduce(countBasketPrice,0)
function countBasketPrice(accum, a) {
    return accum + a;
}
console.log(sum);


//#3
function tsifr(){
    const arr =[]
  for(let i = 0;i<10;arr.push(i++)) { }
    arr.forEach(x => console.log(x))
}

//#4
function lesenka(){
  const arr =['x']
while (arr.length < 21) {
  console.log (arr)
  arr.push('x')
}
}