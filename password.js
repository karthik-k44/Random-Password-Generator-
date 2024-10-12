function createPassword(size, Number= true, specialCharacter=false) //default parameters for the password
{
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // variable for storing Uppercases
    let lowerCase = "abcdefghijklmnopqrstuvwxyz" // variable for storing Lowercases
    let number = "0123456789"                    // variable for storing number
    let sCharacter = "!@#$%^&*"                  // variable for storing special charcter
    let password = ""                            // variable for storing password
    let character = upperCase+lowerCase         // make a variable caharacter for adding randomly

    password += upperCase[Math.floor(Math.random()*upperCase.length)] // adding atleast one uppercase to password randomly

    if(Number)  // checking whether number is needed or not
    {
        character +=Number
        password += number[Math.floor(Math.random()*number.length)] // adding atleast one number to password randomly
    }

    if(sCharacter)  // checking whether special character is needed or not
        {
            character += sCharacter
            password += sCharacter[Math.floor(Math.random()*sCharacter.length)]  // adding atleast one special character to password randomly
        }

    for(let i= password.length; i<=size; i++)
       {
          password += character[Math.floor(Math.random()*character.length)] // adding all chgaracters randomly for the reamin size of the password 
       }
    return password
}
var password1= createPassword(10, true, true) // Arguements for password , sizee of the password, whether it need numbers, whether it special characters
console.log(password1) //print the return value