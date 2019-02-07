function deleteItem(e){
	var product = e.target.parentElement.parentElement

	product.parentNode.removeChild(product)

}

function getPriceByProduct(itemNode){
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
	var totalCart = 0
	var products = document.getElementsByClassName("product")
	var unitPrice = document.getElementsByClassName("unit-price")
	var quantity = document.getElementsByClassName("quantity")
	var totalPrice = document.getElementsByClassName("total-price")
	for (var i = 0; i < products.length; i++) {
		var total = unitPrice[i].innerHTML * quantity[i].value
		totalPrice[i].innerHTML = total
		totalCart += total
	}
	var totalCartElement = document.getElementById("total-cart")
	totalCartElement.innerHTML = totalCart

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
	var refProduct = document.getElementById("reference")
	var newName = document.getElementById("new-name")
	var newPrice = document.getElementById("new-price")
	var productList = document.getElementById("product-list")

	var newProduct = document.createElement("div")
	newProduct.className = "product"
	newProduct.innerHTML = refProduct.innerHTML

	newProduct.querySelector(".product-name").innerHTML = newName.value
	newProduct.querySelector(".unit-price").innerHTML = newPrice.value
	// newProduct.children[0].children[0].innerHTML = newName.value
	// newProduct.children[1].children[0].innerHTML = newPrice.value

	productList.appendChild(newProduct)

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
