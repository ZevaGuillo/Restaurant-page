function loadAbout(){
    const main = document.getElementById('main');
    main.textContent = "";
    const div = document.createElement('div');
    div.style.backgroundColor = 'red';
    div.style.width = '100%';
    div.style.height = '100%';

    main.appendChild(div);
}

export default loadAbout;