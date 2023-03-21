class ListNode {
	constructor(x) {
		this.value = x;
		this.next = null;
	}
}

function removeKFromList(l, k) {
	let delNode = null;
	// Если head нужно удалить, то переписываем все последующие
	while (l && l.value === k) {
		delNode = l.value;
		l = l.next;
	}
	let currNode = l;
	// перебираем все следующие элементы
	while (currNode.next) {
		console.log(currNode.value)
		if (currNode.next.value === k) {
			// когда нашли, то удаляем 
			delNode = currNode.next;
			currNode.next = currNode.next.next;
		} else {
			currNode = currNode.next;
		}
	}
	return l;
}

function convertArrayToList(arr) {
	return arr.reverse().reduce((acc, cur) => {
		if (acc) {
			const node = new ListNode(cur);
			node.next = acc;
			return node;
		}
		return new ListNode(cur);
	}, null);
}


const initial = convertArrayToList([3, 1, 2, 3, 4, 5])//?
console.log(initial);
removeKFromList(initial, 3)//?
removeKFromList(initial, 3);