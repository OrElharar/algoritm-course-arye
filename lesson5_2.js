const Stack = require("./lesson3_2");

class Node{
    constructor(value, priority)
    {
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue{
    constructor()
    {
        this.values = [];
    }
    enqueue(val, priority)
    {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        if(this.values.length === 1) return;

        let currentIndex = this.values.length-1;
        let foundCorrectIndex = false
        while(currentIndex >= 0 && !foundCorrectIndex)
        {
            let parentIndex = parseInt((currentIndex-1)/2);
            let currentParentPriority = this.values[parentIndex].priority;
            if(priority < currentParentPriority)
            {
                this.values[currentIndex] = this.values[parentIndex] ;
                this.values[parentIndex] = newNode;
                currentIndex = parentIndex;
            }
            else
            {
                foundCorrectIndex = true;
            }
        }
        return this.values;

    }
    dequeue()
    {
        if(this.values.length === 0 ) return;
        let temp = this.values[0];
        this.values[0] = this.values[this.values.length-1]
        this.values[this.values.length-1] = temp;
        const minElement = this.values.pop();
        let currentIndex = 0;
        let foundCorrectIndex = false;
        const valuesArr = this.values;
        while(currentIndex < this.values.length-1 && !foundCorrectIndex )
        {
            let nextRightChildIndex = parseInt(currentIndex*2 + 1);
            let isRightChilInArr = (nextRightChildIndex > valuesArr.length -1) ? false : true;
            let nextLeftChildIndex = parseInt(currentIndex*2 + 2);
            let isLeftChildInArr = (nextLeftChildIndex > valuesArr.length -1) ? false : true;
            if( (isLeftChildInArr) && (!isRightChilInArr || valuesArr[nextLeftChildIndex].priority < valuesArr[nextRightChildIndex].priority))
            {
                if(valuesArr[nextLeftChildIndex].priority <= valuesArr[currentIndex].priority)
                {
                    let temp = valuesArr[nextLeftChildIndex];
                    valuesArr[nextLeftChildIndex] = valuesArr[currentIndex]
                    valuesArr[currentIndex] = temp;
                    currentIndex = nextLeftChildIndex;
                }
                else
                {
                    if(isRightChilInArr && valuesArr[nextRightChildIndex].priority <= valuesArr[currentIndex].priority)
                    {
                        let temp = valuesArr[nextRightChildIndex];
                        valuesArr[nextRightChildIndex] = valuesArr[currentIndex]
                        valuesArr[currentIndex] = temp;
                        currentIndex = nextRightChildIndex;
                    }
                    else
                    {
                        foundCorrectIndex = true;
                    }
                }
            }
            else
            {
                if(isRightChilInArr)
                {
                    if(valuesArr[nextRightChildIndex].priority <= valuesArr[currentIndex].priority)
                    {
                        let temp = valuesArr[nextRightChildIndex];
                        valuesArr[nextRightChildIndex] = valuesArr[currentIndex]
                        valuesArr[currentIndex] = temp;
                        currentIndex = nextRightChildIndex;
                    }
                    else
                    {
                        if(isLeftChildInArr && valuesArr[nextLeftChildIndex].priority <= valuesArr[currentIndex].priority)
                        {
                            let temp = valuesArr[nextLeftChildIndex];
                            valuesArr[nextLeftChildIndex] = valuesArr[currentIndex]
                            valuesArr[currentIndex] = temp;
                            currentIndex = nextLeftChildIndex;
                        }
                        else
                        {
                            foundCorrectIndex = true;
                        }
                    }
                }
                else
                {
                    foundCorrectIndex = true;
                }
            }
        }
        return minElement;
      
    }

}
// const priorityQueue = new PriorityQueue();
// priorityQueue.enqueue('A',0);
// priorityQueue.enqueue('C',2);
// priorityQueue.enqueue('B',1);
// priorityQueue.enqueue('D',3);
// priorityQueue.enqueue('E',5);
// priorityQueue.enqueue('F',6);
// console.log(priorityQueue);
// console.log(priorityQueue.duqueue());
// console.log(priorityQueue);

// priorityQueue.enqueue('A',0);
// priorityQueue.enqueue('A1',0);
// console.log(priorityQueue);
// console.log(priorityQueue.duqueue());
// console.log(priorityQueue.duqueue());
class Graph{
    constructor()
    {
        this.adjacencyList = {};
    }
    addVertex(vertexName)
    {
        if(this.adjacencyList[vertexName] == null) 
            this.adjacencyList[vertexName] = [];
    }
    addEdge(vertex1, vertex2)
    {
        if(this.adjacencyList[vertex1] == undefined) this.addVertex(vertex1);
        if(this.adjacencyList[vertex2] == undefined) this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2)
    {
        const ver1 = this.adjacencyList[vertex1];
        const ver2 = this.adjacencyList[vertex2];
        if(ver1 == null || ver2 == null) return;
        if(!(this.adjacencyList[vertex1].includes(vertex2))) return;
        this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2),1);
        this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1),1);
        
        // ver1 = ver1.cocncat(ver1.slice(0, ver1.indexOf(ver2)), ver1.slice(ver1.indexOf(ver2)+1, ver1.length));
        // ver2 = ver2.cocncat(ver2.slice(0, ver2.indexOf(ver1)), ver2.slice(ver2.indexOf(ver1)+1, ver2.length));
        return
    }
    removeVertex(vertex)
    {
        for(let property in this.adjacencyList)
        {
            this.removeEdge(property,vertex);
        }
        delete this.adjacencyList[vertex];
    }
    dfsTraverse(startPoint)
    {
        if(this.adjacencyList[startPoint] == null) return;
        const resultArr = [];
        const resultObj ={};
        let resultArrSize = 0;
        for(let property in this.adjacencyList)
        {
            if(property != null) resultArrSize++;
        }
        resultArr.push(startPoint);
        resultObj[startPoint] = true;
        resultArr.push(this.adjacencyList[startPoint][0]);
        resultObj[this.adjacencyList[startPoint][0]]  =true;
        let currentNodePointer = startPoint;
        let count = 0;
        while(resultArr.length < resultArrSize && count <10)
        {
            this.adjacencyList[currentNodePointer].forEach(element => {
                if(resultObj[element] != null)
                    this.addNextElement(element, resultObj,resultArr)
            });
            count++;
        }
        console.log(resultObj);
        return resultArr;
    }
    addNextElement(currentNodePointer, resultObj, resultArr)
    {
        for (let currentIndexPointer = 0 ;currentIndexPointer < this.adjacencyList[currentNodePointer].length; currentIndexPointer++)
        { 
                console.log('node Pointer = '+currentNodePointer+', index = '+currentIndexPointer)
                let nextElement = this.adjacencyList[currentNodePointer][currentIndexPointer];
                if(resultObj[nextElement] == null)
                {
                    resultArr.push(nextElement);
                    resultObj[nextElement] = true;
                    currentNodePointer = nextElement;
                    this.adjacencyList[currentNodePointer].forEach(element => {
                        console.log('The next element is - '+currentNodePointer, element)
                        if(resultObj[element] == null)
                        {
                            resultArr.push(element);
                            resultObj[element] = true;
                             this.addNextElement(element, resultObj,resultArr)
                        }
                    });
                }
                // else
                // {
                //     currentIndexPointer+=1;
                // }
        
        }
        
        // else
        // {
        //     currentIndexPointer++;
            
        // }  
    }
    bfsTraverse(startPoint)
    {
        const traverse = (vertex)=>{
            if(vertex == null) return;
            resultObj[vertex] = true;
            this.adjacencyList[vertex].forEach((element)=>{
                if(resultObj[element] == null)
                {
                    if(addedVertexes[element] == null)
                    {
                        resultArr.push(element);
                        addedVertexes[element] = true;
                    }
                }
            })
           
            this.adjacencyList[vertex].forEach((element)=>{
                if(resultObj[element] == null)
                 traverse(element);
            })
        }
        if(this.adjacencyList[startPoint] == null) return;
        const resultArr = [];
        const resultObj ={};
        const addedVertexes ={};
        resultObj[startPoint] = true;
        resultArr.push(startPoint);
        addedVertexes[startPoint] = true;
        traverse(startPoint)
        console.log(resultObj);
        return resultArr;
    }
    dfsTraverseNotRecursive(startPoint)
    {
        
        if(this.adjacencyList[startPoint] == null) return;
        const resultArr = [];
        const resultObj ={};
        const vertexStack = new Stack();
        vertexStack.push(startPoint)
        while(vertexStack.size > 0)
        {
           
            let nextVertex = vertexStack.pop();
            if(resultObj[nextVertex] == null)
                resultArr.push(nextVertex);
            resultObj[nextVertex] = true;
            console.log(this.adjacencyList[nextVertex])
            for(let i = this.adjacencyList[nextVertex].length-1; i>=0; i--)
            {
                let nextElement = this.adjacencyList[nextVertex][i];
                if(resultObj[nextElement] == null)
                    vertexStack.push(this.adjacencyList[nextVertex][i])
            }
            console.log(vertexStack)
        }
        console.log(resultObj);
        return resultArr;
    }
}
// const newGraph = new Graph();
// newGraph.addVertex('Jerusalem');
// newGraph.addVertex('Tel Aviv');
// newGraph.addEdge('Jerusalem','Tel Aviv');
// console.log(newGraph);
// newGraph.removeVertex('Jerusalem');
// newGraph.addVertex(0);
// newGraph.addVertex(1);
// newGraph.addVertex(2);
// newGraph.addVertex(3);
// newGraph.addVertex(4);
// newGraph.addVertex(5);
// newGraph.addEdge(0,1);
// newGraph.addEdge(0,2);
// newGraph.addEdge(1,3);
// newGraph.addEdge(2,4);
// newGraph.addEdge(3,4);
// newGraph.addEdge(3,5);
// newGraph.addEdge(4,5);
// // [0,1,3,4,2,5]
// console.log(newGraph);
// console.log(newGraph.dfsTraverseNotRecursive(0));
class WeightedGraph{
    constructor()
    {
        this.adjacencyList = {};
    }
    addVertex(vertexName)
    {
        if(this.adjacencyList[vertexName] == null) 
            this.adjacencyList[vertexName] = [];
    }
    addEdge(vertex1, vertex2, weight)
    {
        if(this.adjacencyList[vertex1] == undefined) this.addVertex(vertex1);
        if(this.adjacencyList[vertex2] == undefined) this.addVertex(vertex2);
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
    getMinWeightPath(startPoint, endPoint)
    {
        const distance = {};
        const previous = {};
        const queue = new PriorityQueue();
        for(let vertex in this.adjacencyList)
        {
            if(vertex === startPoint)
                distance[vertex] = 0;           
            else
                distance[vertex] = Infinity;
           
                previous[vertex] = null;
                queue.enqueue(vertex, distance[vertex])
        }
        
        while(queue.values.length > 0)
        {
            const nextInQueue = queue.dequeue();
            let smallest = nextInQueue.value;
            // if(nextNode === endPoint)
            // {
            //     return endPoint;
            // }
            const vertexNeighbors = this.adjacencyList[smallest]
            vertexNeighbors.forEach((neighbor)=>{
                let neighborNode = neighbor['node'];
                let neighborWeight = neighbor['weight'];
                if(previous[smallest] !== neighborNode)
                {
                    const previousWeight = distance[neighborNode]
                    neighborWeight += distance[smallest];
                    if(neighborWeight < previousWeight)
                    {
                        previous[neighborNode] = smallest;
                        distance[neighborNode] = neighborWeight;
                        queue.enqueue(neighborNode, distance[neighborNode]);
                    }
                }
            })
        }
        const path = [];
        let currentVertex = endPoint;
        while(currentVertex != null)
        {
            path.push(currentVertex);
            currentVertex = previous[currentVertex];
        }
        return path;
    }
}
const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A','B',4);
graph.addEdge('A','C',2);
graph.addEdge('B','E',3);
graph.addEdge('C','D',2);
graph.addEdge('C','F',4);
graph.addEdge('D','E',3);
graph.addEdge('D','F',1);
graph.addEdge('E','F',1);
// console.log(graph.getMinWeightPath('A','E'));
//node lesson5_2.js
console.log(graph.getMinWeightPath('A','E'))