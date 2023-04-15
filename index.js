window.onload = function() {

    
    let musica = new Audio("audio/nico.mp3");
    let efeito1 = new Audio("audio/rolo.mp3");
    let numero1 = new Audio("audio/numb.mp3");
    let numero2 = new Audio("audio/numb.mp3");
    let numero3 = new Audio("audio/numb.mp3");
    let numero4 = new Audio("audio/numb.mp3");

    musica.loop = true;
    let tocando = false;

    let mute    = document.getElementById("mute");

    mute.addEventListener('click', function() {

        
        if(!tocando) {
            musica.muted = false;
            musica.play();
            mute.innerHTML = "musica <verde>on<verde>";
            tocando = true;
        } else {
            musica.muted = true;
            mute.innerHTML = "musica <vermelho>off<vermelho>";
            tocando = false;
        }
        console.log(tocando);
    }, false);

    
    let main    = document.getElementById("main");
    let coluna1 = document.getElementById("col1");
    let coluna2 = document.getElementById("col2");
    let coluna3 = document.getElementById("col3");
    let coluna4 = document.getElementById("col4");

    let ganhou = document.getElementById("ganhou");

    let moeda   = document.getElementById("moeda");
    let jogar   = document.getElementById("jogar");
    let temMoeda = false

    let numeros;
    let resultados = [];

    jogar.style.color = "#777"
    
    moeda.onclick = function() {

        coluna1.style.color = "#000"
        coluna2.style.color = "#000"
        coluna3.style.color = "#000"
        coluna4.style.color = "#000"

        coluna1.style.transition = ".6s linear"
        coluna2.style.transition = ".6s linear"
        coluna3.style.transition = ".6s linear"
        coluna4.style.transition = ".6s linear"
        
        numeros = [];

        coluna1.style.transform = "translateY(-5253px)";
        coluna2.style.transform = "translateY(-6060px)";
        coluna3.style.transform = "translateY(-6868px)";
        coluna4.style.transform = "translateY(-10100px)";


        temMoeda = true;
        jogar.style.color = "#0f0"


    }

    numb1 = function() {numero1.play()}
    numb2 = function() {numero2.play()}
    numb3 = function() {numero3.play()}
    numb4 = function() {numero4.play()}

    jogar.onclick = function() {

        
        coluna1.style.transition = "4s ease-out"
        coluna2.style.transition = "4.6s ease-out"
        coluna3.style.transition = "5.2s ease-out"
        coluna4.style.transition = "7.5s ease-out"

        

        if(temMoeda) {

            setTimeout(numb1, 4000);
            setTimeout(numb2, 4600);
            setTimeout(numb3, 5200);
            setTimeout(numb4, 7500);

            rolo(coluna1);
            rolo(coluna2);
            rolo(coluna3);
            rolo(coluna4);

        }



        if(numeros[1] == numeros[0] ) {
            coluna1.style.color = "#F00";
            coluna2.style.color = "#F00";
            coluna1.style.transform = "scale(1.3)";
            coluna2.style.transform = "scale(1.3)";

        }
        if(numeros[2] == numeros[1] & numeros[2] == numeros[0]) {
            coluna3.style.color = "#F00";
            coluna3.style.transform = "scale(1.3)";
        }
        if(numeros[3] == numeros[2] & numeros[3] == numeros[0]) {
            coluna4.style.color = "#F00";
            coluna4.style.transform = "scale(1.3)";
        }
        let vitoria = numeros[0] + numeros[1] + numeros[2] + numeros[3];
        
        if(vitoria / 4 == numeros[0]) {
            let ganhar = function() {
                //ganhou.style.transform = "scale(1) rotate(360deg)"
            }
            setTimeout(ganhar, 8200);
        }
        
        temMoeda = false;
        jogar.style.color = "#777";
    }





    function rolo(elemento) {
        let numero  = Math.floor((Math.random() * 9) + 1);
        numeros.push(numero);
        console.log(numeros);
        switch(numero) {
            case 1:
                elemento.style.transform = "translateY(0)";
                break;

            case 2:
                elemento.style.transform = "translateY(-202px)";
                break;

            case 3:
                elemento.style.transform = "translateY(-404px)";
                break;
            
            case 4:
                elemento.style.transform = "translateY(-606px)";
                break;
        
            case 5:
                elemento.style.transform = "translateY(-808px)";
                break;

            case 6:
                elemento.style.transform = "translateY(-1010px)";
                break;
    
            case 7:
                elemento.style.transform = "translateY(-1212px)";
                break;
            
            case 8:
                elemento.style.transform = "translateY(-1414px)";
                break;
            
            case 9:
                elemento.style.transform = "translateY(-1616px)";
                break;
            
        }
    }

}
