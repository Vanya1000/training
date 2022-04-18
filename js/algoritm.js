//? O(log2? n) где n колличество элементовБинарный поиск Бинарный поиск - это агоритм; на входе он получает отсортированный список элементов
//? Для списка из 8 элементов log8 == 3, потому что 2 в 3й степени == 8. Для списка из 1024 элементов log 1024 = 10, потому что 2 в 10 степени == 1024.
//? Логарифм по смыслу противоположен возведению в степень


const arrForBinarySearch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch (list, item) {
	let low = 0;
	let high = list.length - 1;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let guess = list[mid];
		if (guess === item) {
			return mid;
		}
		if (guess > item) {
			high = mid - 1;
		}
		if (guess < item) {
			low = mid + 1;
		}
	}

	return null;
}

binarySearch(arrForBinarySearch, 5);//?