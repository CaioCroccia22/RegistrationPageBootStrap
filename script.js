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
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})