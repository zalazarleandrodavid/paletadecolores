const paletaContainer= document.getElementById('paletaContainer');
const colorRange = document.getElementById('colorRange');
const colorValues = ['1','2','3','4','6','7','8','9','A','B','C','D','E','F'];
const PALETA_SIZE = 5;

const createPaleta =() => {
    for (let i = 0; i < PALETA_SIZE; i++) {
        const paletaElement = document.createElement('div');
        paletaElement.classList.add('paletaItem');
        paletaContainer.appendChild(paletaElement);
    }
    updatePaleta();
};



const colorear =(paletaElement) => {
    let color='#'
    for(let i = 0; i < 6; i++){
        const randomElement= colorValues[Math.floor(Math.random() *colorValues.length)];
        color += randomElement;
    };
    paletaElement.style.backgroundColor = color;
    paletaElement.innerHTML = `<span class='colorHex'>${color}</span>`;
}

const updatePaleta = () => {
    for (let i = 0; i < paletaContainer.children.length; i++) {
        colorear(paletaContainer.children[i])
    }
    
};  


createPaleta();


