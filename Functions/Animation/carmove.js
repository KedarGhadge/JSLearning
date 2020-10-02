var imgObj = null;
var animation;
function init()
{
  imgObj = document.getElementById('mycar');
  imgObj.style.position = 'relative'; //To keep it at original coordiantes and original size
  imgObj.style.left = '0px';
  btnObj = document.getElementById('startBtn')  //created object of the start button
}
function start()
{
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px' //moving image by 10 px right by adding 10px padding at left
  animation = setTimeout(start,200)   //start function get call at each 200ms
  imgObj.style.zoom = parseInt(imgObj.style.left) + 10 + '%' //zooming image by 10% at each function call
  btnObj.disabled = 'true'; //once start function call start button disabled
  btnObj.style.color = '#e7e7e7';
  btnObj.style.opacity = '0.6'; //to give disable look for start button
}
function stop()
{
  clearTimeout(animation);  //timeout function will call and it stops setTimeout
  imgObj.style.left = '0px';
  imgObj.style.zoom = 'initial';  //taking image at original position
  btnObj.disabled = false;
  btnObj.style.color = 'white';
  btnObj.style.opacity = '1';
}

window.onload = init  //on window load init function will get call
