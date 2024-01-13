 
 
 async function get(){
 var data = await fetch("https://dummyjson.com/products");
var result = await data.json();
var ahmed =result.products;
var Text = "";
for (var i=0; i<ahmed.length; i++){
var cartonna =`
          <div class = col-md-4 text-center >
              <img src ="${ahmed[i].images[3]}" class ="img-fluid" style ="height:344px">
              <h2>${ahmed[i].description}</h2>
              <h5>${ahmed[i].price}</h5>
              </div>
              `;
              Text = Text + cartonna
}
 document.querySelector("#product").innerHTML = Text;
}
get();
