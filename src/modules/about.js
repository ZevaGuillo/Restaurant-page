function loadAbout(){
    const main = document.getElementById('main');
    main.textContent = "";
    const div = document.createElement('div');
    div.style.backgroundColor = 'red';

    main.appendChild(div);
}

export default loadAbout;