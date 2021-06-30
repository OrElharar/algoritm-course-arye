const Queue = require("./lesson3_1");

class Node{
    constructor(value)
    {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BinarySearchTree{
    constructor()
    {
        this.root = null;
    }
    insert(value)
    {
        const newNode = new Node(value);
        if(this.root == null)
        {
            this.root = newNode;
            return this.root;
        }
        let foundCurrentLocation = false;
        let currentNode = this.root;
        while(currentNode != null)
        {
            if(currentNode.value === newNode.value) return;
            if(currentNode.value < newNode.value)
            {
                if(currentNode.right == null)
                {

                    currentNode.right = newNode;
                    foundCurrentLocation = true;
                }
                else
                {
                    currentNode = currentNode.right;
                }
            }
            if(currentNode.value > newNode.value)
            {
                if(currentNode.left == null)
                {
                    currentNode.left = newNode;
                    foundCurrentLocation = true;
                }
                else
                {
                    currentNode = currentNode.left;
                }
            }
        }
        

    }
    includes(value)
    {
        if(this.root == null)
            return false;
        let currentNode = this.node;
        while(currentNode != null)
        {
            if(value === currentNode.value) return true;
            if(value > currentNode.value)
            {
                currentNode = currentNode.right;
            }
            if(value < currentNode)
            {
                currentNode = currentNode.left;
            }
        }
            return false;
    }
    dfsTraversePreOrder()
    {
        let nextNode = this.root;
        let resultArr = [];
        resultArr =  this.recursiveAddNodePreOrder(nextNode, resultArr);
        return resultArr;
        
    }
    recursiveAddNodePreOrder = function(nextNode,arr)
    {
        if(nextNode == null)
            return arr;
        arr.push(nextNode.value);
        arr = this.recursiveAddNodePreOrder(nextNode.left, arr);
        arr = this.recursiveAddNodePreOrder(nextNode.right, arr);
            return arr;
    }
    dfsTraversePostOrder()
    {
        let nextNode = this.root;
        let resultArr = [];
        resultArr =  this.recursiveAddNodePostOrder(nextNode, resultArr);
        return resultArr;
    }
    recursiveAddNodePostOrder = function(nextNode,arr)
    {
        if(nextNode == null)
            return arr;
        arr = this.recursiveAddNodePostOrder(nextNode.left, arr);  
        arr = this.recursiveAddNodePostOrder(nextNode.right, arr);
        arr.push(nextNode.value);
            return arr;
    }
    dfsTraverseInOrder()
    {
        let nextNode = this.root;
        let resultArr = [];
        resultArr =  this.recursiveAddNodeInOrder(nextNode, resultArr);
        return resultArr;
    }
    recursiveAddNodeInOrder = function(nextNode,arr)
    {
        if(nextNode == null)
            return arr;
        arr = this.recursiveAddNodeInOrder(nextNode.left, arr); 
        arr.push(nextNode.value); 
        arr = this.recursiveAddNodeInOrder(nextNode.right, arr);
        
            return arr;
    }
    bredthFirst()
    {
        let nextNode = this.root;
        let resultArr = [];
        let roundsCounter = 0;
        if(nextNode != null)
        resultArr.push(nextNode.value);
        resultArr =  this.recursiveBredthFirst(nextNode,resultArr,roundsCounter);
        return resultArr;
    }
    recursiveBredthFirst = function(nextNode,resultArr,roundsCounter)
    {
        let tempArr = [...resultArr];      
        tempArr = this.recursiveGetAllGenerationKids(nextNode, ++roundsCounter,tempArr,0);
        while(tempArr.length !== resultArr.length)
        {
            resultArr = [...tempArr];
            roundsCounter++;
            tempArr = this.recursiveGetAllGenerationKids(nextNode, roundsCounter,tempArr,0)
            console.log(tempArr.length !== resultArr.length);
        }

             return resultArr;
     }
     recursiveGetAllGenerationKids(nextNode, roundsCounter, kidsArr, currentCounter)
     {
        if(roundsCounter === currentCounter)
        {
            kidsArr.push(nextNode.value)
            return kidsArr;
        }
        currentCounter++;
        if(nextNode.left != null)
            kidsArr = this.recursiveGetAllGenerationKids(nextNode.left, roundsCounter, kidsArr, currentCounter);
        if(nextNode.right != null)
            kidsArr = this.recursiveGetAllGenerationKids(nextNode.right, roundsCounter, kidsArr, currentCounter);
        return kidsArr;

     }
     bfsTraverese()
     {
         if(this.root == null) return [];
         const valuesArr = [];
         const valuesQ = new Queue();
         valuesQ.enqueue(this.root);
         while (valuesQ.size > 0)
         {
             const currentNode = valuesQ.dequeue();
            valuesArr.push(currentNode.value);
            if(currentNode.left != null)
            {
                valuesQ.enqueue(currentNode.left);
            }
            if(currentNode.right != null)
            {
                valuesQ.enqueue(currentNode.right);
            }

         }
         return valuesArr;
     }
}

const binaryTree = new BinarySearchTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(2);
binaryTree.insert(6);
binaryTree.insert(12);
binaryTree.insert(17);
binaryTree.insert(20);
binaryTree.insert(0);

console.log(binaryTree.bredthFirst());
console.log(binaryTree.bfsTraverese());
