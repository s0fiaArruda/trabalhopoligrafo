const form = document.getElementById('formularioPoligrafo');
const painelResultado = document.getElementById('resultado');
    form.addEventListener('submit', function(evento) {
        evento.preventDefault();
        var sim = 0;
        const resposta1 = document.querySelector('input[name="p1"]:checked');
        const resposta2 = document.querySelector('input[name="p2"]:checked');
        const resposta3 = document.querySelector('input[name="p3"]:checked');
        const resposta4 = document.querySelector('input[name="p4"]:checked');
        const resposta5 = document.querySelector('input[name="p5"]:checked');
        const resposta6 = document.querySelector('input[name="p6"]:checked');
        const resposta7 = document.querySelector('input[name="p7"]:checked');
        const resposta8 = document.querySelector('input[name="p8"]:checked');
        const resposta9 = document.querySelector('input[name="p9"]:checked');
        const resposta10 = document.querySelector('input[name="p10"]:checked');

        if ( resposta1 === 'sim');{
            sim++;
        }elseif(resposta2 === 'sim');{
            sim++;
        }elseif(resposta3 === 'sim');{
            sim++;
        }elseif(resposta4 === 'sim');{
            sim++;
        }elseif(resposta5 === 'sim');{
            sim++;
        }elseif(resposta6 === 'sim');{
            sim++;
        }elseif(resposta7 === 'sim');{
            sim++;
        }elseif(resposta8 === 'sim');{
            sim++;
        }elseif(resposta9 === 'sim');{
            sim++;
        }elseif(resposta10 === 'sim');{
            sim++;
        };

        if (sim<5) {
            console.log("inocente")
        }elseif(sim==5); {
            console.log("suspeito")
        }elseif(8>sim>5); {
            console.log("cumplice")
        }elseif(sim>8); {
            console.log("culpado")
        };

    });



