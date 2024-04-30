let myCreatedDate = new Date("01-14-2023")
let myTimeStamp = Date.now()

// this will give date in milli second
console.log(Date.now());
// converting millisecond to second
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.toString());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",
    
})