$(document).ready(function(){
    console.log("O JQery esta funcionando")


    $('form').validate({
        rules:{
            name:{
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
        },
        messages:{
            name: "Please, enter with your name",
            email: {
                required: "Please, enter with your e-mail"
            }
        },
        submitHandler: function (form) {
            alert("Congratulations");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert("Error, please enter with all fields");
        }
    })
})