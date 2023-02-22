function pairElement(str) {
  const dict = {"A":["A", "T"],
               "T":["T", "A"],
               "C":["C", "G"],
               "G":["G","C"]}

  return str.split('').reduce((pairs, elem)=>{
      pairs.push(dict[elem])
      return pairs
    }, Array())
}

let text2 = pairElement("GCG");

let result2 = document.getElementById("result")
result2.innerHTML += `<h4>Day 2: ${text2}</h4>`
result2.innerHTML += "<quote>Create DNA pairs.</quote>"