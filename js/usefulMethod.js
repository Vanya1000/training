//? фильтрация только уникальных элементов
const nameLower = user.map(item => item.toLowerCase());
const filter = nameLower.filter((item, index) => nameLower.indexOf(item) === index);

//? подсчет колличества поворяющихся элементов
let res2 = ['a', 'b', 'a'].reduce1(function (obj, elem) { if (!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj }, {})

//? [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
function distinct(arr) {
  return Array.from(new Set(arr));
}

//? Reduce c объектом
function reduceWithObject(arr) {
  const newArr = [];
  arr.reduce((acc, v) => {
    if (acc[v]) {
      return acc;
    }
    newArr.push(v);
    acc[v] = true;
    return acc;
  },{});
  return newArr;
}