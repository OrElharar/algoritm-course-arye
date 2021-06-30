// function atzreret(num)
// {
//     if(num === 1 || num === 0)
//         return 1;
    
    
//     return num * atzreret(num-1);
// }

// function pow(base, power)
// {
//     if(power=== 0)
//         return 1;
//     return base * pow(base, power-1)
// }

// function isPalindrom(str,counter=0)
// {
//     console.log(str[counter] , str[str.length-1-counter])
//     if(str[counter] !== str[str.length-1-counter])
//         return false;
//     if(counter>=str.length/2)
//         return true;
    
//     return isPalindrom(str,counter+1)
    
// }

// function getfibonachiValueByIndex(index)
// {
//     let currentValue = 1;
//     let lastPositionValue = 1;
//     let temp;
//     for (let i=2; i<index; i++)
//     {
//         temp = currentValue;
//         currentValue = currentValue + lastPositionValue;
//         lastPositionValue = temp;
//     }
//     return currentValue;
// }
// function getFibonachiRecursive(index,fibonachiArr=[1,1], counter=3)
// {
//     if(index === 0) return;
//     if(index === 1 || index === 2) return 1;
//     fibonachiArr.push((fibonachiArr[counter-2]+fibonachiArr[counter-3]))
//     // console.log(fibonachiArr)
//     if(counter===index)
//         return fibonachiArr[index-1]
   
//     return getFibonachiRecursive(index, fibonachiArr, counter+1)
// }

// function solveExpression(expression)
// {
//     console.log(expression)
//     let i = 0;

//     while(expression.includes('('))
//     {
//         expression = expression.slice(0, expression.indexOf('(')) + solveExpression(expression.slice(expression.indexOf('(')+1, expression.lastIndexOf((')')))) +expression.slice(expression.lastIndexOf(')')+1, expression.length)
//     }
//     console.log(expression)

//     while(expression.includes('+')|| expression.includes('-'))
//     {
//        console.log(parseInt(expression.slice(i)))
//         switch(expression[i])
//         {
//             case '+':
//             return  parseInt(solveExpression(expression.slice(0, i))) + parseInt(solveExpression(expression.slice(i+1, expression.length)))
          
//             case '-':
//             return parseInt(solveExpression(expression.slice(0, i))) - parseInt(solveExpression(expression.slice(i+1, expression.length)))


//         }
//         i++
//     }
  
//     while(expression.includes('*')|| expression.includes('/'))
//     {
//         let lastIindex = (expression.includes('+')) ? expression.indexOf('+') : expression.length;
//         lastIindex = (expression.includes('-')) ? expression.indexOf('-') : lastIindex;
//         let temp = expression;
//         switch(temp[i])
//         {
//             case '*':
//             return parseInt(solveExpression(expression.slice(0, i))) * parseInt(solveExpression(temp.slice(i+1, lastIindex)))
          
//             case '/':
//             return parseInt(solveExpression(expression.slice(0, i))) / parseInt(solveExpression(temp.slice(i+1, lastIindex)))

//         }
//         i++
//     }
   
    
//     return parseInt(expression)
// }

// function getIndexByValue(arr,value)
// {
//     let found = false;
//     let index = -1;
//     for(let i=0; i<arr.length && !found; i++)
//     {
//         if(arr[i === value])
//         {
//             found = true;
//             index = i;
//         }
//     }
//     return index;
// }

function getIndexByBinarySearch(arr,value)
{
    let tempArr = arr;
    let currentIndex = -1;
    let found = false;
    let left = 0;
    let right = arr.length-1
    while(left!==right && !found)
    {
        currentIndex = Math.round((left+right)/2);
        if(value === arr[currentIndex])
            found = true;
        if(value > arr[currentIndex])
        {
           left = currentIndex 
        }
        else
        {
            right = currentIndex
        }
    }
    return found ? currentIndex : -1;
}

function bubbleSort(arr)
{
    let arrSort = false
    let temp, nummberOfLoops=0;
    let endPoinetr = arr.length - 1;
    while(nummberOfLoops<arr.length && !arrSort)
    {   
        arrSort = true
        console.log(arr) 
        for(let i=0; i<arr.length; i++)
        {
            if(i === endPoinetr)
            {
                endPoinetr--
                nummberOfLoops++;
                
            }
            else
            {
                if(arr[i]>arr[i+1])
                {
                    arrSort = false;
                    temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                
                }
            }
            
        }
    }
        return arr;
}

function selectionSort(arr)
{
    let temp;
    let currentMinValueIndex = 0;
    let currentIndex = 0;
    while(currentIndex<arr.length)
    {
        console.log(arr)
        for(let i = currentIndex+1; i<arr.length; i++)
        {
            if(arr[i]< arr[currentMinValueIndex])
                currentMinValueIndex = i;
            if(i===arr.length-1)
            {
                temp = arr[currentMinValueIndex];
                arr[currentMinValueIndex] = arr[currentIndex];
                arr[currentIndex] = temp;
            }
        }
        currentIndex++;
        currentMinValueIndex = currentIndex;
    }
    return arr;
}

let myObj = [1,2,3,{a: '1', b:2, c:3, d:[10,20,30,40], e: {a1: 100, a2: 200, a3: 300}}]

// console.log( Object.prototype.toString.call(myObj.d))
// console.log(Object.keys(myObj).length);

function myStrigify(val)
{
    if(val === null)  return 'null';
    if(val === undefined) return 'undefined';
    if(Object.prototype.toString.call(val) === '[object Object]')
    {
        return '{' + stringifyEachProperty(val) + '}'; 
    }
    
    if(Object.prototype.toString.call(val) === '[object Array]')
    {
        return '[' + stringifyEachElement(val) + ']'; 
    }
    if(Object.prototype.toString.call(val) === '[object String]')
    {
        return '"' + val + '"'; 
    }
    return val;
}

function stringifyEachProperty(val)
{
    let numberOfKeys = Object.keys(val).length;
//    console.log(val)
    let count = 0;
    let resultString = "";
    Object.getOwnPropertyNames(val).forEach(key=>{
        let value = val[key];
        resultString += '"'+key+'"' +':'+ myStrigify(value);
        count++;
        resultString += count<numberOfKeys ? ',' : '';
    })
    return resultString;
   
}
function stringifyEachElement(val)
{
    let count = 0;
    let resultString = "";
    val.forEach(element =>{
        resultString += myStrigify(element);
        count++;
        resultString += count<val.length ? ',' : '';
    })
    return resultString;
}
// console.log(JSON.stringify(myObj));
// console.log(myStrigify(myObj));
// console.log(Object.prototype.toString.call('3'))

function myInsertionSort(arr)
{
    let temp;
    for(let j=1; j<arr.length; j++)
    {
        let i = j;
        while(i>0 && arr[i]<arr[i-1])
        {
           temp = arr[i];
           arr[i] = arr[i-1];
           arr[i-1] = temp;
           i--;
        }
    }
    return arr;
}
function originalInsertionSort(arr)
{
    for(let j=1; j<arr.length; j++)
    {
        let currevtValue = arr[j];
        let i = j-1;
        while(i>=0 && arr[i]>currevtValue)
        {
           arr[i+1] = arr[i];
           i--;
        }
        arr[i+1] = currevtValue
        console.log(arr)
    }
    return arr;
}
// console.log(originalInsertionSort([5,8,7,4,0]))

function mergeTwoSortedArrays(arr1,arr2)
{
    let resultArr = [];
    let firstArrPointer = 0;
    let secondArrPointer = 0;

    while(firstArrPointer<arr1.length && secondArrPointer< arr2.length)
    {
        if(arr1[firstArrPointer]<arr2[secondArrPointer])
        {
            resultArr.push(arr1[firstArrPointer]);
            firstArrPointer++;
        }
        else
        {
            resultArr.push(arr2[secondArrPointer]);
            secondArrPointer++;
        }
    }
    if(firstArrPointer<arr1.length)
    {
        resultArr = resultArr.concat(arr1.slice(firstArrPointer, arr1.length));
    }
    if(secondArrPointer<arr2.length)
    {

        resultArr = resultArr.concat(arr2.slice(secondArrPointer, arr2.length));
    }

    return resultArr;
}
function recursiveMerge(arr)
{
   if(arr.length ===1)
    return arr;
    return mergeTwoSortedArrays(recursiveMerge(arr.slice(0,parseInt(arr.length/2))), recursiveMerge( arr.slice(parseInt(arr.length/2), arr.length)));
   
}

// console.log(recursiveMerge([10,11,12,0,1,2,3,6,19,23]))
function getPivotPosition(arr, startIndex=0, endIndex = arr.length-1)
{
    if(arr.length<=1) return 0;
    let temp;
    let pivot = arr[startIndex];
    let pivotPosition = startIndex;
    let wasSorted = false;
    for(let i=startIndex+1; i<=endIndex; i++)
    {
        if(arr[i] < pivot)
        {
            wasSorted = true;
            temp = arr[pivotPosition+1];
            arr[pivotPosition+1] = arr[i];
            arr[i] = temp;
            pivotPosition++;
        }

    }
    if(!wasSorted)
        return startIndex;
    arr[startIndex] = arr[pivotPosition];
    arr[pivotPosition] = pivot;
    return pivotPosition;
}
let arrCheck = [1,2,4,5,-7,-8];
function quickSort(arr)
{
    let pivotPosition = getPivotPosition(arr);
    console.log(arr)
    if(arr.length <= 1)
        return arr;
    if(arr.length === 2)
        return arr;
    let pivot = arr[pivotPosition]
    let firstPartArr = arr.slice(0, pivotPosition);
    let secondPartOfArr = arr.slice(pivotPosition+1, arr.length);
    let sortedFirstPart = quickSort(firstPartArr);
    let sortedSecondPart = quickSort(secondPartOfArr);
    return sortedFirstPart.concat([pivot],sortedSecondPart);
}

function getDigitByIndex(number, index)
{
    let num = number+"";
   if(index>=num.length)
    return 0;

    return parseInt( num[num.length-1-index]);
}
// console.log(getDigitByIndex(175,1));
function radioSort(arr)
{
    let maxDigitNumber = getMaxDigitsNumberInArray(arr);
    let counter = 0;
    while (counter<maxDigitNumber)
    {
        
        let resultsArr = createArrays();
        arr.forEach(element => {
           let currentDigit =  getDigitByIndex(element,counter);
           resultsArr[currentDigit].push(element);
        });
       
        let currentSortArr = [];
        resultsArr.forEach(element => {
        element.forEach(el =>{
            currentSortArr.push(el);
        })            
        });
        arr = currentSortArr;
        counter++
    }
    return arr;
}
getMaxDigitsNumberInArray = (arr)=>
{
    let result = 0;
    arr.forEach(element => {
        let nextElementString = ""+element;
        if(nextElementString.length>result)
            result = nextElementString.length;
        
    });
    return result;
}
createArrays = ()=>
{
    return[[],[],[],[],[],[],[],[],[],[]]
}

console.log(radioSort([1000,20,21,22,1,2,3,4,1001,1002,0,4324,323,4324,545,43,32]))


