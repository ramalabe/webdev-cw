

let slideIndex = 0;
showSlides();                             //A custom function for automatic slides                          

function showSlides(){
 let i;                               
 let slides = document.getElementsByClassName("mySlides-fade");
 let dots = document.getElementsByClassName("dot");
 for(i=0; i<slides.length;i++){
   slides[i].style.display ="none";                        
 }
 slideIndex++;
 if(slideIndex>slides.length){slideIndex =1}
 for(i=0;i<dots.length;i++){
   dots[i].className=dots[i].className.replace("active","");

 }
 slides[slideIndex-1].style.display="block";
 dots[slideIndex-1].className += " active";
 setTimeout(showSlides, 2000);            // Change image every 2 seconds

}

function cricket() {
  var x = document.getElementById("dropdown-container1");
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}
function basketball() {
  var x = document.getElementById("dropdown-container2");
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}
function rugby() {
  var x = document.getElementById("dropdown-container3");
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}

function Address() {
  var x = document.getElementById("address");
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}

function Contact() {
  
    var contactDiv = document.getElementById("contact");
    if (contactDiv.style.display === "none") {
      contactDiv.style.display = "block";
    } else {
      contactDiv.style.display = "none";
    }
  }




// array to store selected items
let selectedItems = [];

// select all "add to cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// attach event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {

    
    // get details of selected item
    const item = {
      name: button.parentElement.querySelector('h2').textContent,
      price: button.parentElement.querySelector('p').textContent,
      quantity: button.parentElement.querySelector('.quantity').value
    };
    
    // add item to selected items array
    selectedItems.push(item);
    
    // confirm item added to cart
    alert(`${item.name} added to cart!`);
  });
});

// select cart button
const cartButton = document.getElementById('cart-button');

// attach event listener to cart button
cartButton.addEventListener('click', () => {

  if (selectedItems.length === 0) {
    alert("Cart is empty ! Please select at least one item.");
  } else {
    
  // calculate total price
  const totalPrice = selectedItems.reduce((acc, item) => {
    return acc + parseFloat(item.price.replace('$', '')) * item.quantity;
  }, 0);

  

  // create new window
  const newWindow = window.open('', '_blank');
  
  
  // write selected items and total price to new window
  newWindow.document.write('<html><head>');
  newWindow.document.write('<link rel="stylesheet" type="text/css" href="style.css">');
  newWindow.document.write('<title>Cart Page</title>');
  newWindow.document.write('</head><body>');
  newWindow.document.write('<h1>Cart</h1><br><br>');
  newWindow.document.write('<h2>Selected Items:</h2>');
  newWindow.document.write('<table id="table-items">');
  newWindow.document.write('<tr><th>Name</th><th>Price</th><th>Quantity</th></tr>');
  selectedItems.forEach(item => {
    newWindow.document.write(`<tr><td>${item.name}</td><td>${item.price}</td><td>${item.quantity}</td></tr>`);
  });
  newWindow.document.write(`<tr><td colspan="2"><strong>Total Price:</strong></td><td>$${totalPrice.toFixed(2)}</td></tr>`);
  newWindow.document.write('</table>');
  newWindow.document.write('<button id="back" onclick="window.location.href=\'shop.html\'">Clear your Order</button>');
    newWindow.document.write('<button id="next" onclick="window.location.href=\'payment.html\'">Place your Order</button>');
  
  newWindow.document.write('</body></html>');
}
});

function cancel(){
  window.open("shop.html");
  
}



//Payemnt //

function cancelData2(){
  
  document.getElementById("pNumber").value = "";
  document.getElementById("emailAddrs").value = "";
      
}



 
 function saveData2(){
  
  var nemail = document.getElementById("emailAddrs").value;

  const contact = document.querySelector("#current-email");
  contact.innerHTML= nemail;


 }

 function Main(){
  window.open("shop.html");

 }
 
 function success(){
 
    var form = document.getElementById('myForm');
    if (form.checkValidity()) {
      window.open("new.html");
    } else {
      // Form is invalid, show error message
      alert('Please fill out all required fields.');
    }
    
  }
 


