'use strict';

let allEmployee = [];
let formEle = document.getElementById("employeeForm");
let employeeSectionElement = document.getElementById("employeeSection");


function Employee(employeeID, fullName, department, level, imageURL,salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary=salary;
    allEmployee.push(this)
}

Employee.prototype.netSalary = function (level) {
    let randomSalary;
    if (level === "Senior") {
        randomSalary = generateIDNumber(1500, 2000);
        this.salary = Math.floor(randomSalary - (randomSalary * 0.075));
    } else if (level === "Mid-Senior") {
        randomSalary = generateIDNumber(1000, 1500);
        this.salary = Math.floor(randomSalary - (randomSalary * 0.075));
    } else if (level === "Junior") {
        randomSalary = generateIDNumber(500, 1000);
        this.salary = Math.floor(randomSalary - (randomSalary * 0.075));
    }
}

Employee.prototype.render = function () {
    let divEle = document.createElement("div");
    employeeSectionElement.appendChild(divEle);
    divEle.style.width = "200px";
    divEle.style.display = "flex";
    divEle.style.flexDirection = "column";
    divEle.style.backgroundColor = "#5C8984";
    divEle.style.boxShadow = "8px 8px #545B77";
    divEle.style.padding = "5px";
    divEle.style.borderRadius = "5px";
    divEle.addEventListener("mouseover", function () { divEle.style.width = "400px" });
    divEle.addEventListener("mouseleave", function () { divEle.style.width = "200px" });

    let imgEle = document.createElement("img");
    imgEle.src = this.imageURL;
    imgEle.style.width = "150px";
    imgEle.style.height = "150px";
    imgEle.style.alignSelf = "center";
    imgEle.style.borderRadius = "20px";
    divEle.appendChild(imgEle);

    let h3NameEle = document.createElement("h3")
    h3NameEle.textContent = `Name : ${this.fullName}`
    divEle.appendChild(h3NameEle);

    let pIDEle = document.createElement("p")
    pIDEle.textContent = `ID : ${this.employeeID}`
    divEle.appendChild(pIDEle);

    let pDepEle = document.createElement("p")
    pDepEle.textContent = `Department : ${this.department}`
    divEle.appendChild(pDepEle);

    let pLevelEle = document.createElement("p")
    pLevelEle.textContent = `Level : ${this.level}`
    divEle.appendChild(pLevelEle);

    let pSalaryEle = document.createElement("p")
    pSalaryEle.textContent = `Salary : ${this.salary}`
    divEle.appendChild(pSalaryEle);

}



let employee1 = new Employee(1000, "  Ghazi Samer  ", "Administration", "Senior", "assets/1.jpg");
employee1.netSalary(employee1.level);
let employee2 = new Employee(1001, "  Lana Ali  ", "Finance", "Senior", "assets/7.jpg");
employee2.netSalary(employee2.level);
let employee3 = new Employee(1002, "  Tamara Ayoub  ", "Marketing", "Senior", "assets/6.jpg");
employee3.netSalary(employee3.level);
let employee4 = new Employee(1003, "  Safi Walid  ", "Administration", "Mid-Senior", "assets/2.jpg");
employee4.netSalary(employee4.level);
let employee5 = new Employee(1004, "  Omar Zaid  ", "Development", "Senior", "assets/3.jpg");
employee5.netSalary(employee5.level);
let employee6 = new Employee(1005, "  Rana Saleh  ", "Development", "Junior", "assets/5.jpg");
employee6.netSalary(employee6.level);
let employee7 = new Employee(1006, "  Hadi Ahmad  ", "Finance", "Mid-Senior", "assets/4.jpg");
employee7.netSalary(employee7.level);




//Lab 08 Solution

formEle.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(e) {
    e.preventDefault();

    let employeeID = generateIDNumber(1000, 1999);
    let fullName = e.target.fullName.value;
    let department = e.target.department.value;
    let level = e.target.level.value;
    let imageURL = e.target.imageURL.value;

    let newEmployee = new Employee(employeeID, fullName, department, level, imageURL);
    newEmployee.netSalary(level);
    newEmployee.render();

    saveDataInLocalStorage(allEmployee);
}

function generateIDNumber(min, max) {
    let rand = Math.floor(Math.random() * (max - min + 1) + min)
    return rand;
}


//Lab 09 solution

function saveDataInLocalStorage(data) {
    let stringArray = JSON.stringify(data);
    localStorage.setItem('employees', stringArray);
}

function getDataFromLocalStorage() {
    let retrievedData = localStorage.getItem('employees');
    let objectArray = JSON.parse(retrievedData);
    //employeeID,fullName,department,level,imageURL
    if (objectArray != null) {
        for (let i = 7; i < objectArray.length; i++) {
            new Employee(objectArray[i].employeeID, objectArray[i].fullName,
                objectArray[i].department, objectArray[i].level, objectArray[i].imageURL,objectArray[i].salary);
        }
    }

renderAllElements();
}

getDataFromLocalStorage();


function renderAllElements(){
    for (let i = 0; i < allEmployee.length; i++) {
        
        allEmployee[i].render();
    
    }
}