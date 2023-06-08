'use strict';

let allEmployee=[];

function Employee(employeeID,fullName,department,level,imageURL){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.salary;
    allEmployee.push(this)
}

Employee.prototype.netSalary=function(level){
    let randomSalary;
    if(level === "Senior"){
        randomSalary=(Math.floor(Math.random() * (2000 - 1500 + 1) + 1500));
        this.salary= randomSalary-(randomSalary*0.075);
    }else if(level === "Mid-Senior"){
        randomSalary= (Math.floor(Math.random() * (1500 - 1000 + 1) + 1000));
        this.salary= randomSalary-(randomSalary*0.075);
    }else if(level === "Junior"){
        randomSalary=( Math.floor(Math.random() * (1000 - 500 + 1) + 500));
        this.salary= randomSalary-(randomSalary*0.075);
    }
}

Employee.prototype.render=function(){
    document.write(`<p>${this.employeeID}--${this.fullName}--${this.department}--${this.level}--${this.salary}</p>`)

}


let employee1=new Employee(1000,"  Ghazi Samer  ","Administration","Senior","https://th.bing.com/th/id/OIP.YBpXSFpgZNTEKo-yQ8_DNQHaEK?pid=ImgDet&rs=1");
let employee2=new Employee(1001,"  Lana Ali  ","Finance","Senior","https://th.bing.com/th/id/OIP.YBpXSFpgZNTEKo-yQ8_DNQHaEK?pid=ImgDet&rs=1");
let employee3=new Employee(1002,"  Tamara Ayoub  ","Marketing","Senior","https://th.bing.com/th/id/OIP.YBpXSFpgZNTEKo-yQ8_DNQHaEK?pid=ImgDet&rs=1");
let employee4=new Employee(1003,"  Safi Walid  ","Administration","Mid-Senior","https://th.bing.com/th/id/OIP.YBpXSFpgZNTEKo-yQ8_DNQHaEK?pid=ImgDet&rs=1");
let employee5=new Employee(1004,"  Omar Zaid  ","Development","Senior","https://th.bing.com/th/id/OIP.YBpXSFpgZNTEKo-yQ8_DNQHaEK?pid=ImgDet&rs=1");
let employee6=new Employee(1005,"  Rana Saleh  ","Development","Junior","https://th.bing.com/th/id/OIP.YBpXSFpgZNTEKo-yQ8_DNQHaEK?pid=ImgDet&rs=1");
let employee7=new Employee(1006,"  Hadi Ahmad  ","Finance","Mid-Senior","https://th.bing.com/th/id/OIP.YBpXSFpgZNTEKo-yQ8_DNQHaEK?pid=ImgDet&rs=1");

document.write(`<h1>employeeID--fullName--department--level--salary</h1>`)
for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].netSalary(allEmployee[i].level);
    allEmployee[i].render();
    
}