function sayıUret(ustLimit = 49 ){ //default deger
    return Math.ceil(Math.random() * ustLimit)
}

var sayi1 = sayıUret(1000)
var sayi2 = sayıUret()
var sayi3 = sayıUret()
var sayi4 = sayıUret()
var sayi5 = sayıUret()
var sayi6 = sayıUret()

console.log('Kolon : ' + sayi1 + ' '+ sayi2 + ' '+ sayi3 + ' '
+ sayi4 + ' '+ sayi5 + ' '+ sayi6 + ' ' )


