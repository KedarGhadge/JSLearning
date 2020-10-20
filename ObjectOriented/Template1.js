function employee(name,jobtitle,salary)
{
  this.name = name;
  this.jobtitle = jobtitle;
  this.salary = salary;
}

var empl = new employee("Joe","Manager",50000)
document.write("Name: "+empl.name + "<br/>Job: "+empl.jobtitle+"  <br/>salary:"+empl.salary)
document.write("<br/>-----------------------------------------------")
var empl2 = new employee("Tom","Director",70000)
document.write("<br/>Name: "+empl2.name + "<br/>Job: "+empl2.jobtitle+"  <br/>salary:"+empl2.salary)
