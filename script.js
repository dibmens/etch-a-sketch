let container = document.querySelector('#container');

for(i = 0; i < 256; i++ ){
    let cell = document.createElement('div');
    container.append(cell);
    cell.className = 'cell';
}

