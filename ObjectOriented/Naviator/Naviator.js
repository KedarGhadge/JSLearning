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
    write(navigator.useragent);
  }
}
ShowNaviatorProperty()
