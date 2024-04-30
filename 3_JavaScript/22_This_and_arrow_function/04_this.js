function chai(){
    let username = "Shivam"
    // this context will only work inside objects not inside functions. 
    console.log(this.username);
}

chai()