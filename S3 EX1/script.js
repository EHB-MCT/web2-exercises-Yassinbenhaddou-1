window.onload = () => {

    let random = Math.floor(Math.random() * (20 - 1 + 1) + 1);

    document.getElementById("btn")
    .addEventListener("click", () =>{
        
        
        let numberResultField = document.getElementById("number").value;
        numberResultField = parseInt(numberResultField)
        console.log(random);
        console.log(numberResultField);

        if(numberResultField < random)
        {
            console.log("The mystery number is lower. Guess again!");
        }
        else if(numberResultField > random)
        {
            console.log("The mystery number is higher. Guess again!");
        }
        else
        {
            console.log("You have guessed the mystery number!");
        }

       
    });

}