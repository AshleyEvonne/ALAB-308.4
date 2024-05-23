/* 
    Objective: console.log every row
    input: string , output: string

    Example:
    input:
    ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

    output:
    ID,Name,Occupation,Age
    42,Bruce,Knight,41
    57,Bob,Fry Cook,19
    63,Blaine,Quiz Master,58
    98,Bill,Doctor’s Assistant,26*/


function splitCSV (str) {
    let people = str.split('\n');
    // Foward 
    for(let i = 0; i < people.length; i++) {
        // console.log (people[i])
    }

    // reverse
    for (let person = people.length - 1; person > -1; person--){
        // console.log (people[person])
    }

}


let csv = 'ID,Name,Occupation,Age\n42,Bruces,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26'
//console.log(splitCSV(csv))

//Part 2 Expanding Functionality
/*Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.*/
 

function expandFunc(str){
    let tempArr = str.split('\n') // (arrayname.split will break/split where you tell it. In this case splitting everytime "\n" shows up
    let new_arr = [] // empty place holder...Nested or Nesting? 
for (let i = 0; i <= tempArr.length -1; i++){//(i=0) to indicate index start, (arr.length -1) subtracts 1 from lenght to get index lenght, (i++) add 1 to index everytime
    const subArr = tempArr[i].split(',')// after string splits at every "\n" it then split at every "," starting at (i) 0 index (making a colunm?)...iterating threw every comma?
    new_arr.push(subArr)// (.push) adds subArr to new_arr variable which is an array([]).
   
}
return new_arr

}
const arr = expandFunc(csv)// (expandFunc(csv)) applies function to (csv) variable. Then make that its own variable
//console.log(arr)


/* Part Three Transform
    For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
    
    Convert these keys to all lowercase letters for consistency.
    
    Store these objects in an array, in the order that they were originally listed.
    
    Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

*/

function Transform (arr){

    let keys = arr[0]
    let obj = {}
    let new_arr = []
    for (let i = 1; i <= arr.length -1; i++){
        //console.log(arr[i])
        let sub_arr = arr[i].length -1
        for( let j = 0; j <= sub_arr; j++){
            const key = keys[j].toLowerCase()// j is starting at 0 (first index), .toLowercase makes elemnts lower case
            const value = arr[i][j]// arr[i][j] gets you in the 2nd array at the 1st index
            obj[key] = value // creating key value pairs    

        }
        new_arr.push(obj)
        obj = {}
    }

    return new_arr
}

//console.log(Transform(arr))

/*Part 4 Sorting and Manipulating data
Remove the last element from the sorted array.

Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }

Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }*/

function sortandManipulate (arr){
// remove last element
    let removeItem = arr.pop() // deleting the last item in an array
    let new_obj = { id: "48", name: "Barry", occupation: "Runner", age: "25" } // setting variable of an new object array
    arr[1] = new_obj // adding object to my previous array as index 1 
    arr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }) // adding new object at the end of array 
    return arr
}
function findAvg(arr){
    let sum = 0
   for ( let i = 0; i > arr.length -1; i++){
    obj = arr[i]
    sum += parseInt(obj.age)
        console.log(sum)     
    }
    let avg = sum / arr.length
    return avg

}
// other ways i solved the problem without a function
let removeElement = arr.pop() // .pop removes the last element
// console.log("Sort and pop",sortandManipulate(Transform(arr)))

 arr[1] = ['48' , 'Barry' , 'Runner' , '25']
//  console.log(arr[1])

const barry = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// arr.splice( 1 , 0, barry)
// console.log(arr)

 let addElement = arr.push(['7', 'Bilbo' , 'None', '111'])
//  console.log (addElement)

addElement- arr.push ({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
// console.log(arr)


