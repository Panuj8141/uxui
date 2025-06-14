const headers =[
    {
        "image":"caterer-essentail.png",
        "header":"🍽 Caterer's Essentials",
        "description":"Bulk-use items and hygiene products designed to power smooth, large-scale food service."
    },
    {
        "image":"party-and-event-decoration.png",
        "header":"🎉 Party & Event Decoration",
        "description":"Everything you need to light up birthdays, weddings, and festive moments with fun and color."
    },
    {
        "image":"carry-and-waste-solution.png",
        "header":"♻ Carry & Waste Solutions",
        "description":"Eco and utility bags, garbage liners, and wraps — for smart storage and clean disposal."
    },
    {
        "image":"disposable-home-and-function.png",
        "header":"🏠 Disposable Home & Function Use",
        "description":"Plates, bowls, and cutlery for poojas, haldi, family feasts, and everyday convenience."
    },
    {
        "image":"retial-and-takewaay.png",
        "header":"🛍 Retail & Takeaway Supplies",
        "description":"Serving and packing essentials for tea stalls, snack vendors, and food-on-the-go businesses."
    }
];
const productSection = document.querySelector(".product-section");

headers.forEach(head =>{
    const imageName = head.image;
    const imagesrc = imageName.replace("png", "html");
    const productCard = document.createElement("div");
    productCard.className="product-card";
    productCard.innerHTML=`
        <img src="images/${head.image}" alt="image of product" class="product-image">
        <h3>${head.header} </h3>
        <p>${head.description}</p>
        `;
        productCard.addEventListener('click' , ()=>{
            window.location.href=`subpages/${imagesrc}`;
        });
    productSection.append(productCard);
});
