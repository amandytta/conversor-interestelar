//Faz com que a segunda página não apareça na primeira
let box2 = document.querySelector(".box2");
box2.style.display = "none";

//Fazendo a primeira página funcionar
let buttonClear1 = document.getElementById("btnLimpar1");
let buttonConvert1 = document.getElementById("btnConverter1");

//Função que faz o botão converter da primeira página funcionar
buttonConvert1.addEventListener("click", function () {
    let nameUser = document.getElementById("nameUser").value;
    let valorEmKm = parseFloat(document.getElementById("valorKm").value);

    if (nameUser === "" || isNaN(valorEmKm) || valorEmKm <= 0) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    let anosLuz = valorEmKm * 0.0000000000001057;

    document.getElementById("resultConvert").textContent = anosLuz + " ly";
});

//Função que faz o botão limpar da primeira página funcionar
buttonClear1.addEventListener("click", function () {
    document.getElementById("valorKm").value = "";
    document.getElementById("resultConvert").textContent = "";
});

//Fazendo a segunda página funcionar
let buttonCalculo = document.getElementById("btnCalcular");
let buttonClear2 = document.getElementById("btnLimpar2");

//Função que faz o botão calcular da segunda página funcionar
buttonCalculo.addEventListener("click", function () {
    let estrela = document.getElementById("estrela").value;
    let velocidade = parseFloat(document.getElementById("valorKmH").value);
    let lyAlpha = 0;
    let lyEpsilon = 0;
    let horaPorAno = 8760;

    if (estrela === "" || isNaN(velocidade) || velocidade <= 0) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (estrela === "star1") {
        lyAlpha = 40680000000000000;
        //km em ly de alpha centauri
        let cal1Alpha = lyAlpha / velocidade;
        let cal2Alpha = Math.round(cal1Alpha / horaPorAno);
        document.getElementById("resultCalculo").textContent = cal2Alpha + " anos";

    } else {
        lyEpsilon = 99338000000000000;
        //km em ly de epsilon eridani
        let cal1Epsilon = lyEpsilon / velocidade;
        let cal2Epsilon = Math.round(cal1Epsilon / horaPorAno);
        document.getElementById("resultCalculo").textContent = cal2Epsilon + " anos";
    }
});

//Função que faz o botão limpar da segunda página funcionar
buttonClear2.addEventListener("click", function () {
    document.getElementById("valorKmH").value = "";
    document.getElementById("estrela").value = "";
    document.getElementById("resultCalculo").textContent = "";
});

//Fazendo a mudança de páginas
let pageTitle = "";
let body = "";
let box = document.querySelector(".box");
let modoAtual = "conversor";
let buttonSim = document.getElementById("btnSim");
let popup = document.querySelector(".pop-up");

//Função que realiza a troca da página ao clicar no botão sim
buttonSim.addEventListener("click", function () {
    pageTitle = document.querySelector(".page-title");
    body = document.body;
    btnSim = document.getElementById("btnSim");
    let popupText = document.getElementById("popup");

    //Condição que definirá para qual página ira mudar, e faz com que o layout da primeira página não apareça na segunda
    if (modoAtual === "conversor") {
        pageTitle.innerText = "Viagem Interestelar";
        body.classList.add("modo-alterado");
        box.style.display = "none";
        box2.style.display = "inline-block";
        popupText.innerText = "Deseja voltar para o Conversor Interestelar?";

        modoAtual = "viagem";

    } else {
        pageTitle.innerText = "Conversor Interestelar";
        body.classList.remove("modo-alterado");
        popupText.innerText =
            "Deseja saber quanto tempo levaria para viajar do nosso sol até uma estrela?";

        //Fazendo com que o layout da segunda página não apareça na primeira
        box.style.display = "inline-block";
        box2.style.display = "none";

        modoAtual = "conversor";
    }
});
