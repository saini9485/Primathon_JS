//Array method 
// 1. push() >>  add  the element in the end of array and return new array 
// let arr = [1,2,3,4,5,6]
// arr.push(7,8)
// console.log(arr)

// 2. pop() >> use for delete the last array 
// let arr = [1,2,3,4,5,6,7]
// arr.pop()
// console.log(arr)

// 3. shift() >>> use for  delete the  array in first 
// let arr = [1,2,3,4,5,6,7]
// arr.shift()
// console.log(arr) // [ 2, 3, 4, 5, 6, 7 ]

// 4. unshift() >>> add the array in first 
//  let arr = [1,2,3,4,5,6,7]
//  arr.unshift(0)
//  console.log(arr) // [0, 2, 3, 4, 5, 6, 7 ]

// 5. map() // map return new array after applying the condition
//  let arr = [1,2,3,4,5,6]
//  let res = arr.map((num)=>num*2)
//  console.log(res) // [ 2, 4, 6, 8, 10, 12 ]

// 6. filter() // filter element return new array whose fulfil the condition
// let arr = [1,2,3,4,5,6]
//  let res = arr.filter((num)=>num>5)
//  console.log(res)  // [ 6 ]

// 7. reduce() // 
// let arr = [1,2,3,4,5]
// let sum = arr.reduce((acc,  curr ) => {
//    return  acc + curr
 
// },8)
// console.log(sum) // 23

// 8. forEach()
// let arr = [1,2,3,4,5] 
// arr.forEach((num)=> console.log(num*2)) /// 2,4,6,8,10

// 9. concat()
// 10. flat()
// let arr =[[[[2,3,5]]]]
// let res = arr.flat(1)
// console.log(res) 
// 11. slice()
// 12. find()
// 13. join()
// 14. splice()
// 15. some()
// 16. reverse()
// 17. indexOf()
// 18. sort() 
let arr =[2,3,5,1,9,8,10,11]
// let res = arr.sort()
// console.log(res)

// arr.sort(function(a,b){
// return a-b
// })
// console.log(arr)

// arr.sort((a,b)=>{
//     return a-b
// })
// console.log(arr)

arr.sort((a,b) => b-a)
console.log(arr)

// 19. toString()
// 20. every()
// let arr = [1,2,3,4,5,6,7]
// let res = arr.includes(9)
// console.log(res)
// 21 includes()



