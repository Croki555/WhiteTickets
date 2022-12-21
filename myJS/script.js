const login = document.querySelector('.personal-acc');

function close (item) {
    item.remove();
}

login.addEventListener('click', ()=> {
    let div = document.createElement('div');
    let body = document.querySelector('.body');
    div.classList.add('login');
    div.innerHTML = `
    <form action="#" class="login__form">
        <h2 class="login__title">Вход в личный кабинет</h2>
        <input type="text" class="login__input-name" placeholder="Имя пользователя*">
        <input type="password" class="login__input-password" placeholder="Пароль*">
        <button class="login__btn" type="submit">Войти</button>
        <button class="login__btn-close">&#10006;</button>
    </form>
    `;
    body.appendChild(div);
    let btnClose = document.querySelector('.login__btn-close');
    if(btnClose) {
        btnClose.addEventListener('click', ()=> {
           close(div);
           document.querySelector('.body').removeAttribute('style');
        });
    }
    document.querySelector('.body').setAttribute('style', 'pointer-events: none;');
})

const sliderItem = document.querySelectorAll('.slider__block');
        const btnNext = document.querySelector('.slider__btnNext');
        const btnPrev = document.querySelector('.slider__btnPrev');
        let count = 0;
        btnNext.addEventListener('click', () => {
            ++count;
            if(count >= sliderItem.length) {
                sliderItem[count-1].classList.remove('slider__open');
                count = 0;
                sliderItem[count].classList.add('slider__open');
            } else {
                sliderItem[count-1].classList.remove('slider__open');
                sliderItem[count].classList.add('slider__open');
            }
        })

        btnPrev.addEventListener('click', () => {
            --count;
            if(count == -1) {
                sliderItem[count+1].classList.remove('slider__open');
                count = sliderItem.length - 1;
                sliderItem[count].classList.add('slider__open');
                console.log(count);
            } else {
                sliderItem[count+1].classList.remove('slider__open');
                sliderItem[count].classList.add('slider__open');
            }
        })




