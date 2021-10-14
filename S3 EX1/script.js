window.onload = () => {

    let random = Math.floor(Math.random() * (20 - 1 + 1) + 1);

    document.getElementById("btn")
    .addEventListener("click", () =>{
        
        
        let numberResultField = document.getElementById("number").value;
        numberResultField = parseInt(numberResultField);
        console.log(random);

        compareNumber(numberResultField).then(
            result => addMessage(result, '5'),
            error => addMessage(error, 'E')
        );
       
    });

}

function compareNumber(numberResultField) {
    if ( numberResultField < 1 || numberResultField > 20)
    {
        document.getElementById("errorMessage")
        .innerHTML = "That is not a valid number (Error) ";

        document.getElementById("message").innerHTML = "";

    }else
    {
        if(numberResultField > random)
        {
            document.getElementById("message")
            .innerHTML = "The mystery number is higher. Guess again!";

            document.getElementById("errorMessage").innerHTML = "";

        }
        else if(numberResultField < random)
        {
            document.getElementById("message")
            .innerHTML = "The mystery number is lower. Guess again!";

            document.getElementById("errorMessage").innerHTML = "";

        }
        else
        {
            document.getElementById("message")
            .innerHTML = "You have guessed the mystery number!";
            
            document.getElementById("errorMessage").innerHTML = "";

        }
    }
}