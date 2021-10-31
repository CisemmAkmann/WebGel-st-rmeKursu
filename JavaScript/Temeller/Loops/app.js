
// let i = 0
// while(i < 10){
//     console.log(i)
//     i++
// }


// let i = 10
// while(i > 0){
//     console.log(i)
//     i--
// }



// let i = 0
// while(i < 10){
//     console.log(i)
//     if(i == 5) {
//         break
//     }
//     i++
// }

// let i = 0
// while(i < 10){
    
//     if(i == 3 || i==5) {
//         i++
//         continue
        
//     }
//     console.log(i)
//     i++
// }

// let i = 0

// do{
//     console.log(i)
//     i++
// }while(i<10)

// const langs = ["python","javascript", "java"]
// let i = 0
// while(i<langs.length){
//     console.log(langs[i])
//     i++
// }

// for(let i = 0; i<langs.length; i++){
//     console.log(langs[i])
// }

// langs.forEach(function(lang,index) {
//     console.log(lang,index)
    
// });

// const users = [
//     {name:"Çisem",age : 22},
//     {name:"Zeynep", age:25},
//     {name:"Sıla", age:18}
// ]

// const names = users.map(function(users){
//     return users.name
// })
// const ages = users.map(function(users){
//     return users.age
// })


// console.log(names)
// console.log(ages)

const user = {
    name : "Çisem",
    age: 22
}

for(let key in user){
    console.log(key,user[key])
}
