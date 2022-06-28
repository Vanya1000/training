"use strict";
/* type Obj1 = {
  title: string;
  data: number[];
}

type Obj2 = {
  title: string;
  data: string[];
}



const obj1 = {
  title: 'title1',
  data: [1, 2, 3]
}

const obj2 = {
  title: 'title2',
  data: ['one', 'two', 'three']
}

function callBack<E>(data: E): void {
  console.log(data);
  
}

function getResp<U>(title: string): void {
  getData<U>('title1');
      }



function getData<T>(title: string): void {
  if (title === 'title1') {
    callBack<T>(obj1);
  } else if (title === 'title2') {
    callBack<T>(obj2);
  }
}

getResp<Obj1>('title1');
 */
function http(request) {
    fetch(request)
        .then(response => response.json())
        .then(data => data.status);
}
http("https://jsonplaceholder.typicode.com/todos");
/* console.log(data[0].userId); */ 
