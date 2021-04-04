'use strict';
let hours = ['6am','7am', '8am', '9am', '10am' , '11am', '12pm','1pm','2pm', '3pm', '4pm','5pm','6pm','7pm'];

/** Seattle**/
let seattle = {
  minCookies:23,
  maxCookies:65,
  avgCookies:6.3,
  cookiesNum: [],
  total:0,
  randomCustomers:function () {
    for(let i=0; i<hours.length; i++){
      let cookiesPerHour = Math.ceil(randomNumber(this.minCookies,this.maxCookies) * this.avgCookies);
      this.cookiesNum.push(cookiesPerHour);
      this.total+= cookiesPerHour;
    }
  },
  render :function(){
    let wrapper=document.getElementById('wrapper');
    let h2 =document.createElement('h2');
    wrapper.appendChild(h2);
    h2.textContent='Seattle';
    wrapper.appendChild(h2);
    let ulList=document.createElement('ul');
    wrapper.appendChild(ulList);
    for (let i=0;i<hours.length;i++){
      let liList = document.createElement('li');
      liList.textContent =hours[i]+': '+this.cookiesNum[i]+' cookies';
      ulList.appendChild(liList);
    }

    let liList = document.createElement('li');
    liList.textContent ='Total: '+this.total+' cookies';
    ulList.appendChild(liList);

  },
};
seattle.randomCustomers();
seattle.render();

/** Tokyo **/
let tokyo = {
  minCookies:3,
  maxCookies:24,
  avgCookies:1.2,
  cookiesNum: [],
  total:0,
  randomCustomers:function () {
    for(let i=0; i<hours.length; i++){
      let cookiesPerHour = Math.ceil(randomNumber(this.minCookies,this.maxCookies) * this.avgCookies);
      this.cookiesNum.push(cookiesPerHour);
      this.total+= cookiesPerHour;
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
      liList.textContent =hours[i]+': '+this.cookiesNum[i]+' cookies';
      ulList.appendChild(liList);
    }

    let liList = document.createElement('li');
    liList.textContent ='Total: '+this.total+' cookies';
    ulList.appendChild(liList);

  },
};
tokyo.randomCustomers();
tokyo.render();
/** Dubai**/
let dubai = {
  minCookies:11,
  maxCookies:38,
  avgCookies:3.7,
  cookiesNum: [],
  total:0,
  randomCustomers:function () {
    for(let i=0; i<hours.length; i++){
      let cookiesPerHour = Math.ceil(randomNumber(this.minCookies,this.maxCookies) * this.avgCookies);
      this.cookiesNum.push(cookiesPerHour);
      this.total+= cookiesPerHour;
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
      liList.textContent =hours[i]+': '+this.cookiesNum[i]+' cookies';
      ulList.appendChild(liList);
    }

    let liList = document.createElement('li');
    liList.textContent ='Total: '+this.total+' cookies';
    ulList.appendChild(liList);

  },
};
dubai.randomCustomers();
dubai.render();

/** Paris **/
let paris = {
  minCookies:20,
  maxCookies:38,
  avgCookies:2.3,
  cookiesNum: [],
  total:0,
  randomCustomers:function () {
    for(let i=0; i<hours.length; i++){
      let cookiesPerHour = Math.ceil(randomNumber(this.minCookies,this.maxCookies) * this.avgCookies);
      this.cookiesNum.push(cookiesPerHour);
      this.total+= cookiesPerHour;
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
      liList.textContent =hours[i]+': '+this.cookiesNum[i]+' cookies';
      ulList.appendChild(liList);
    }

    let liList = document.createElement('li');
    liList.textContent ='Total: '+this.total+' cookies';
    ulList.appendChild(liList);

  },
};
paris.randomCustomers();
paris.render();

/** Lima **/
let lima = {
  minCookies:2,
  maxCookies:16,
  avgCookies:4.6,
  cookiesNum: [],
  total:0,
  randomCustomers:function () {
    for(let i=0; i<hours.length; i++){
      let cookiesPerHour = Math.ceil(randomNumber(this.minCookies,this.maxCookies) * this.avgCookies);
      this.cookiesNum.push(cookiesPerHour);
      this.total+= cookiesPerHour;
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
      liList.textContent =hours[i]+': '+this.cookiesNum[i]+' cookies';
      ulList.appendChild(liList);
    }

    let liList = document.createElement('li');
    liList.textContent ='Total: '+this.total+' cookies';
    ulList.appendChild(liList);

  },
};
lima.randomCustomers();
lima.render();

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
