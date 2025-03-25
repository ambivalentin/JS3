function isValidPassword(password, username) {
    if (password.length < 8) 
        return false;
     
    if (password.includes(" ")) 
        return false;
    
    if (password.includes(username)) 
        return false;
    
    return true;
}

//false
console.log(isValidPassword("sugar", "username"));
console.log(isValidPassword("sac charine", "username"));
console.log(isValidPassword("saccharineusername","username"));


//true
console.log(isValidPassword("saccharine"));
console.log(isValidPassword("username"));
console.log(isValidPassword("saccharine", "username"));