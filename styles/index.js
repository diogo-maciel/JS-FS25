/**
 * adicionar uma class = element.classList.add(className)
 * remover uma classe = element.classList.remove(className)
 * remover ou adicionar uma class = element.classList.toggle(className)
 * 
 * adicionar um valor a uma propriedade css
 * element.style.property = value
 * Ex: p.style.color = "red"
 */

const container1 = document.getElementById("container-1");
const container2 = document.getElementById("container-2");
const container3 = document.getElementById("container-3");
const container4 = document.getElementById("container-4");

container1.classList.add("bg-red");
container2.classList.add("bg-blue");
container3.classList.add("bg-yellow");
container4.style.backgroundColor = "black";


