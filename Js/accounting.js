'use strict';

let tableElement = document.getElementById('employeeTable');
let tbodyEle = document.createElement('tbody');
tableElement.appendChild(tbodyEle);
let tfootEle = document.createElement('tfoot');
tableElement.appendChild(tfootEle);

//Deartment Array 
let administration = [];
let marketing = [];
let development = [];
let finance = [];
let departmentArray = ["Administration", "Marketing", "Development", "Finance"];
let AvarageSalaryTottal=0;
//get data from local storage

let retrievedData = localStorage.getItem('employees');

let objectArray = JSON.parse(retrievedData);

//Render Table Body
function renderTableBody(departmentName, deparr) {
    let trEle = document.createElement('tr');
    tbodyEle.appendChild(trEle);

    let td1Ele = document.createElement('td');
    td1Ele.textContent = departmentName;
    trEle.appendChild(td1Ele);

    let td2Ele = document.createElement('td');
    td2Ele.textContent = deparr.length;
    trEle.appendChild(td2Ele);

    let td3Ele = document.createElement('td');
    td3Ele.textContent = avarageSalary(deparr);
    trEle.appendChild(td3Ele);
    AvarageSalaryTottal+=avarageSalary(deparr);

    let td4Ele = document.createElement('td');
    td4Ele.textContent = tottalSalary(deparr);
    trEle.appendChild(td4Ele);



}
//Render Table Foot
function renderTableFoot() {
    let trFootEle = document.createElement('tr');
    tfootEle.appendChild(trFootEle);

    let td5Ele = document.createElement('td');
    td5Ele.textContent = 'Tottal';
    trFootEle.appendChild(td5Ele);
    td5Ele.style.fontWeight ="Bold";


    let td6Ele = document.createElement('td');
    td6Ele.textContent = objectArray.length;
    trFootEle.appendChild(td6Ele);
    td6Ele.style.fontWeight ="Bold";

    let td7Ele = document.createElement('td');
    td7Ele.textContent = AvarageSalaryTottal;
    trFootEle.appendChild(td7Ele);
    td7Ele.style.fontWeight ="Bold";

    let td8Ele = document.createElement('td');
    td8Ele.textContent = tottalSalary(objectArray);
    trFootEle.appendChild(td8Ele);
    td8Ele.style.fontWeight ="Bold";

}

//calculation Functions

function fillingDepartmentArrays() {
    for (let i = 0; i < objectArray.length; i++) {
        if (objectArray[i].department == "Administration") {
            administration.push(objectArray[i]);
        } else if (objectArray[i].department == "Marketing") {
            marketing.push(objectArray[i]);
        } else if (objectArray[i].department == "Development") {
            development.push(objectArray[i]);
        } else {
            finance.push(objectArray[i]);
        }
    }
}

fillingDepartmentArrays();

//Avarage salary and tottal salary

function tottalSalary(arr) {
    let tottalSalary = 0;
    for (let i = 0; i < arr.length; i++) {
        tottalSalary += arr[i].salary

    }
    return tottalSalary;
}

function avarageSalary(arr) {
    return Math.floor(tottalSalary(arr) / arr.length);
}


//Render All Data 

function renderAllElements() {
    for (let i = 0; i < departmentArray.length; i++) {
        if (departmentArray[i] == "Administration") {
            renderTableBody("Administration", administration);
        } else if (departmentArray[i] == "Marketing") {
            renderTableBody("Marketing", marketing);
        } else if (departmentArray[i] == "Development") {
            renderTableBody("Development", development);
        } else {
            renderTableBody("Finance", finance);
        }


    }
    renderTableFoot();

}

renderAllElements();





