function messageHome(){
    const divTitle = document.createElement('div');
    divTitle.classList.add('titleHome');
    const h2 = document.createElement('h2');
    h2.textContent = "Si tienes hambre y quieres comer una deliciosa pizza, Mou´s pizza es la mejor opción. "



    divTitle.appendChild(h2);
    return divTitle;
}


function loadHome(){
    const main = document.getElementById('main');
    main.textContent = "";
    const div = document.createElement('div');
    div.classList.add('home');

    div.appendChild(messageHome());
    main.appendChild(div);
}

export default loadHome;