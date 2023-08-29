let Respostas = [
    ["Investigar o som","Ignorar o som"],
    ["Interagir com o gato", "Ignorar o gato"],
    ["Investigar a fresta","Deixar pra lá"],
    ["Refletir sobre a experiência", "Voltar à realidade"],
    ["Observar as sombras","Ignorar as sombras"],
    ["Aprender a lição","Desprezar a experiência"]
]

let EtapaDahistoria = 0;
let selecionado = 0; 
let pontuacao = 0;

let opt1 = document.querySelector("#opt-1");
let opt2 = document.querySelector("#opt-2");

let chat = document.querySelector(".chat-body");
function VerificarHistoria(){
    if(EtapaDahistoria == 0){
        if(selecionado == 1){
            chat.innerHTML +=`
            <div class="message  outgoing">
                <p>Investigar o som</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você se aproxima do som de gotejar.</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você se depara com a porta do armário entreaberta. Algo se move lá dentro. Um ronronar suave preenche o ar, e seu gato aparece ao seu lado.</p>
            </div>
            `
            EtapaDahistoria = 1
            opt1.innerText = Respostas[1][0]
            opt2.innerText = Respostas[1][1]
        }else{
            chat.innerHTML +=`
            <div class="message  outgoing">
                <p>Ignorar o som</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você decide que é apenas sua imaginação e vai dormir. </p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>FIM!</p>
            </div>
            `
            opt1.innerText = "FIM!"
            opt2.innerText = "FIM!"
            EtapaDahistoria = "FIM"
        }
    }
    else if(EtapaDahistoria == 1){
        if(selecionado == 1){
            chat.innerHTML +=`
            <div class="message  outgoing">
                <p>Interagir com o gato</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você acaricia seu gato e busca conforto em sua presença.</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você decide olhar mais de perto para a fresta da porta do armário. A figura misteriosa desapareceu.</p>
            </div>
            `
            EtapaDahistoria = 2
            opt1.innerText = Respostas[2][0]
            opt2.innerText = Respostas[2][1]
        }
        else{
            chat.innerHTML +=`
            <div class="message  outgoing">
                <p>Ignorar o gato</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você decide que o gato não é relevante e continua a investigar o armário.</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você decide olhar mais de perto para a fresta da porta do armário. A figura misteriosa desapareceu.</p>
            </div>
            `
            EtapaDahistoria = 2
            opt1.innerText = Respostas[2][0]
            opt2.innerText = Respostas[2][1]
        }
    }else if(EtapaDahistoria == 2){
        if(selecionado == 1){
            chat.innerHTML +=`
            <div class="message  outgoing">
                <p>Investigar a fresta</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você se inclina mais perto para ver o que está lá dentro</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você observa a fresta da porta, mas agora não há mais nada lá. Confusão e dúvida tomam conta de você.</p>
            </div>
            `
            EtapaDahistoria = 3
            opt1.innerText = Respostas[3][0]
            opt2.innerText = Respostas[3][1]
        }else{
            chat.innerHTML +=`
            <div class="message  outgoing">
                <p>Deixar pra lá</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você decide que é melhor não investigar mais e se afasta do armário. (Fim do Jogo)</p>
            </div>
            `
            opt1.innerText = "FIM!"
            opt2.innerText = "FIM!"
            EtapaDahistoria = "FIM"
        }
    }else if(EtapaDahistoria == 3){
        if(selecionado == 1){
            chat.innerHTML +=`
            <div class="message  outgoing">
                <p>Refletir sobre a experiência</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você se senta para refletir sobre o que aconteceu e o que isso pode significar.</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Enquanto você reflete, as sombras na parede começam a dançar. Você sente uma mistura de emoções.</p>
            </div>
            `
            EtapaDahistoria = 4
            opt1.innerText = Respostas[4][0]
            opt2.innerText = Respostas[4][1]
        }else{
            chat.innerHTML +=`
            <div class="message  outgoing">
                <p>Voltar à realidade</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você decide que é melhor deixar de lado e voltar às suas atividades normais. (Fim do Jogo)</p>
            </div>
            `
            opt1.innerText = "FIM!"
            opt2.innerText = "FIM!"
            EtapaDahistoria = "FIM"
        }
    }else if(EtapaDahistoria == 4){
        if(selecionado == 1){
            chat.innerHTML +=`
            <div class="message  outgoing">
                <p>Aprender a lição</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você reconhece a profundidade do que viveu e entende que o desconhecido pode ser explorado e compreendido.</p>
            </div>
            `
            opt1.innerText = "FIM!"
            opt2.innerText = "FIM!"
            EtapaDahistoria = "FIM"
        }else{
            chat.innerHTML +=`
            <div class="message  outgoing">
                <p>Desprezar a experiência</p>
            </div>
            `
            chat.innerHTML += `
            <div class="message incoming">
                <p>Você decide que é melhor não pensar mais nisso e segue em frente. </p>
            </div>
            `
            opt1.innerText = "FIM!"
            opt2.innerText = "FIM!"
            EtapaDahistoria = "FIM"
        }
    }
}

opt1.addEventListener("click",ev =>{
    selecionado = 1;
    VerificarHistoria()
})
opt2.addEventListener("click",ev=>{
    selecionado = 2;
    VerificarHistoria()
})

chat.innerHTML += `
<div class="message incoming">
    <p>Você está em seu quarto na cidade de Sombramontes. Uma sensação de inquietude paira no ar. Você decide ficar acordado até tarde, apesar dos pensamentos sobre manter as portas fechadas. 
    </p>
</div>`
chat.innerHTML += `
<div class="message incoming">
    
<p>Vc ouve um barrulho de gotejar oq vc faz?</p>

</div>`
opt1.innerText = Respostas[0][0]
opt2.innerText = Respostas[0][1]

