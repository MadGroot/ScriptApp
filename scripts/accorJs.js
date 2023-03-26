const items = document.querySelectorAll('.accordion .accordionItem');

items.forEach(item => {
    const x = item.querySelector('.accordionHeader');

    x.addEventListener('click', () => {
        x.nextElementSibling.classList.toggle('active')
    });
}); 