const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.tree = null
  }
  root() {
    return this.tree
  }

  add(data) {
    let newNode = new Node(data)
    this.tree = plus(this.tree, data)
    function plus(orginalNode, data){
      if(!orginalNode) return newNode
      if(orginalNode.data ===data) return orginalNode
      orginalNode.data<data ? orginalNode.right = plus(orginalNode.right, data) : orginalNode.left = plus(orginalNode.left, data)
      return orginalNode
    }
  }

  has(data) {
    return (this.find(data)) ? true : false 
  }

  find(data) {
    function found(orginalNode, data){
      if(!orginalNode) return null
      if (orginalNode.data === data) return orginalNode
      return orginalNode.data<data ? found(orginalNode.right, data) : found(orginalNode.left, data)
    }
    return found(this.tree, data)
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let orginalNode = this.tree
    if(!orginalNode) return null
    else {
      while(orginalNode.left !== null){
      orginalNode=orginalNode.left
      }
    }
    return orginalNode.data

  }

  max() {
    let orginalNode = this.tree
    if(!orginalNode) return null
    else {
      while(orginalNode.right !== null){
      orginalNode=orginalNode.right
      }
    }
    return orginalNode.data

  }
}

module.exports = {
  BinarySearchTree
};