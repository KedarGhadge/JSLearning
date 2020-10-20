function employee(name,jobtitle,salary)
{
  this.name = name;
  this.jobtitle = jobtitle;
  this.salary = salary;
}

var empl = new employee("Joe","Manager",50000)
document.write(empl.name + " is a "+empl.jobtitle+" in KLS company having ths salary "+empl.salary)
