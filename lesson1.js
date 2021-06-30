const sumOfAllNumbersUntill =  (number)=>{
    let sum = 0;
    for(let i=0; i<=number; i++)
        sum+=i;
    return sum;
}
const sumOfAllNumbersUntillVwersion2 =  (number)=>{
    let sum = 0;
    for(let i=0; i<=number; i++)
        sum+=i;
    return sum;
}
// let t1 = Date.now();
// console.log(sumOfAllNumbersUntill(3));

function getMultiplyTable(num)
{
    let table = "";
    for (let i=1; i<=num; i++)
    {
        for(let j=1; j<=num; j++)
        {
            table+=(i*j<10)? i*j+'  ':i*j+" ";
        }
        table+= "\n";
    }
    return table;
}
// console.log(getMultiplyTable(10))
function isPowArr(firstArray, secondArray)
{
    if(firstArray.length !== secondArray.length)
        return false;
    let result = true;
    firstArray.sort((a,b) => a - b);
    secondArray.sort((a,b) => a - b);
    for(let i=0; i<firstArray.length && result; i++)
    {
        if (firstArray[i]**2 !== secondArray[i])
            result = false;
    }
    return result;
} 
// console.log(isPowArr([1,4,2],[1,16,4]))
function isAnigram(firstString, secondString)
{
    if (firstString.length !== secondString.length)
        return false;
    const firstStringLettersFC = {};
    const secondStringLettersFC = {};
    for(let i=0; i<firstString.length; i++)
    {
        firstStringLettersFC[firstString[i]] = (firstStringLettersFC[firstString[i]] == undefined) ? 1 : firstStringLettersFC[firstString[i]]+1;
        secondStringLettersFC[secondString[i]] = (secondStringLettersFC[secondString[i]] == undefined) ? 1 : secondStringLettersFC[secondString[i]]+1;
    }
    console.log(firstStringLettersFC,secondStringLettersFC);
    for(property in firstStringLettersFC)
    {
        
        if(firstStringLettersFC[property]!==secondStringLettersFC[property])
            return false;        
    }
    return true;
}

function isTwoEqualParameters(...parameters)
{
    const parametersObj = {};
    let result = false;
    parameters.forEach(element => {
    
    if( parametersObj[element] === 1)
    {
        console.log(parametersObj[element], true)
        result = true;
    }
    parametersObj[element] = 1;
    });
    return result;
}

// console.log(isTwoEqualParameters(1,2,3,4,5,6,1))
function isSumOfTwoElementZero(arr)
{
    let endIndex = arr.length-1;
    let startIndex = 0;
    let currentSum;
    while(startIndex<endIndex)
    {
        currentSum = arr[startIndex]+arr[endIndex];
        if(currentSum === 0)
        {
            return true;
        }
        if(currentSum>0)
        {
            endIndex--;
        }
        else
            startIndex++;
    }
    return false;
}

function isSpreadedSubString(firstString, secondString)
{
    if(secondString.length<firstString.length)
        return false;
    let firstStringIndexPointer = 0;
    let secondStringIndexPointer = 0;
    for(let i=0; i<secondString.length; i++)
    {
        if(firstString[firstStringIndexPointer] !== secondString[secondStringIndexPointer])
            secondStringIndexPointer++;
        else
        {
            if(firstStringIndexPointer === firstString.length-1)
                return true;
            firstStringIndexPointer++;
            secondStringIndexPointer++;
        }
    }
    return false;
}
function highestSumOfElements(arr,number)
{
    arr.sort((a,b) => a - b);
    let index = arr.length-1;
    let sum = 0;
    for(let i =0; i<number; i++)
    {
        sum+= arr[index];
        index--;
    }
    return sum;
}
// console.log(highestSumOfElements([1,2,3,100,-100,30,1000,-1,-40],3))
function highestSumOfNeighborsElements(arr,number)
{
    let sum = 0;
    if(number>arr.length)
    {
        arr.forEach(element => {
         sum+=element   
        });
        return sum;
    }
    
    let neighborsSumArray = [];
    for(let i =0; i<=arr.length-number; i++)
    {
        for(let j=i; j<number+i; j++)
        {
            sum+= arr[j];
        }
        neighborsSumArray.push(sum);
        sum=0;
    }
    let maxSum = neighborsSumArray[0];
    neighborsSumArray.forEach(element => {
    maxSum = element>maxSum ? element : maxSum;        
    });
    return maxSum;
    
}

function numberOfNeighborsElementsBiggerOrHigher(arr,number)
{
    let sum = 0;
    let numberOfElements=0;

    
    let neighborsSumArray = [];
    for(let i =0; i<arr.length; i++)
    {
        for(let j=i; j<arr.length && sum<number;j++ )
        {
            sum+= arr[j];
            numberOfElements++;
        }
        if(sum>=number)
            neighborsSumArray.push(numberOfElements);
        sum=0;
        numberOfElements=0;
    }
    let minNumberOfElements = neighborsSumArray[0];
    neighborsSumArray.forEach(element => {
        minNumberOfElements = element<minNumberOfElements ? element : minNumberOfElements;        
    });
    return minNumberOfElements;
    
}
console.log(numberOfNeighborsElementsBiggerOrHigher([-100,100,200,1,2,3,500,-100,700],1300))