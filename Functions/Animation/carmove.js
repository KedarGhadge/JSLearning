var imgObj = null;
var animation;
function init()
{
  imgObj = document.getElementById('mycar');
  imgObj.style.position = 'relative';
  imgObj.style.left = '0px';
}
function start()
{
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px'
  animation = setTimeout(start,200)
  imgObj.style.zoom = parseInt(imgObj.style.left) + 10 + '%'

}
function stop()
{
  clearTimeout(animation);
  imgObj.style.left = '0px';
  imgObj.style.zoom = 'initial';
}

window.onload = init
