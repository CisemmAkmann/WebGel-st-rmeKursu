function sayiUret(ustLimit = 49) { //default deger
    return Math.ceil(Math.random() * ustLimit)
}

var sayi = 1
while (sayi <= 6) {
    console.log(sayiUret())
    sayi++
}

console.log('*****************')

for (var i = 1; i <= 6; i++) {
    console.log(sayiUret())
}

console.log('*****************')

for (var i = 1; i <= 8; i++) {
    console.log(i + ". KOLON")
    for (var j = 1; j <= 6; j++) {
        console.log(sayiUret())
    }

}


