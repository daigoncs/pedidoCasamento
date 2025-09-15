import home from "./pag/home/home.js";
import pag2 from "./pag/pag2/pag2.js";
import pagThree from "./pag/pagThree/pagThree.js";  

const main = document.querySelector("#root");
window.addEventListener("click", () => {
  const bgMusic = document.getElementById("bgMusic");
  if (bgMusic && bgMusic.paused) {
    bgMusic.play();
  }
}, { once: true });

const init = () => {
  window.addEventListener("hashchange", () => {
    switch (window.location.hash) {
      case "#home":
        main.innerHTML = "";
        main.appendChild(home());
        break;
      case "#pag2":
        main.innerHTML = "";
        main.appendChild(pag2());
        break;
      case "#pagThree":
        main.innerHTML = "";
        main.appendChild(pagThree());
        break;
      default:
        main.appendChild(home());
    }
  });
  }


window.addEventListener("load", () => {
  main.appendChild(home());
  init();
});



/*const openBtn = document.getElementById('openBtn');
const heartWrap = document.getElementById('heartWrap');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const nextBtn = document.getElementById('nextBtn');
const panels = [document.getElementById('panel1'), document.getElementById('panel2')];
let panelIdx = -1;

openBtn.addEventListener('click', ()=> {
  // mostrar coração animado e depois ir pra galeria
  heartWrap.classList.add('show');
  openBtn.disabled = true;
  setTimeout(()=>{
    heartWrap.classList.remove('show');
    page1.classList.remove('active');
    page2.classList.add('active');
    // abrir primeiro painel
    showNextPanel();
  }, 1200);
});

// next arrow mostra painéis em sequência


// botão para ir ao pedido final
document.getElementById('toFinal').addEventListener('click', ()=> {
  page2.classList.remove('active');
  page3.classList.add('active');
});

// botão sim
document.getElementById('yesBtn').addEventListener('click', ()=> {
  alert('Ela disse SIM! 💍❤ Parabéns!');
});

// botão não só muda visual via CSS; ainda assim tratar clique
document.getElementById('noBtn').addEventListener('click', ()=> {
  // caso o usuário consiga clicar "não", trata como sim (surpresa)
  alert('Não existe essa opção. É SIM! 🎉💍');
})*/