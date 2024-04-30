const gameName = new String('hitesh-hc-com')

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "    hitesh        "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

// This(.includes) will tell you if the particular string is present or not.
console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))


console.log(gameName.split('-'))