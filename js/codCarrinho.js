$(document).ready(function () {
    $("#btAdd").click(function () {
        //pegar os dados do formulário
        nome = $("#cpNome").val();
        email = $("#email").val();
        valor = parseFloat($("#valor").val());

        //monta a linha da tabela
        bloco = "<tr>";
        bloco += "<td>" + nome + "</td>";
        bloco += "<td>" + email + "</td>";
        bloco += "<td class='soma'>" + valor + "</td>";
        bloco += "<td><button class='btn btn-danger btn-sm btDel'><i class='fa fa-times'></i></button></td>";
        bloco += "</tr>";

        //adiciona a linha na tabela
        $("#tabNomes tbody").append(bloco);

        //limpa o formulário
        $("#form")[0].reset();
        $("#cpNome").focus();

        //contaReg();
        contaReg();

    });

    $(document).on("click", ".btDel", function () {
        elem = $(this);
        if (confirm("Deseja realmente apagar a linha?")) {
            elem.closest("tr").remove();
            contaReg();
        }
    });

    $("#btnComprar").click(function () {

        valorT = $("#valorT").val();
        if (valorT != "") {
            alert("Compra enviada para seu Email!");
            $("#form")[0].reset();


        }
        else {
            alert("Veja o valor da sua compra!");
        }

    });


    function contaReg() {
        num = $("#tabNomes tbody tr").length;
        $("#numReg").html(num);
        console.log(num)

    }

    $("#btAdd").click(function () {    
        s = 0;
        $(".soma").each(function (idx) {
            v = parseFloat($(this).html());
            s = s + v;

            if (s > 3000) {
                alert("Você ganhouo um desconto de 10%!");
                desconto = s - (s * 0.10);
                document.getElementsByName("valorT")[0].value = ("R$" + desconto + ",00");

            }
            else {
                alert("Não obteve desconto!");
                document.getElementsByName("valorT")[0].value = ("R$" + s + ",00");

            }
        });
        console.log("Desconto:" + desconto);
    });

});

