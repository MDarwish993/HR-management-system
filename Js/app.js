'use strict';

let allEmployee=[];
let formEle=document.getElementById("employeeForm");
let employeeSectionElement=document.getElementById("employeeSection");


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
        randomSalary=generateIDNumber(1500,2000);
        this.salary= Math.floor( randomSalary-(randomSalary*0.075));
    }else if(level === "Mid-Senior"){
        randomSalary= generateIDNumber(1000,1500);
        this.salary= Math.floor( randomSalary-(randomSalary*0.075));
    }else if(level === "Junior"){
        randomSalary=generateIDNumber(500,1000);
        this.salary=Math.floor( randomSalary-(randomSalary*0.075));
    }
}

Employee.prototype.render=function(){
    let divEle=document.createElement("div");
    employeeSectionElement.appendChild(divEle);
    divEle.style.width="200px";
    divEle.style.display="flex";
    divEle.style.flexDirection="column";
    divEle.style.backgroundColor="#5C8984";
    divEle.style.boxShadow="8px 8px #545B77";
    divEle.style.padding="5px";
    divEle.style.borderRadius="5px";
    divEle.addEventListener("mouseover",function(){ divEle.style.width="400px"} );
    divEle.addEventListener("mouseleave",function(){ divEle.style.width="200px"} );

    let imgEle=document.createElement("img");
    imgEle.src=this.imageURL;
    imgEle.style.width="150px";
    imgEle.style.height="150px";
    imgEle.style.alignSelf="center";
    imgEle.style.borderRadius="20px";
    divEle.appendChild(imgEle);

    let h3NameEle=document.createElement("h3")
    h3NameEle.textContent=`Name : ${this.fullName}`
    divEle.appendChild(h3NameEle);

    let pIDEle=document.createElement("p")
    pIDEle.textContent=`ID : ${this.employeeID}`
    divEle.appendChild(pIDEle);

    let pDepEle=document.createElement("p")
    pDepEle.textContent=`Department : ${this.department}`
    divEle.appendChild(pDepEle);

    let pLevelEle=document.createElement("p")
    pLevelEle.textContent=`Level : ${this.level}`
    divEle.appendChild(pLevelEle);

   let pSalaryEle=document.createElement("p")
    pSalaryEle.textContent=`Salary : ${this.salary}`
    divEle.appendChild(pSalaryEle);

}



let employee1=new Employee(1000,"  Ghazi Samer  ","Administration","Senior","assets/1.jpg");
let employee2=new Employee(1001,"  Lana Ali  ","Finance","Senior","assets/7.jpg");
let employee3=new Employee(1002,"  Tamara Ayoub  ","Marketing","Senior","assets/6.jpg");
let employee4=new Employee(1003,"  Safi Walid  ","Administration","Mid-Senior","assets/2.jpg");
let employee5=new Employee(1004,"  Omar Zaid  ","Development","Senior","assets/3.jpg");
let employee6=new Employee(1005,"  Rana Saleh  ","Development","Junior","assets/5.jpg");
let employee7=new Employee(1006,"  Hadi Ahmad  ","Finance","Mid-Senior","assets/4.jpg");


for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].netSalary(allEmployee[i].level);
    allEmployee[i].render();
    
}


//Lab 08 Solution

formEle.addEventListener("submit",formSubmitHandler);

function formSubmitHandler(e){
    e.preventDefault();

    let employeeID=generateIDNumber(1000,1999);
    let fullName=e.target.fullName.value;
    let department=e.target.department.value;
    let level=e.target.level.value;
    let imageURL=e.target.imageURL.value;

    let newEmployee=new Employee(employeeID,fullName,department,level,imageURL);
    newEmployee.netSalary(level);
    newEmployee.render();
    
}

function generateIDNumber(min,max){
    let rand= Math.floor(Math.random() * (max - min + 1) + min)
    return rand;
}