//element.getAttribute(attributeName) -> Retorno o valor do atributo
//element.setAttribute(attributeName, value) -> configura novo valor
//element.removeAttribute(attributeName)-> remove


const paragrafo = document.querySelector("p");
paragrafo.setAttribute("class", "classe-teste");
//console.log(paragrafo);
console.log(paragrafo.getAttribute("class"));
