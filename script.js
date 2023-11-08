let container = document.querySelector('#container');
let buttonErase = document.querySelector('#btn_erase');
let buttonColor = document.querySelector('#btn_color');
let containerSize = container.offsetWidth-2;
let cells;
let grid;
let rnd = (min,max) => Math.max(min,(Math.trunc(Math.random()*max+1)));

function spawnGrid(size){
    if(size > 100) size = 100;

    for(i = 0; i < size*size; i++ ){
    cells = document.createElement('div');
    container.append(cells);
    cells.className = 'cell';
    }

    grid = document.querySelectorAll('.cell');

    grid.forEach((square) => {
        square.style.height = `${(containerSize-size*2)/size}px`;
        square.style.width = `${(containerSize-size*2)/size}px`;

        let alpha = 1;

        square.addEventListener('mouseover', ()=>{
        alpha += 1; 

        if ( buttonColor.textContent == 'COLOR' ){
            square.style.backgroundColor = `rgba(0,0,0,${alpha/10})`;
        } else {
            square.style.backgroundColor = 
            `rgba(${rnd(10,255)}, ${rnd(10,255)}, ${rnd(10,255)}, ${alpha/10} )`;
        };
    
    })});
}

buttonErase.addEventListener('click', ()=>{
    grid.forEach((square) => square.remove());
    let size = prompt('Set your desired resolution (100 Max)', 16);
    spawnGrid(size);
});

buttonColor.addEventListener('click', ()=> {
    if (buttonColor.textContent == 'COLOR'){
        buttonColor.textContent = 'BLACK';
        buttonColor.classList.add('toggled');
    } else {
        buttonColor.textContent = 'COLOR';
        buttonColor.classList.remove('toggled');
    };
});

spawnGrid(16);