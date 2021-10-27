// function merhaba(){
//     console.log("Merhaba")
// }

// merhaba()

// function merhaba(name = "Bilgi yok",age = "Bilgi yok"){

       // if(typeof name === "undefined") name = "Bilgi yok"
       // if(typeof age === "undefined") age = "Bilgi yok"

//     console.log(`İsim: ${name} Yaş: ${age}`)
// }

// merhaba("Çisem",22)
// merhaba()

// function square(x){
//     console.log(x*x)
// }

// function cube(x){
//     console.log(x*x*x)
// }

// let a = square(12)

// a = cube(a)



// function square(x){
//     return x*x
// }

// function cube(x){
//     return x*x*x
// }

// let a = cube(square(12))

// console.log(a)

// function merhaba(){
//     return "merhaba"
// }

// console.log(merhaba())



// const merhaba = function(name){
//     console.log("merhaba " + name)
// }

// merhaba("Çisem")

//IIFE - tanımlandığı yerde çalışan fonksiyonlar

// (function(name){
//     console.log("merhaba:" + name)
// })("Çisem")

const database = {
    host: "localhost",
    add: function(){
        console.log("eklendi")
    },
    get: function(){
        console.log("elde edildi")
    },

    update : function(id){
        console.log(`Id: ${id} Güncellendi`)
    },
    delete : function(id){
        console.log(`Id: ${id} Silindi`)
    }
}

console.log(database.host)
console.log(database.get())
console.log(database.add())
console.log(database.update(10))
