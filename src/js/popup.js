document.addEventListener("DOMContentLoaded", () => {
    let popupBg = document.querySelector('.popup__bg');
    let popup = document.querySelector('.popup');
    let openPopupButtons = document.querySelectorAll('.ref__btn');
    let closePopupButton = document.querySelector('.close-popup');
    
    openPopupButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            popupBg.classList.add('active');
            popup.classList.add('active');
        })
    });
    
    closePopupButton.addEventListener('click',() => {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    });
    
    document.addEventListener('click', (e) => {
        if(e.target === popupBg) {
            popupBg.classList.remove('active');
            popup.classList.remove('active');
        }
    });
});