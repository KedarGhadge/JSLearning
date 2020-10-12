function calculate(){
function  Triangle(){
  this.width = document.getElementById("wd").value;
  this.height = document.getElementById('ht').value;
  this.area = TriArea;
}

function TriArea(){
  var area = this.height * this.width * 0.5;
  return area;
}


  var tr = new Triangle()
  document.write('Area of Triangle='+ tr.area() )

}
