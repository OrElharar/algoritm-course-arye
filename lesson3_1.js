//List
class Node{
    constructor(value)
    {
        this.value = value;
        this.next = null
    }
}
class singleLinkedList{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push(value)
    {
        let currentValue = new Node (value);
        if(this.head == null)
            this.head = currentValue;   
        else
            this.tail.next = currentValue;
        this.tail = currentValue;
        this.size++;
        
        return this;
    }
    pop()
    {
        if(this.size === 0) return;
        let lastElement = this.tail;
        let currentElement = this.head;
        if(this.size === 1)
        {
            this.head = null;
            this.tail = null;
            this.size--;
            return currentElement;
        }
        while (currentElement.next.next != null)
        {
            currentElement = currentElement.next;
        }
        currentElement.next = null;
        this.tail = currentElement;
        this.size --;
        return lastElement;
    }
    toArray()
    {
        let arr = [];
        let currentValue = this.head;
        while(currentValue != null)
        {
            arr.push(currentValue.value);
            currentValue = currentValue.next;
        }

        return arr;
    }
    shift()
    {
        if(this.size === 0) return;
        let previousHead = this.head;
        this.head = previousHead.next;
        this.size--;
            return previousHead;
    }
    unShift(value)
    {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        if(this.size === 1) this.tail = newNode;
        return this
    }

    set(index, value)
    {
        let currentNode = get(index);
        if(currentNode != null)
                currentNode.value = value;
            return;
        

    }
    get(index)
    {
        if(this.size === 0 || index>=this.size || index<0)
            return;
        let currentNode = this.head;
        let currentIndex = 0
        while(currentNode.next != null)
        {
            if(currentIndex === index)
                return currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }
    }
    insert(index,value)
    {
        const newNode = new Node(value)
        if(index === 0)
        {
            this.unShift(value);
            return this.tail;
        }
        previousNode = get(index-1);
        if(previousNode == null)
        {
            if(index === this.size)
            {
                this.push(value)
                return this.head;
            }
        }
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.size++;
        
    }
    remove(index)
    {
        const nodeBeforeTheRemovedNode = get(index-1);
        if(nodeBeforeTheRemovedNode == null)
            return;
        const nodeAfterTheRemovedNode = nodeBeforeTheRemovedNode.next.next;
        nodeBeforeTheRemovedNode.next = nodeAfterTheRemovedNode;
        this.size--;
            return;
        
    }
    reverse()
    {
        if(this.size === 0)
            return
        const tempValuesArr = [];
        let nextElement;
        while(this.size > 0)
        {
            nextElement = this.pop();
            tempValuesArr.push(nextElement.value)
        }
        tempValuesArr.forEach(element => {
        this.push(element);           
        });
        return this;
    }
}
class Queue{
    constructor()
    {
        this.first = null;
        this. last = null;
        this.size = 0;
    }
    enqueue(value)
    {
        const newNode = new Node(value);
        if(this.size === 0)
        {
            this.first = newNode;
        }
        else{
            this.last.next = newNode;
        }
        this.last = newNode;
        this.size++;
        return this.size;
    }
    dequeue()
    {
        if(this.size === 0) return;
        const currentFirstNode = this.first;
        const newFirstNode = currentFirstNode.next;
        this.first = newFirstNode;
        this.size--;
        if(this.size === 0) this.last = null;
            return currentFirstNode.value;
    }
}
// let singleList = new singleLinkedList();
// singleList.push('first');
// singleList.push('second');
// singleList.push('third');
// singleList.push('forth');
// singleList.push('fifth');
// console.log(singleList.reverse().toArray())
module.exports = Queue;