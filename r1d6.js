function sumFibs(num) {
  let a = 0
  let b = 1
  let result = 0
  while(a+b <= num) {
    console.log(b)
    let x = b
    b = a + b
    a = x
    if(b % 2 != 0)
      result += b
  }
  return result;
}



{
  console.log(sumFibs(75025))

  let text = ""
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 5: ${text}</h4>`
  result.innerHTML += "<quote>Replace special characters to HTML entities</quote>"
}