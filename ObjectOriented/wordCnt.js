function countIt()
{
  var formcontent = document.wordcount.wordcount2.value;
  var fromnewln = document.wordcount.wordcount2.value;
  formcontent = formcontent.split(" ");
  var nwline= fromnewln.split(/\r?\n/);
  document.wordcount.wordcount3.value = formcontent.length + nwline.length -1
}
