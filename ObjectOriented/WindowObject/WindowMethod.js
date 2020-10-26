function openCenterWindow(url)
{
  var width = 800;
  var height = 600;

  var windowFeatures = "width="+width+",height="+height+"status, resizable";
  myWindow = window.open(url,"example",windowFeatures);
}

function show_alert()
{
  alert("Hi!! I am an alert box");
}

function resizeW()
{
  window.resizeBy(-100,-100);
}

function close_window()
{
  if (window.confirm("do you want to close the browser?"))
  window.close();
}
