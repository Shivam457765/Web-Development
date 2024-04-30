// const chai = function(){
//     let username = "Shivam"
//     console.log(this.username);
// }

// Arrow function
const chai = () => {
    let username = "Shivam"
    console.log(this.username);
    console.log(this);

}

chai()