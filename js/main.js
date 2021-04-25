// Whilst this JS works you could achieve the same effect in CSS like this
// .card:hover {
//     border-color: mediumSeaGreen;
// }

// In general, if something can be achieved with CSS instead of JS then you should opt to do in CSS
// because this is better for perfomance and also some people might have their JS disabled in the browser
// and so won't have access to that funcionality. 

function changeBg(obj, colorName) {
    obj.style.borderColor = colorName;
}

// For this code test you could play around with creating your own carousel for the images, here is an example of how to 
// do something like that: https://www.w3schools.com/howto/howto_js_slideshow.asp