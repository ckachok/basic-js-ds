const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.trunk = null;
    this.left = null;
    this.right = null;
    this.func = null;
  }

  root() {
    return this.trunk;
  }

  add(data) {
    
    this.trunk = addData(this.trunk, data);

    function addData(curNode, data) {
      if (!curNode) return new Node(data);

      if (curNode.data === data) return curNode;

      if (data < curNode.data) {
        curNode.left = addData(curNode.left, data);
      } else {
        curNode.right = addData(curNode.right, data);
      }
      return curNode;
    }
  }

  has(data) {
    this.func = this.has.name;
    return this.existData(this.trunk, data);
  }

  existData(curNode, data) {
    if (!curNode) {
      if (this.func === 'has') {
        return false;
      } else if (this.func === 'find') {
        return null;
      }
    } 

    if (curNode.data === data) {
      if (this.func === 'has') {
        return true;
      } else if (this.func === 'find') {
        return curNode;
      }
    }

    if (data < curNode.data) {
      return this.existData(curNode.left, data);
    } else {
      return this.existData(curNode.right, data);
    }
  }

  find(data) {
    this.func = this.find.name;
    return this.existData(this.trunk, data);
  }

  remove(data) {
    this.trunk = deleteData(this.trunk, data);

    function deleteData(curNode, data) {
      if (!curNode) return null;

      if (data < curNode.data) {
        curNode.left = deleteData(curNode.left, data);
        return curNode;
      } else if (data > curNode.data) {
        curNode.right = deleteData(curNode.right, data);
        return curNode;
      } else if (!curNode.left && !curNode.right) {
        return null;
      } else if (!curNode.left) {
        curNode = curNode.right;
        return curNode;
      } else if (!curNode.right) {
        curNode = curNode.left;
        return curNode;
      }
      
      let minRight = curNode.right;

      while (minRight.left) {
        minRight = minRight.left;
      }

      curNode.data = minRight.data;
      curNode.right = deleteData(curNode.right, minRight.data)
      return curNode;
    }
  }

  min() {
    if (!this.trunk) return;

    let curNode = this.trunk;
    while (curNode.left) {
      curNode = curNode.left;
    }

    return curNode.data;
  }

  max() {
    if (!this.trunk) return;

    let curNode = this.trunk;
    while (curNode.right) {
      curNode = curNode.right;
    }

    return curNode.data;
  }
}