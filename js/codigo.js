$(document).ready(function () {

    var cont = 0;
    numCarros = $(".thumb").length - 1;

    function mostraCarro(idx) {
        el = $(".thumb:eq(" + idx + ")");
        img = el.attr("src");
        tit = el.attr("title");

        //joga na imagem grande
        $("#imgGrande img").hide();
        $("#imgGrande img").attr("src", img);
        $("#legenda").html(tit);
        $("#imgGrande img").fadeIn();
    }

    $(".thumb").click(function () {
        var id = $(this).index(".thumb");
        mostraCarro(id);
    });

    $("#flechaDir").click(function (ev) {
        ev.preventDefault();
        cont++;
        if (cont > numCarros) cont = 0;
        mostraCarro(cont);
    });

    $("#flechaEsq").click(function (ev) {
        ev.preventDefault();
        cont--;
        if (cont < 0) cont = numCarros;
        mostraCarro(cont);
    });

    $("#lupa").click(function (ev) {
        ev.preventDefault();
        img = $("#imgGrande img").attr("src");
        tit = $("#legenda").html();
        //joga no modal
        $("#detImagem").attr("src", img);
        $("#detLegenda").html(tit);
        $("#mdViewImg").modal("show");
    });

    $(".trocaFundo").click(function () {
        var fundo = $(this).data("fundo");
        $("body").css({
            "background-image": "url(" + fundo + ")"
        });
    });


    $("#play").click(function (ev) {
        ev.preventDefault();
        x = setInterval(function () {
            $("#flechaDir").trigger("click");
        }, 8000);
    });

    $("#pausa").click(function (ev) {
        ev.preventDefault();
        clearInterval(x);
    });

    $("#play").trigger("click");
});

$("#btnEnviar").click(function () {
    nome = $("#nome").val();
    telefone = $("#telefone").val();
    email = $("#email").val();
    sexo = $("#sexo").val();


    if (nome != "" && telefone != "" && email != "" && sexo != "") {

        alert("Mensagem enviada com sucesso!");
        history.back();
    }
    else {
        alert("Preencha todos os campos do formulário!");
    }
});

$("#btnComprar").click(function () {
    alert("Cadastra-se antes de comprar o carro!")
    var valor = parseFloat("350.000");
    document.getElementsByName("valX")[0].value = valor.toFixed(3);
    console.log("o valor é:" + valor);
});

$("#btnValorCarro").click(function () {

    var valor = parseFloat("350.000");
    document.getElementsByName("valX")[0].value = valor.toFixed(3);
    console.log("o valor é:" + valor);
});

$("#btnEfetuar").click(function () {
    resto = $("#txtResposta").val();
    if (resto != "") {
    alert("Falta pouco!");
    $("#Modal3").modal();
    document.getElementsByName("vlTotal")[0].value = resto;
    
    console.log("o valor é:" + resto);
    }
    else {
        alert("Veja quanto que restou a pagar!");
        $("#Modal2").modal("hide");
    }

});


// tabela
$("#btnDados").click(function () {

    //pegar os dados do formulário
    nome = $("#txtNome").val();
    mail = $("#txtEmail").val();
    fone = $("#txtFone").val();
    cpf = $("#txtcpf").val();

    //monta a linha da tabela
    bloco = "<tr>";
    bloco += "<td>" + nome + "</td>";
    bloco += "<td>" + cpf + "</td>";
    bloco += "<td>" + mail + "</td>";
    bloco += "<td>" + fone + "</td>";
    bloco += "</tr>";

    //adiciona a linha na tabela
    $("#tabNomes tbody").append(bloco);

    //limpa o formulário
    $("#form")[0].reset();

    $("#txtNome").focus();
    $("#Modal1").modal("hide");

    console.log("dados que esta retornando:" + nome, +mail, +fone, cpf);

    
    
});

$("#btnEfetuar").click(function () {
    $("#Modal2").modal("hide");

});
$("#btnFinalizar").click(function () {

    alert("Enviamos os dados da sua compra no seu Email\nCaso tenha alguma duvida entre em contato novamente!");
    $("#Modal3").modal("hide");

});







