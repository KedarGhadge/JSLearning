function ShowNaviatorProperty()
{
  with(document)
  {
    write("<b>appname:</b>");
    write(navigator.appname+"</br>");
    write("<b>appversion:</b>");
    write(navigator.appversion+"</br>");
    write("<b>platform:</b>");
    write(navigator.platform+"</br>");
    write("<b>useragent:</b>");
    write(navigator.useragent+"</br>");
    write("<b>Cookies enabled?:</b>")
    writeln(navigator.cookieEnabled+"</br>");
  }
}

function showExplorerProperty()
{
  with(document)
  {
    write("<b>appname:</b>");
    write(navigator.appname+"</br>");
    write("<b>appversion:</b>");
    write(navigator.appversion+"</br>");
    write("<b>platform:</b>");
    write(navigator.platform+"</br>");
    write("<b>useragent:</b>");
    write(navigator.useragent);
  }
}

function displayBrowserProperty()
{
  if (navigator.appname == "Microsoft Internet Explorer")
    showExplorerProperty()
  else
  if(navigator.appname=="Netscape")
    ShowNaviatorProperty()
  else {
    ShowNaviatorProperty()
  }
}
displayBrowserProperty()
