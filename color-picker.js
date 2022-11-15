const colors = [
  { hex: '#CD5C5C', rgb: '205, 92, 92' },
  { hex: '#DC143C', rgb: '220, 20, 60' },
  { hex: '#8B0000', rgb: '139, 0, 0' },
  { hex: '#FF69B4', rgb: '255, 105, 180' },
  { hex: '#FF1493', rgb: '255, 20, 147' },
  { hex: '#C71585', rgb: '199, 21, 133' },
  { hex: '#FF6347', rgb: '255, 99, 71' },
  { hex: '#FF8C00', rgb: '255, 140, 0' },
  { hex: '#20B2AA', rgb: '32, 178, 170' },
  { hex: '#7FFFD4', rgb: '127, 255, 212' },
  { hex: '#228B22', rgb: '34, 139, 34' },
  { hex: '#9ACD32', rgb: '154, 205, 50' },
  { hex: '#FFD700', rgb: '255, 215, 0' },
  { hex: '#F0E68C', rgb: '240, 230, 140' },
  { hex: '#9370DB', rgb: '147, 112, 219' },

];

// шаблон
// {
//   // <div class='color-card'>
//   //   <div>
//   //     class='color-swatch'
//   //     data-hex=''
//   //     data-rgb=''
//   //     style='background-color: #955014'
//   //   </div>
//   //   <div class='color-meta'>
//   //     <p>HEX: #56789</p>
//   //     <p>RGB: 149,80,28</p>
//   //   </div>
//   // </div>
// }
const paletteContainer = document.querySelector('.js-palette');



const createColorCards = function (colors) {
  const { hex, rgb } = colors;
  return `
  <div class='color-card'>
    <div class='color-swatch'
      data-hex='${hex}'
      data-rgb='${rgb}'
      style='background-color: ${hex}'>
    </div>
    <div class='color-meta'>
      <p>HEX: ${hex}</p>
      <p>RGB: ${rgb}</p>
    </div>
  </div>
`;
};
const markup = colors.map(createColorCards).join('');
console.log(markup);
  
paletteContainer.insertAdjacentHTML('beforeend', markup); 
 
// При кліці на картку з кольором змінюємо колір тла

paletteContainer.addEventListener('click', onPaletteContainerClick);

function onPaletteContainerClick(event) {
  // console.log(event.target);
  const isColorSwatchEl = event.target.classList.contains('color-swatch');
  if (!isColorSwatchEl) {
    return
  };
  

  const currentActiveCard = document.querySelector('.color-card.is-active');
  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
  const  swatchEl= event.target;
  const parentColorCard = swatchEl.closest('.color-card');
  parentColorCard.classList.add('is-active');
  console.log(parentColorCard);
  document.body.style.backgroundColor = swatchEl.dataset.hex;
}
