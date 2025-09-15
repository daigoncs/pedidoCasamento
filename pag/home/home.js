export default () => {
    const containerHome = document.createElement("div");

    const templateHome = `

        <div class="containerPrincipal">
        <div class="boxPrincipal">
        <section id="page1" class="page active" aria-label="Página inicial">
            <h1 style="font-size:28px;margin:0 0 16px">Meu amor </h1>
            <p class="paragraphOne"></p>
            <button id="openBtn" aria-label="Abrir surpresa">Clica aqui</button>
            <div class="heart-wrap" id="heartWrap" aria-hidden="true">
            <div class="heart"></div>
            </div>
        </div>
        </section>
        </div>
    `;

    containerHome.innerHTML = templateHome;

    const paragraphOne = containerHome.querySelector(".paragraphOne");
    const text = "Sei que este pedido não é o mais perfeito, nem o mais elaborado, mesmo que você mereça o mundo inteiro...Mas é por você que escolho, dia após dia, tentar ser melhor, crescer junto a você, e dedicar cada instante para te fazer feliz. Minha promessa não é de perfeição, mas de amor constante, cuidado e entrega, para que cada momento ao seu lado seja único e inesquecível.    ";
    let idx = 0;

    function typeEffect() {
        if (idx < text.length) {
            paragraphOne.textContent += text[idx];
            idx++;
            setTimeout(typeEffect, 35);
        }
    }
    typeEffect();

    const btnOpen = containerHome.querySelector("#openBtn");
    const heartWrap = containerHome.querySelector("#heartWrap");
    const bgMusic = containerHome.querySelector("#bgMusic");
    btnOpen.addEventListener("click", (e) => {
        if (bgMusic) bgMusic.play();
        e.preventDefault();
        heartWrap.classList.add("show"); // Faz o coração aparecer
        setTimeout(() => {
            window.location.hash = "#pag2";
        }, 1200); // Dá tempo para a animação aparecer antes de trocar de página
    });

    return containerHome;
}