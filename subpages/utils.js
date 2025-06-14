export function closeModal(){
  document.querySelector(".modal").style.display="none";
}


export async function getData(productArray) {
    const response = await fetch("../products.json");
    const data = await response.json();
    const matchedObjects = data.filter(obj =>
      productArray.includes(obj.name)
    );
    const productMap = new Map(data.map(obj => [obj.name, obj]));

  // Map the productArray to get objects in the correct order
  const sortedObjects = productArray.map(name => productMap.get(name)).filter(Boolean);

    displayProducts(matchedObjects);
  }
  
  const productGrid = document.querySelector(".product-grid");
  
  export function displayProducts(products){
    productGrid.innerHTML="";
    products.forEach(product=>{
      const productName = product.name;
      const productImage = product.image;
      const card = document.createElement("div");
      card.className="product-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", productName);
      card.innerHTML=`
          <div class="image-wrapper">
          <img src="../${productImage}" alt="${productName}" class="product-image" />
          </div>
          <div class="product-info">
            <h3>${productName}</h3>
          </div>
          `;
          card.addEventListener('click' , ()=>{
            document.querySelector("#modalBody").innerHTML="hello";
            document.querySelector(".modal").style.display="block";
              console.log("99")
          });
      productGrid.append(card);
    });
  
  }
 