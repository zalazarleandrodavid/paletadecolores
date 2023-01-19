const paletaContainer= document.getElementById('paletaContainer');
const colorRange = document.getElementById('colorRange');
const colorValues = ['1','2','3','4','6','7','8','9','A','B','C','D','E','F'];
const PALLETE_SIZE = 5;

const createPaleta =() => {
    for (let i = 0; i < PALLETE_SIZE; i++) {
        const paletaElement = document.createElement('div');
        paletaElement.classList.add('paletaItem');
        paletaContainer.appendChild(paletaElement);
    }
};

createPaleta();