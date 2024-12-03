const h1 = document.getElementById("titulo");
h1.innerText = "Produtos à venda:";

const img = document.createElement("img");
const h3 = document.createElement("h3");
const h4 = document.createElement("h4");
const p = document.createElement("p");

img.src = "https://electrolux.vtexassets.com/arquivos/ids/236044-1200-1200?v=638316042170170000&width=1200&height=1200&aspect=true";
img.alt = "Imagem-Geladeira";
img.style.height = "300px";
img.style.width = "300px";
h3.innerText = "Geladeira Electrolux Frost Free Inverter 490L";
h4.innerText = "A Geladeira Frost Free 490 Litros (IB7B) conta com design sofisticado em acabamento Black Inox Look, uma superfície com aparência de inox preto para cozinhas elegantes e modernas.";
p.innerText = "R$ 4.799,00";

const div = document.getElementById("produto");
div.append(img, h3, h4, p);
