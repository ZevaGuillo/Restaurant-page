function loadHome(){
    const main = document.getElementById('main');
    main.textContent = "";
    const div = document.createElement('div');
    div.style.backgroundColor = 'blue';
    div.style.width = '100%';
    div.style.height = '100%';

    main.appendChild(div);
}

export default loadHome;