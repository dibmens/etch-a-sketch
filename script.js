let container = document.querySelector('#container');
let button = document.querySelector('#btn');
let containerSize = container.offsetWidth-2;
let cells;
let grid;


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
        square.addEventListener('mousemove', ()=>{
        square.classList.add('ink');      
    })});
}

button.addEventListener('click', ()=>{
    grid.forEach((square) => square.remove());

    let size = prompt('Set your desired resolution (100 Max)', 16);
    spawnGrid(size);
});

spawnGrid(16);