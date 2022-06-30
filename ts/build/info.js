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
/* type Obj1 = {
  title: string;
  data: number;
}

function genric<T>(data: T): void {
  genric2<T>(data);
}

function genric2<T>(data: T): void {
  genric3<T>(data);
}

function genric3<T>(data: T): T {
  return data;
}

let funcResult = genric<Obj1>({ title: 'title1', data: 1 });
console.log(funcResult); */
class TodoClass {
    constructor() {
        this._title = 'default';
    }
    get title() {
        return this._title;
    }
}
