
// Área do carousel imagens faz as imagens rolarem para lateral
$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    }); // é necessário colocar esses dois fechamentos
}); // é necessário colocar este fechamento

//Primeiro temos uma função para o documento de formulário
//sendo necessário adicionar os todos os itens que ficaram com máscara
// um abaixo do outro dentro do bloco function.
$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {placeholder: '(DDD) 12345-6789'});
    $('#cpf').mask('000.000.000-00', {placeholder: '123.456.789-00'});
    $('#cep').mask('00000-000', {placeholder: '012345-678'});

$('form').validate({
        rules: {
          nome: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          telefone: {
            required: true
          },
          endereco: {
            required: true
          },
          cep: {
            required: true
          },
          cpf: {
            required:
     true
          },
        },
        submitHandler: function (form) {
          alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
          form.reset();
        },
        invalidHandler: function (form, validator) {
          alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
      });
    });
