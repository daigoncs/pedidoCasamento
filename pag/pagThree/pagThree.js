export default () => {
    const containerPagThree = document.createElement("div");

    const templateThree = `
        <style>
            .btn-no {
                position: relative;
                overflow: hidden;
            }

            .btn-no .txt-sim {
                display: none;
            }

            .btn-no:hover .txt-no {
                display: none;
            }

            .btn-no:hover .txt-sim {
                display: inline;
            }
        </style>    
        <div class="containerPrincipal">
        <section id="page3" class="page" aria-label="Pedido final">
            <div class="final-message" style="background:#fff;align-items: center;border-radius:12px;padding:24px;box-shadow:0 4px 24px #b96276ff;max-width:600px;margin:0 auto 24px;color:#8a0021">
            <p>Quero um futuro lindo onde a gente possa realizar todos os nossos sonhos juntos. E se Deus nos der um filho homem, vou fazer de tudo com ele, ele vai aprender a dirigir com 10 anos de idade, jogar futebol com 5 e aprender a bater nos outros com 3 (brincadeira rs), mas se for uma menina, ela será a segunda mulher mais amada e cuidada de todo o mundo, perdendo apenas para você, ninguem vai ser nem louco de chegar perto dela antes dos 30 kkk. E, independentemente de quem eles forem, minha vida será pela vida de vocês, para todo o sempre.</p>
            </div>
            <div class="final-card">
                <h2>Você fica comigo pelo resto da vida?</h2>
                <p style="color:#000000;margin:6px 0 0">
                    
                </p>
                <div class="btns">
                    <button class="btn btn-yes" id="yesBtn">Sim 💍</button>
                    <button class="btn btn-no" id="noBtn">
                        <span class="txt-no">Não</span>
                        <span class="txt-sim">Sim</span>
                    </button>
                </div>
            </div>
        </section>
        </div>
    `;

    containerPagThree.innerHTML = templateThree;

    const btnSim = containerPagThree.querySelector("#yesBtn");
    const btnNao = containerPagThree.querySelector("#noBtn");

    btnSim.addEventListener("click", () => {
        alert("Ela disse SIM! 💍❤ Parabéns!");
    });

    btnNao.addEventListener("click", () => {
        alert("Não existe essa opção. É SIM! 🎉💍");
    });

    return containerPagThree;
}
