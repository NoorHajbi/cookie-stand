'use strict';
const hours = ['6am','7am', '8am', '9am', '10am' , '11am', '12pm','1pm','2pm', '3pm', '4pm','5pm','6pm','7pm'];
const firstCol = ['Seattle','Tokyo','Dubai','Paris','Lima'];//5
//create the table element globally outside of any function because you only have 1 table for all the shops
let salmonCookies =[];
let wrapper=document.getElementById('wrapper');
let tableElement=document.createElement('table');
wrapper.appendChild(tableElement);
//header footer fun + render method

function SalmonCookies(minCustomers, maxCustomers, avgCookies) {

  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.cookiesEachHour = []; //use this
  this.cookiesPerHour = this.cookiesPerHour();
  this.total = 0;
  salmonCookies.push(this);
}
SalmonCookies.prototype.cookiesPerHour=function () {
  for(let i=0; i<hours.length; i++){
    let customersPerHour = Math.ceil(randomNumber(this.minCustomers,this.maxCustomers) * this.avgCookies); //ceil almost like floor
    this.cookiesEachHour.push(customersPerHour);
    this.total+= customersPerHour;
  }
};

/** Seattle**/
let seattle  = new SalmonCookies(23,65,6.3);
console.log(seattle );

/** Tokyo **/
let tokyo = new SalmonCookies(3,24,1.2);
console.log(tokyo);

/** Dubai**/
let dubai = new SalmonCookies(11,38,3.7);
console.log(dubai);

/** Paris **/
let paris = new SalmonCookies(20,38,2.3);
console.log(paris);

/** Lima **/
let lima = new SalmonCookies(2,16,4.6);
console.log(lima);

/** Random **/
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/** Table **/
function tHeader() {
  let tHeader = document.createElement('thead');
  tableElement.appendChild(tHeader);
  let thEmpty = document.createElement('th');
  tHeader.appendChild(thEmpty);
  for (let i = 0; i <hours.length; i++) {
    let thHours = document.createElement('th');
    tHeader.appendChild(thHours);
    thHours.textContent = hours[i];
  }
  let txt = document.createElement('th');
  tHeader.appendChild(txt);
  txt.textContent = 'Daily Location Total';
}

/** Render **/
function render(){
  tHeader();
  for(let row=0; row<salmonCookies.length; row++){
    let totalL =0;
    let rowData = document.createElement('tr');
    tableElement.appendChild(rowData);
    let locationName=document.createElement('td');
    rowData.appendChild(locationName);
    locationName.textContent=firstCol[row];
    for(let col=0;col<hours.length;col++){
      let cellData=document.createElement('td');
      rowData.appendChild(cellData);
      cellData.textContent=salmonCookies[row].cookiesEachHour[col];
      totalL+=parseInt(salmonCookies[row].cookiesEachHour[col]);
    }
    let dailyTotal=document.createElement('td');
    rowData.appendChild(dailyTotal);
    dailyTotal.textContent=totalL;
  }
  tFooter();
}
function tFooter() {
  let totalTotals=0;
  let totalHour=0;
  let tFooter = document.createElement('tfoot');
  tableElement.appendChild(tFooter);
  let footerTxt = document.createElement('td');
  tFooter.appendChild(footerTxt);
  footerTxt.textContent = 'Totals';
}
render();

