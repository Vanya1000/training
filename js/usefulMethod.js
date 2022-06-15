//? фильтрация только уникальных элементов
const nameLower = user.map(item => item.toLowerCase());
const filter = nameLower.filter((item, index) => nameLower.indexOf(item) === index);

//? подсчет колличества поворяющихся элементов
let res2 = ['a', 'b', 'a'].reduce1(function (obj, elem) { if (!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj }, {})