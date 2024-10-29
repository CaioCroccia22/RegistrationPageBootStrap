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
        errorClass: 'is-invalid',
        validClass: 'is-valid',
        errorElement: 'div',
        highlight: function(e){
            $(e).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function(e){
            $(e).addClass('is-valid').removeClass('is-invalid');
        },
        errorPlacement: function( error, e) {
            error.addClass("invalid-feedback");
            error.insertAfter(e)
        },
        submitHandler: function (form) {
            alert("Congratulations");
            form.reset();
            $('is-valid')
        },
        invalidHandler: function (event, validator) {
            alert("Error, please enter with all fields");
        }
    })
})