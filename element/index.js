/**
 * document.creatElement -> criar elemento no documento
 * node.appendChild -> adicionar o elemento como último nó do pai
 * node.insertBefore -> inserir elemento antes do outro elemento
 * node.removeChild -> remover um filho do elemento
 * document.getElementById -> buscar o elemento com o id específico
 * node.innerText -> Escrever texto no elemento selecionado
 * document.getElementsByClassName
 * document.getElementsByTagName
 */

const paragrafo1 = document.createElement("p");
const paragrafo2 = document.createElement("p");
const container = document.getElementById("container");
paragrafo1.innerText = "Texto 1 criado pelo JavaScript";
paragrafo2.innerText = "Texto 2 criado pelo JavaScript";
container.appendChild(paragrafo2);
//container.appendChild(paragrafo1);
container.insertBefore(paragrafo1, paragrafo2);
//container.insertBefore(paragrafo1, container.firstChild);
container.removeChild(paragrafo2);


/**
 * Exercício
 * criar uma div, um h1, um hr e um p pelo JS
 * INCLUIR ESSA DIV NO BODY
 * COLOCAR O TEXTO "hELLO Word" no h1
 * incluir o h1 na div criada
 * incluir o hr na div criada
 * incluir um p na div criada
 * colocar o seu nome no elemento p
 * remover o h1 da div
 */


const valor1 = document.createElement("div");
const valor2 = document.createElement("h1");
const valor3 = document.createElement("hr");
const valor4 = document.createElement("p");
document.body.appendChild(valor1);
valor2.innerText = "Hellow Word";
valor1.appendChild(valor2);
valor1.appendChild(valor3);
valor1.appendChild(valor4);
valor4.innerText = "Nome";
valor1.removeChild(valor2);


const paragrafos = documentos.getElementsByTagName("p");
const paragrafo = document.querySelector("#p")
console.log(paragrafos, paragrafo);


