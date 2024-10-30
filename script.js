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
        errorClass: "is-invalid", //Classe BootStrap para campos invalidos
        validClass: "is-valid", //Classe BootStrap para campos validos
        errorElement: "div", //Exibe Mensagem de erro na div abaixo do campo
        highlight: function(e){
            $(e).addClass("is-invalid").removeClass("is-valid"); //Adiciona a classe de erro
        },
        unhighlight: function(e){
            $(e).addClass("is-valid").removeClass("is-invalid"); //Remove classe de erro
        },
        errorPlacement: function(error, e) {
            error.addClass("invalid-feedback");
            error.insertAfter(e)
        },
        submitHandler: function (form) {
            $('.alert-container').html(`
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Form submitted successfully.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `);
            form.reset();
            $(".is-valid").removeClass("is-valid");
        },
        invalidHandler: function (event, validator) {
            $('.alert-container').html(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error!</strong> Please complete all required fields.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`); //Chama a classe alert-container e exibe o alert estilizado do css
        }
    })
})