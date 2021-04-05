'use strict';
const hours = ['6am','7am', '8am', '9am', '10am' , '11am', '12pm','1pm','2pm', '3pm', '4pm','5pm','6pm','7pm'];

/** Seattle**/
let seattle = {
  minCustomers:23,
  maxCustomers:65,
  avgCookies:6.3,
  cookiesEachHour: [],
  total:0,
  cookiesPerHour:function () {
    for(let i=0; i<hours.length; i++){
      let customersPerHour = Math.ceil(randomNumber(this.minCustomers,this.maxCustomers) * this.avgCookies); //ceil almost like floor
      this.cookiesEachHour.push(customersPerHour);
      this.total+= customersPerHour;
    }
  },
  /*Samer's Solution:
  customersEachHour:[],
  custPerHour:function () {
    for(let i=0; i<hours.length; i++){
      this.customersEachHour.push(randomNumber(this.minCustomers,this.maxCustomers));}},
  cookiePerHour:function () {
    for(let i=0; i<this.customersEachHour.length; i++){
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
      this.total+= this.cookiesEachHour[i];
    }},
  */
  render :function(){//1.getId 2.createElement 3.appendChild 4.addtext
    let wrapper=document.getElementById('wrapper');
    let h2 =document.createElement('h2');
    wrapper.appendChild(h2);
    h2.textContent='Seattle';
    wrapper.appendChild(h2);
    let ulList=document.createElement('ul');
    wrapper.appendChild(ulList);
    for (let i=0;i<hours.length;i++){
      let liList = document.createElement('li');
      liList.textContent =hours[i]+': '+this.cookiesEachHour[i]+' cookies';
      ulList.appendChild(liList);
    }

    let liList = document.createElement('li');
    liList.textContent ='Total: '+this.total+' cookies';
    ulList.appendChild(liList);

  },
};
//seattle.custPerHour();
//seattle.cookiePerHour();
seattle.cookiesPerHour();
seattle.render();

/** Tokyo **/
let tokyo = {
  minCustomers:3,
  maxCustomers:24,
  avgCookies:1.2,
  cookiesEachHour: [],
  total:0,
  cookiesPerHour:function () {
    for(let i=0; i<hours.length; i++){
      let customersPerHour = Math.ceil(randomNumber(this.minCustomers,this.maxCustomers) * this.avgCookies);
      this.cookiesEachHour.push(customersPerHour);
      this.total+= customersPerHour;
    }
  },
  render :function(){
    let wrapper=document.getElementById('wrapper');
    let h2 =document.createElement('h2');
    wrapper.appendChild(h2);
    h2.textContent='Tokyo';
    wrapper.appendChild(h2);
    let ulList=document.createElement('ul');
    wrapper.appendChild(ulList);
    for (let i=0;i<hours.length;i++){
      let liList = document.createElement('li');
      liList.textContent =hours[i]+': '+this.cookiesEachHour[i]+' cookies';
      ulList.appendChild(liList);
    }

    let liList = document.createElement('li');
    liList.textContent ='Total: '+this.total+' cookies';
    ulList.appendChild(liList);

  },
};
tokyo.cookiesPerHour();
tokyo.render();
/** Dubai**/
let dubai = {
  minCustomers:11,
  maxCustomers:38,
  avgCookies:3.7,
  cookiesEachHour: [],
  total:0,
  cookiesPerHour:function () {
    for(let i=0; i<hours.length; i++){
      let customersPerHour = Math.ceil(randomNumber(this.minCustomers,this.maxCustomers) * this.avgCookies);
      this.cookiesEachHour.push(customersPerHour);
      this.total+= customersPerHour;
    }
  },
  render :function(){
    let wrapper=document.getElementById('wrapper');
    let h2 =document.createElement('h2');
    wrapper.appendChild(h2);
    h2.textContent='Dubai';
    wrapper.appendChild(h2);
    let ulList=document.createElement('ul');
    wrapper.appendChild(ulList);
    for (let i=0;i<hours.length;i++){
      let liList = document.createElement('li');
      liList.textContent =hours[i]+': '+this.cookiesEachHour[i]+' cookies';
      ulList.appendChild(liList);
    }

    let liList = document.createElement('li');
    liList.textContent ='Total: '+this.total+' cookies';
    ulList.appendChild(liList);

  },
};
dubai.cookiesPerHour();
dubai.render();

/** Paris **/
let paris = {
  minCustomers:20,
  maxCustomers:38,
  avgCookies:2.3,
  cookiesEachHour: [],
  total:0,
  cookiesPerHour:function () {
    for(let i=0; i<hours.length; i++){
      let customersPerHour = Math.ceil(randomNumber(this.minCustomers,this.maxCustomers) * this.avgCookies);
      this.cookiesEachHour.push(customersPerHour);
      this.total+= customersPerHour;
    }
  },
  render :function(){
    let wrapper=document.getElementById('wrapper');
    let h2 =document.createElement('h2');
    wrapper.appendChild(h2);
    h2.textContent='Paris';
    wrapper.appendChild(h2);
    let ulList=document.createElement('ul');
    wrapper.appendChild(ulList);
    for (let i=0;i<hours.length;i++){
      let liList = document.createElement('li');
      liList.textContent =hours[i]+': '+this.cookiesEachHour[i]+' cookies';
      ulList.appendChild(liList);
    }

    let liList = document.createElement('li');
    liList.textContent ='Total: '+this.total+' cookies';
    ulList.appendChild(liList);

  },
};
paris.cookiesPerHour();
paris.render();

/** Lima **/
let lima = {
  minCustomers:2,
  maxCustomers:16,
  avgCookies:4.6,
  cookiesEachHour: [],
  total:0,
  cookiesPerHour:function () {
    for(let i=0; i<hours.length; i++){
      let customersPerHour = Math.ceil(randomNumber(this.minCustomers,this.maxCustomers) * this.avgCookies);
      this.cookiesEachHour.push(customersPerHour);
      this.total+= customersPerHour;
    }
  },
  render :function(){
    let wrapper=document.getElementById('wrapper');
    let h2 =document.createElement('h2');
    wrapper.appendChild(h2);
    h2.textContent='Lima';
    wrapper.appendChild(h2);
    let ulList=document.createElement('ul');
    wrapper.appendChild(ulList);
    for (let i=0;i<hours.length;i++){
      let liList = document.createElement('li');
      liList.textContent =hours[i]+': '+this.cookiesEachHour[i]+' cookies';
      ulList.appendChild(liList);
    }

    let liList = document.createElement('li');
    liList.textContent ='Total: '+this.total+' cookies';
    ulList.appendChild(liList);

  },
};
lima.cookiesPerHour();
lima.render();

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
