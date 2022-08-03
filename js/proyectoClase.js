const cambiarTitulo = () => { //.titulo(si es class)// o (h1: si es etiqueta)
let tituloPrincipal = document.querySelector('#titulo');
// console.log(tituloPrincipal); //verificamos si presionamos el button, funciona
tituloPrincipal.innerHTML = "Nuevo titulo"; //con inner.html cambiamos el texto, parrafo, titulo, etc
tituloPrincipal.className = "colorTitulo display-4"//para acceder a las clases que tiene nuestro html y asignarle nuevas clases.. tambien podemos asignarle nuestras propias clases(como 'colorTitulo')
}
const verMas = () => {
    // console.log("probamos si funciona");
    //creamos parrafo(dos formas)
//1ra forma: 
    let parrafoNuevo = document.createElement("p");
    // console.log(parrafoNuevo) //Aparece <p></p> en consola.
    parrafoNuevo.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus odit possimus deserunt non a? Vitae delectus facere ad assumenda, esse, hic dolore, unde molestiae quam dolor odit voluptatum. Sequi, a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem omnis fugiat beatae temporibus, saepe optio modi! Hic sed quos alias consequatur maxime, ea recusandae molestias? Nesciunt ducimus porro ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis provident quaerat maxime quis, exercitationem quae magnam cupiditate earum eveniet ullam repellendus, accusantium eligendi ea culpa eaque suscipit commodi, dicta ipsum?'
    parrafoNuevo.className = "lead"
    // console.log(parrafoNuevo) //Antes de anclar, probamos si todos los cambios se ven!
    
    //ahora llevamos los cambios al html.. los 3 casos hacen lo mismo
    // let sectionPadre = document.getElementById("idTitle") //retorna metodo indivual, mas especifico
    let sectionPadre = document.getElementsByClassName("container"); //retorna un arreglo de nodos(htmlCollection), traeme todas las clases que tengan 'container'

    // let sectionPadre = document.getElementsByTagName("section")

    console.log(sectionPadre);//realizamos con className el ejer
    console.log(sectionPadre[1]);//nos devolvera eñ segundo elemento del arreglo generado por .className
    // sectionPadre[1].appendChild(parrafoNuevo);//agrega un nodo hijo al final // no es lo que quiero hacer
    // sectionPadre[1].prepend(parrafoNuevo)//lo agrega al principio//tampoc es lo que quiero hacer
    sectionPadre[1].insertBefore(parrafoNuevo, document.getElementById("boton"))//traemos el boton ya que no lo trajimos. InsertBefore(nodoNuevo, nodoHijo) inserta un nodo antes de un nodo hijo.

    
    //NOTA PARA ACCEDER A LO QUE ESCRIBO DENTRO DE UN INPUT, NO USAR inner.html, USAR VALUE!!!!!
    console.log(document.getElementById("buscador").value)
}
   