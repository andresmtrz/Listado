const contenedor = document.getElementById('contenedor');
const agregar = document.getElementById('agregar');
const limpiar = document.getElementById('limpiar');

function removeAll(){
    localStorage.setItem('losStrings',(JSON.stringify([])))
}

function addElement(str){
    let contenido = JSON.parse(localStorage.getItem('losStrings'));
    contenido.push(str);
    localStorage.setItem('losStrings',JSON.stringify(contenido));
}

function updateList(){
    const storedItems = JSON.parse(localStorage.getItem('losStrings'))
    contenedor.innerHTML = ''
    let contenidoAgregable = ''
    for (i = 0; i < storedItems.length; i++){
        contenidoAgregable = contenidoAgregable +`
            <li class='list-group-item'>${storedItems[i]}</li>
        `;
    }
    contenedor.innerHTML = contenidoAgregable;
}

if ((localStorage.getItem('losStrings')) == null){
    removeAll()
}

updateList()

agregar.addEventListener('click', ()=>{
    const texto = document.getElementById('item').value;
    if (texto !== ''){
        addElement(texto)
    }
    updateList();
})

limpiar.addEventListener('click', ()=>{
    removeAll();
    updateList();
})