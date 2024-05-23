const productList = [
    {id: "product_1", image: "./pictures/product-1.jpg", color: "./pictures/ColorClothes1.png" , name: "Naminos Dementus A Milance - Pattern ", price: "$86.00 - $99.00", detail:'Sodling', group:'clothes'},
    {id: "product_2", image: "./pictures/product-2.jpg", color: "./pictures/ColorClothes2.png" , name: "Dinterdum Pretium Condimento - Pattern ", price: "$139.00 - $189.00", detail:'Tomorrow', group:'clothes'},
    {id: "product_3", image: "./pictures/product-3.jpg", color: "./pictures/ColorClothes4.png" , name: "Magnis Darturien Metro Lacinis - Black", price: "$86.00", detail:'Paul Smith', group:'clothes'},
    {id: "product_4", image: "./pictures/product-4.jpg", color: "./pictures/ColorClothes4.png" , name: "Loremous Saliduar A Cosmopolito - Pattern", price: "$86.00  - $99.00", detail:'Donatello', group:'clothes'},
]

function renderProductItem(product) {
    let item = `
     <div class="clothes">
     <div class="image-clothes">
       <img class="image" src="${product.image}" width="100%" alt="image-clothes">
       <img class="icon" src="./pictures/IconLike.png" alt="icon-clothes">
       <div class="add-cart">
          <p>Add to cart</p>
       </div>
     </div>
    
    <div class="infor_clothes">
      <p class="detail">${product.detail}</p>
      <p>${product.name}</p>
      <div class="price">
        <span class=" product-price " >${product.price.toLocaleString()}</span>
      </div> 
      <div class="color">
        <img src="${product.color}" alt="color">
      </div>
  </div>
</div>`;
    return item;
}

function renderProductList(productList) {
    let content = ''
    for (const product of productList) {
        content+= renderProductItem(product);
    }
    return content
}
renderProductList(productList);

function renderProductByGroup(productList, group){
    const productListElement = document.getElementById(group);

    const products = productList.filter(product=>product.group === group)
    const content = renderProductList(products)
    productListElement.innerHTML += content;

}
renderProductByGroup(productList, 'clothes')