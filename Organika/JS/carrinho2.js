const itens = [
	{
		id: 0,
		nome: "Filodendro Cordato",
		nomeTecnico: "Philodendron hederaceum",
		img: "./Imagens/filodendro.jpg",
		valor: 70,
		quantidade: 0,
		url: "./filodendro.html"
	},
	{
		id: 1,
		nome: "Hera",
		nomeTecnico: "Hedera helix",
		img: "./Imagens/hera.jpg",
		valor: 50,
		quantidade: 0,
		url: "./hera.html"
	},
	{
		id: 2,
		nome: "Samambaia Amazônica",
		nomeTecnico: "Polypodium aureum",
		img: "./Imagens/samambaia.jpg",
		valor: 80,
		quantidade: 0,
		url: "./samambaia.html"
	},
];

function carregarLoja(){
	let loja = document.querySelector("#produtos");

	itens.forEach((item) => {
		loja.innerHTML += `

			<div class="galeria">
	    		<img src="${item.img}" class="image" />
	    		<div class="title">${item.nome}</div>
	    		<p>${item.nomeTecnico}</p>
	    		<div class="description">R$ ${item.valor.toFixed(2)}</div>
	    		<a href="#" id="adiciona" class="buttonshop" key="${item.id}">COMPRAR</a><a href="${item.url}" class="buttonmore">SAIBA MAIS</a>
	    	</div>
					
		`;
	});

}
carregarLoja();

let itensDoCarrinho = document.querySelector("#carrinho");
	itens.forEach((item) => {
       	
       	if(item.quantidade <= 0) {
       		itensDoCarrinho.innerHTML = `
				<p class="card-text"><b>O carrinho está vazio :(</b></p>	
				`;
        }
   });

carregarCarrinho = () => {
   let itensDoCarrinho = document.querySelector("#carrinho");
   itensDoCarrinho.innerHTML = "";
   let valorTotal = 0;
   

   itens.forEach((item) => {
       	let subtotal = (item.valor * item.quantidade);

       	if (item.quantidade > 0) {
       		valorTotal += item.quantidade * item.valor;
            itensDoCarrinho.innerHTML += `
				<h5 class="card-title">${item.nome}</h5>
				<p class="card-text"><b>Quantidade:</b> ${item.quantidade}
				<br><b>Sub-total:</b> R$ ${subtotal.toFixed(2)}</p>
				<hr>
            `;
        }
   });
   itensDoCarrinho.innerHTML += `
   		<h5><b>Total da compra: <br>R$ ${valorTotal.toFixed(2)}</b></h5>
   		<hr>

   		<h5><b>Formas de pagamento:</b></h5>
   		<div class="form-check form-check-inline">
			<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
			<label class="form-check-label" for="inlineRadio1">Cartão de débito</label>
		</div>
		<div class="form-check form-check-inline">
			<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
			<label class="form-check-label" for="inlineRadio2">Cartão de crédito</label>
		</div>
		<div class="form-check form-check-inline">
			<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
			<label class="form-check-label" for="inlineRadio3">Boleto</label>
		</div>
   `;
};

let adicionados = document.querySelectorAll("#adiciona");

for (i = 0 ; i < adicionados.length; i++) {
    adicionados[i].addEventListener('click', function(){
        let key =  this.getAttribute('key');
        itens[key].quantidade++;
        carregarCarrinho();
    });
}		