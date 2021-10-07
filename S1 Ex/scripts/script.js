window.onload = () => {

    console.log("Hello!");


    document.getElementById("form").addEventListener("submit",event => {

        event.preventDefault();
        
        
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let order = document.getElementById("order");

        console.log(name.value);
        console.log(email.value);
        console.log(order.value);

        document.getElementById("results").innerHTML = `
        The order for the customer ${name.value}  
        is the following:  ${order.value}. 
        The customer may be notified by email: ${email.value}`;
    });
}