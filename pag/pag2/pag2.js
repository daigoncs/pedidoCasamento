export default () => {
    const containerPagTwo = document.createElement("div");

    const templatePagTwo = `
            <section id="page2" class="page" aria-label="Galeria">

                <div class="polaroid-stage" aria-hidden="false">
                <figure class="polaroid p1"><img src="img/4.JPG" alt="Polaroid 1"><figcaption>Eu amo quando você ativa o seu “modo 220”</figcaption></figure>
                <figure class="polaroid p2"><img src="img/20.JPG" alt="Polaroid 2"><figcaption>Que fala bastante, expressa tudo o que sente, que dança e que ri alto</figcaption></figure>
                <figure class="polaroid p3"><img src="img/3.JPG" alt="Polaroid 3"><figcaption>Essa sua energia me recarrega por completo</figcaption></figure>
                </div>

                <div class="mini-polaroids" style="display:flex;justify-content:cienter;gap:18px;margin:38px 0 18px;">
                <figure class="polaroid mini"><img src="img/6.jpg" alt="Mini 1"><figcaption>Seu sorriso</figcaption></figure>
                <figure class="polaroid mini"><img src="img/10.JPG" alt="Mini 2"><figcaption>Seu abraço</figcaption></figure>
                <figure class="polaroid mini"><img src="img/1.JPG" alt="Mini 3"><figcaption>Seu olhar</figcaption></figure>
                </div>

            <div class="text-container" aria-hidden="false" style="background:#fff;border-radius:12px;padding:24px;box-shadow:0 4px 24px #de5b8722;max-width:600px;margin:0 auto;">
                <span id="typingText"></span>
            </div>

            <div>
            <button id="toFinal" class="btn" style="background:#de5b87;color:#fff;padding:10px 16px;border-radius:8px">continua</button>
            </div>

        </div>
        </section>

    `;

    containerPagTwo.innerHTML = templatePagTwo;

        // Efeito digitando
    const text = `Eu só quero estar com você, construindo uma vida. Em uma casa, um apartamento… 
        contigo, eu moro até na calçada.`;
    const typingText = containerPagTwo.querySelector("#typingText");
    let idx = 0;

    function typeEffect() {
        if (idx < text.length) {
            typingText.textContent += text[idx];
            idx++;
            setTimeout(typeEffect, 35); // velocidade da digitação
        }
    }
    typeEffect();

    const btnToFinal = containerPagTwo.querySelector("#toFinal");
    
    btnToFinal.addEventListener("click", (e) => {
        e.preventDefault();
            window.location.hash = "#pagThree";
    });

    return containerPagTwo;
}