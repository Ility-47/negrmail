/* Смена темы */
const form = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["button"];
function changeSub() {
    const link = document.querySelectorAll('.header__menu__item a');
    const bioText = document.querySelector('.biography__text');
    const socLink = document.getElementsByTagName('i');
    const tagLight = [...link, ...socLink];
    const cout = tagLight.length;


    for (let i = 0; i < cout; i++) {
        tagLight[i].classList.toggle('lightA');
    }
    bioText.classList.toggle('lightText')
    document.body.classList.toggle('light');
}

formArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
      el.setAttribute("is-valid", "0");
      validFormArr.push(el);
    }
  });
  
  form.addEventListener("input", inputHandler);
 // button.addEventListener("click", buttonHandler);
  
  function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
      inputCheck(target);
    }
  }
  
  function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
      el.setAttribute("is-valid", "1");
      el.style.border = "2px solid rgb(0, 196, 0)";
    } else {
      el.setAttribute("is-valid", "0");
      el.style.border = "2px solid rgb(255, 0, 0)";
    }
  }

  /*скролл по якорным ссылкам */
  
  const anchors = document.querySelectorAll('a.scroll-to')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href')
      
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }