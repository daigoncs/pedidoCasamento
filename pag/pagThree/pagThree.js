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
            <div class="final-card">
                <h2>Você fica comigo pelo resto da vida?</h2>
                <p style="color:#000000;margin:6px 0 0">
                    Quero um futuro lindo onde a gente possa realizar todos os nossos sonhos juntos.
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
