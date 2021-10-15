const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  let head = l;
  let tail = l;
  const value = k;

  // Если нет указателя значит список пуст
  if (!head) {
    return null;
  }

  // Если указатель должен быть удален,
  // то делаем следующий узел новым указателем
  while (head && head.value === value) {
    head = head.next;
  }

  let currentNode = head;

  // Если следующий узел должен быть удален, делаем узел через один,
  // следующим для проверки.
  // Перебираем все узлы и удаляем их, если их значение равно указанному.
  if (currentNode !== null) {
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  // Проверка, должен ли конец списка (tail) быть удален
  if (tail && tail.value === value) {
    tail = currentNode;
  }
  return head;
}
