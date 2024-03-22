// let a = 1
// let b = 2
// let temp

// function swapNr1() {
//   a = a + b //3
//   b = a - b //1
//   a = a - b //2
//   return [a, b]
// }

// console.log(swapNr1())

// function swapNr2() {
//   temp = a
//   a = b
//   b = temp
//   return [a, b]
// }
// console.log(swapNr2())
//--------------------------------------------eliminate duplicaes in an array
// let arr = [1, 2, 3, 3, 4, 6, 6]
// const newArr = []
// arr.forEach(value => {
//   if (!newArr.includes(value)) {
//     newArr.push(value)
//   }
// })
// console.log(newArr)
// const arrNew = [...new Set(arr)]
// console.log(arrNew)

//--------------------------------------------removes duplicates for a string
// let newArr = []
// function removeDupli(str) {
//   const strInArr = str.split('')
//   console.log(strInArr)
//   strInArr.forEach(value => {
//     if (!newArr.includes(value)) {
//       newArr.push(value)
//     }
//   })
//   str = newArr.join('')
//   return str
// }
// console.log(removeDupli('aabbc'))
//----------------------------------------------------------merge 2 arr

// let array1 = ['a', 'b', 'c', 'd', 'e']
// let array2 = ['1', '2']

// //  output = ["a","1","b","2","c","d", "e"]
// const newArr = [...array1, ...array2]
// console.log(newArr)

//---------------------------------reverse the number or verify if is a palindrom (anna se citeste la fel si de la cap si de la coada)
// let num1 = 123456789
// let result = num1.toString().split('').reverse().join('')
// console.log(result)

// function reverseFunction(num) {
//   let numStr = num.toString()
//   let reversedStr = ''
//   for (let i = numStr.length - 1; i >= 0; i--) {
//     reversedStr += numStr[i]
//   }
//   return parseInt(reversedStr)
// }
// let num = 987654321
// let reversedNum = reverseFunction(num)

//-----------------------------------compare 2 arr
// let arr1 = ['a', 'b', 'c']
// let arr2 = ['a', 'b', 'c']

// let compare = (arr1, arr2) => {
//   return arr1.length === arr2.length && arr1let .every(el => arr2.includes(el))
// }
// console.log(compare(arr1, arr2))

// //---------------compare 2 obj
// const objA = { name: 'John', age: 30 }
// const objB = { name: 'John', age: 30 }

// console.log(JSON.stringify(objA) === JSON.stringify(objB)) // true

// //--------------sum a several arr
// function sum_array(arr) {
//   var sum = 0
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j]
//     }
//   }
//   return sum
// }
// sum_array([[3, 2], [1], [4, 12]])

// //--------------empty an array
// let arr = [2, 3, 5]
// arr = [] //sau
// arrayList.length = 0;
// //-----------------------------------------

//--------find even or odd number
// function evenOrOdd(number) {
//   if (number % 1 === 0) {
//     return 'Even'
//   } else 'Odd'
// }
// console.log(evenOrOdd(8))

//---------find the occurance for each character
// function countOccurrences(str) { //aici
//   let charCount = {}
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i]
//     if (charCount[char]) {
//       charCount[char]++
//     } else charCount[char] = 1
//   }
// }

// console.log(countOccurrences('hello world'))

//-------------------------------------------------------
// let obj = {}
// obj.name = 1
// obj['100'] = 2
// console.log(obj)

// FizzBuzz - Print numbers from 1 to 100
// - if a number is divisible by 3 print Fizz
// - if a number is divisible by 5 print Buzz
// - if a number is divisible by both 3 and 5 print FizzBuzz

//-------------------Two string anagram ---// isAnagram("listen", "silent")     -> true
// function isAnagram(a, b) {
//     str1 = a.toLowerCase().split("").sort().join("")
//     str2 = b.toLowerCase().split("").sort().join("")

//     if (str1 == str2) {
//         console.log("Given strings are anagram")
//     }
//     else {
//         console.log("Given strings are not anagram")
//     }
// }

// //----------iterate through an obj
// var person = {
//   name: 'John',
//   age: (function () {
//     console.log(this.age)
//   })(),
// }

// for (var key in person) {
//   console.log(key, person[key])
// }
// Object.keys(person).forEach(key => {
//   console.log(`${key},${person[key]}`)
// })
// Object.entries(person).forEach(([key, value]) => {
//   console.log(key, value)
// })

// //------------------------------------Write a program to find second larger number in a array and print the index of that number
// var x = [1, 4, 5, 9, 8, 3]
// var y = x.sort()
// var secondlargetnumber = y[y.length - 2]
// console.log(secondlargetnumber)
// var indexofseclarge = x.indexOf(secondlargetnumber)
// console.log(indexofseclarge)

// //---------------------------------------wap to find out how many 1 and 0 in a given number= 100110011
// number = 100110011
// str = String(100110011)
// var count = 0
// var count2 = 0
// for (let i = 0; i <= str.length; i++) {
//   if (str[i] == 1) {
//     count = count + 1
//   }
//   if (str[i] == 0) {
//     count2 = count2 + 1
//   }
// }
// console.log(count)
// console.log(count2) //
// //--------------------------------------How would you find the common elements between two arrays?

// function findCommonElements(arr1, arr2) {
//   return arr1.filter(el => arr2.includes(el))
// }
// console.log(findCommonElements([1, 2, 3], [2, 3, 4])) // [2, 3]

// //------------------------------------------arrow
// function regularFunction(x, y) {
//   return x + y
// }
// const arrowFunction = (x, y) => x + y

// //-----------------------------remove falsy values from an array
// let arr = [false, 0, NaN, 6, undefined]
// let nArr = arr.filter(v => {
//   return v
// })
// console.log(nArr)

// //------------------------------------------unirea a 2 arr
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [2, 3, 4, 6, 7, 8, 9]
// let arrUnion = [...new Set([...arr1, ...arr2])](
//   //sa adauge val doar 1 sg data nu sa le duplifice.
//   // ----------------------------find the common elements

//   //------------------------------
//   function () {
//     var a = (b = 3)
//   }
// )()
// // => b = 3 a = b
// console.log('a defined? ' + (typeof a !== 'undefined')) // e
// console.log('b defined? ' + (typeof b !== 'undefined')) //error

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, i * 1000)
// }

// let arr = ['a', 'b', 'b', 'c']
// let ceva = 'ceva'

// let elemF = arr.filter(el => el === 'b')
// console.log('elemF', elemF)

var array = ['a', 'IRS Broker', 'c', 'd']
var stringToCheck = 'IRS'

if (!array.includes(stringToCheck)) {
  console.log(stringToCheck + ' nu există în array.')
} else {
  console.log(stringToCheck + ' există în array.')
}

// elementele comune din 2 array-uri.
// let arr1 = ['a', 'b', 'c', 'd', 'r']

// let arr2 = ['b', 'c', 'd', 't', 'y']
// const newArr = []
// arr1.forEach(el1 => {
//   if (arr2.includes(el1)) {
//     newArr.push(el1)
//   }
// })

// console.log('newArr', newArr)

//toate elemeentele din arr1 sunt in arr2?
// let arr1 = ['b', 'c', 'd']
// let arr2 = ['c', 'b', 'd']

// const allElemCom = arr1.every(el1 => arr2.includes(el1))

// console.log('newArr', allElemCom)

