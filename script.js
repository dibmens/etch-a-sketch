let container = document.querySelector('#container');
let button = document.querySelector('#btn');

function spawnGrid(size = 16){

    for(i = 0; i < size*size; i++ ){
    let cell = document.createElement('div');
    container.append(cell);
    cell.className = 'cell';
    }
}

spawnGrid();

let grid = document.querySelectorAll('.cell');

// container.addEventListener('mouseenter', ()=> container.classList.add('ink'));

button.addEventListener('click', ()=>{

    let oldGrid = document.querySelectorAll('.cell');
    grid.remove();

    let size = prompt('Enter your preferred grid size (4x4-20x20)',16);
    spawnGrid(size);
})
