'use strict';
const hours = ['6am','7am', '8am', '9am', '10am' , '11am', '12pm','1pm','2pm', '3pm', '4pm','5pm','6pm','7pm'];
const firstCol = ['Seattle','Tokyo','Dubai','Paris','Lima'];//5
let salmonCookies =[];
let wrapper=document.getElementById('wrapper');
let tableElement=document.createElement('table');
wrapper.appendChild(tableElement);
//let totalTotals=0; //2nd way

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
  //  totalTotals+=customersPerHour; //2nd way
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
  let tFooter = document.createElement('tfoot');
  tableElement.appendChild(tFooter);
  let footerTxt = document.createElement('th');
  tFooter.appendChild(footerTxt);
  footerTxt.textContent = 'Totals';
  for(let row=0; row<hours.length;row++){
    let totalHour=0;
    for(let col=0; col<salmonCookies.length;col++){
      totalHour+= salmonCookies[col].cookiesEachHour[row];
      totalTotals+= salmonCookies[col].cookiesEachHour[row];
    }
    let footerData= document.createElement('th');
    tFooter.appendChild(footerData);
    footerData.textContent=totalHour;
  }
  let totalData= document.createElement('th');
  tFooter.appendChild(totalData);
  totalData.textContent=totalTotals;
}
render();
