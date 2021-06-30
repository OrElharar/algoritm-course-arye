class Node{
    constructor(value)
    {
        this.value = value;
        this.previous = null;
        this.next = null;
        
    }
}
class doubleLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push(value)
    {
        let currentValue = new Node (value);
        if(this.size === 0)
        {
            this.head = currentValue; 
            this.tail = currentValue;  

        }
        else
        {
            currentValue.previous = this.tail;
            this.tail.next = currentValue;
        }
        this.tail = currentValue;
        this.size++;
        
        return this;
    }
    pop()
    {
        if(this.size === 0) return;
        let lastElement = this.tail;
        this.tail = (this.size===1) ? null : lastElement.previous;
        this.size--;
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
        let currentNode;
        let currentIndex;
        let middleIndex = parseInt(this.size/2);
        if(index < middleIndex)
         {   
            currentNode = this.head;
            currentIndex = 0
            while(currentNode.next != null)
            {
                if(currentIndex === index)
                    return currentNode;
                currentIndex = currentIndex.next;
                currentIndex++;
            }
        }
        else
        {
            currentNode = this.tail;
            currentIndex = this.size -1;
            while(currentNode.previous != null)
            {
                if(currentIndex === index)
                    return currentNode;
                currentIndex = currentIndex.previous
                currentIndex--;
            }
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
            newNode.previous = previousNode;
            previousNode.next = newNode;
            this.size++;
            
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
        remove(index)
        {
            const nodeBeforeTheRemovedNode = get(index-1);
            if(nodeBeforeTheRemovedNode == null)
                return;
            const nodeAfterTheRemovedNode = nodeBeforeTheRemovedNode.next.next;
            nodeAfterTheRemovedNode.previous = nodeBeforeTheRemovedNode;
            nodeBeforeTheRemovedNode.next = nodeAfterTheRemovedNode;
            this.size--;
                return;
            
        }   
}
class Stack{
    constructor()
    {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value)
    {
        const newNode = new Node(value);
        if(this.size === 0)
        {
            this.last = newNode;
        }
        else
        {
            this.first.next = newNode;
            newNode.previous = this.first
        }
        this.first = newNode;
        this.size++;
        return this.size;
    }
    pop()
    {
        if(this.size === 0) return;
        const firstNode = this.first;
        if(this.size === 1) 
        {
            this.first = null;
            this.last = null;
        }
        else
        {
            const lastBeforeFirst = firstNode.previous;
            this.first = lastBeforeFirst;
        }
        this.size --;
        return firstNode.value;
        
    }
}
// let doubleList = new doubleLinkedList();
// doubleList.push('first');
// doubleList.push('second');
// doubleList.push('third');
// doubleList.push('forth');
// doubleList.push('fifth');

let newStack = new Stack();
newStack.push('first');
newStack.push('second');

module.exports = Stack;
console.log(newStack.pop());