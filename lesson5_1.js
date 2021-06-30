class MaxBinaryHeap{
    constructor()
    {
        this.values = [];
    }
    insert(value)
    {
        this.values.push(value);
        let foundCorrectIndex = false;
        let currentIndex = this.values.length-1;
        while(currentIndex > 0 && !foundCorrectIndex)
        {
            let parentIndex = parseInt((currentIndex-1)/2);
            if(this.values[parentIndex] > this.values[currentIndex])
                foundCorrectIndex = true;
            else
            {
                let temp = this.values[parentIndex];
                this.values[parentIndex] = this.values[currentIndex];
                this.values[currentIndex] = temp;
                currentIndex = parentIndex;
            }
        }
        return this.values;
    }
    extractMax()
    {
        let maxElement = this.values[0];
        this.values[0] = this.values[this.values.length-1];
        this.values[this.values.length-1] = maxElement;
        this.values.pop();
        let currentIndex = 0;
        let foundCorrectIndex = false;
        while(currentIndex < this.values.length-1 && !foundCorrectIndex)
        {
            let nextRightChildIndex = parseInt(currentIndex*2 + 1);
            let nextLeftChildIndex = parseInt(currentIndex*2 + 2);
            if(this.values[nextRightChildIndex] > this.values[nextLeftChildIndex])
            {
                if(this.values[nextRightChildIndex] >= this.values[currentIndex] )
                {
                    let temp = this.values[nextRightChildIndex];
                    this.values[nextRightChildIndex] = this.values[currentIndex];
                    this.values[currentIndex] = temp;
                    currentIndex = nextRightChildIndex;
                }
                else
                {
                    if(this.values[nextLeftChildIndex] >= this.values[currentIndex])
                    {
                        let temp = this.values[nextLeftChildIndex];
                        this.values[nextLeftChildIndex] = this.values[currentIndex];
                        this.values[currentIndex] = temp;
                        currentIndex = nextLeftChildIndex;
                    }
                    else
                        foundCorrectIndex = true;
                }
            }
            else
            {
                if(this.values[nextLeftChildIndex] >= this.values[currentIndex])
                    {
                        let temp = this.values[nextLeftChildIndex];
                        this.values[nextLeftChildIndex] = this.values[currentIndex];
                        this.values[currentIndex] = temp;
                        currentIndex = nextLeftChildIndex;
                    }
                    else
                    {
                        if(this.values[nextRightChildIndex] >= this.values[currentIndex] )
                        {
                            let temp = this.values[nextRightChildIndex];
                            this.values[nextRightChildIndex] = this.values[currentIndex];
                            this.values[currentIndex] = temp;
                            currentIndex = nextRightChildIndex;
                        }
                        else
                            foundCorrectIndex = true;

                    }

            }
        }
    }
}
// const maxBinaryHeap = new MaxBinaryHeap();
// maxBinaryHeap.insert(45);
// maxBinaryHeap.insert(78);
// maxBinaryHeap.insert(5);
// maxBinaryHeap.insert(97);
// maxBinaryHeap.extractMax();
// maxBinaryHeap.extractMax();
// console.log(maxBinaryHeap):

class HashTable{
    constructor(size = 53)
    {
        this.keyMap = new Array(size);
    }
    _hash(key)
    {
        let total = 0;
        let primeNum = 31;
        for(let i=0; i < Math.min(100, key.length); i++)
        {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * primeNum +value) % this.keyMap.length;
        }
        return Math.abs(total);
    }
    set(key, value)
    {
        const keyIndex = this._hash(key);
        if(this.keyMap[keyIndex] == null)
        {
            this.keyMap[keyIndex] = [[key,value]];
        }
        else
        {
            this.keyMap[keyIndex] = this.keyMap[keyIndex].push([key,value]);
        }
    }
    get(key)
    {
        const keyIndex = this._hash(key);
        if(this.keyMap[keyIndex] == null) return;
        if(this.keyMap[keyIndex].length === 1) 
        {
            const currentIndexArr =  this.keyMap[keyIndex][0];
            return currentIndexArr[1];
        }
        for(let i = 0; i < Math.min(currentIndexArr.length,4); i++)
        {
            if(currentIndexArr[i][0] === key)
                return currentIndexArr[i][1]; 
        }
        return;
    }
    keys()
    {
        const keysArr = [];
        for(let i = 0; i<this.keyMap.length -1; i++)
        {
            if(this.keyMap[i] != null)
            {
                this.keyMap[i].forEach(([key,value]) => {
                    keysArr.push(key);
                });
            }
        }
        return keysArr;
    }
    values()
    {
        const valuesArr = [];
        for(let i = 0; i<this.keyMap.length -1; i++)
        {
            if(this.keyMap[i] != null)
            {
                this.keyMap[i].forEach(([key,value]) => {
                    valuesArr.push(value);
                });
            }
        }
        return valuesArr;
    }
}
const hashTable = new HashTable();
hashTable.set('a','A');
hashTable.set('b','B');
hashTable.set('c','C');
hashTable.set('d','D');
console.log(hashTable.values())
