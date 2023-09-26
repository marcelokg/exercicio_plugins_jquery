$(document).ready(function(){

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            cpf:{
                required:true
            },
            endereco:{
                required: true
            },
            cep:{
                required:true
            }
        }
    })

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#cep').mask('00000-000', {
        placeholder:'_____-___'
    })

})