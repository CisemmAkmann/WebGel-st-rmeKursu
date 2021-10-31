// window object

let value

value = document
value = document.all
value = document.all.length //html sayfasında kaç tane element var
value = document.all[0]
value = document.all[6]
value = document.all[document.all.length-1]

// const element = document.all //html collection

// const collections = Array.from(document.all)
// collections.forEach(function(element) {
//     console.log(element)
// });

value = document.all[8]
value = document.body
value = document.head
value = document.location
value = document.location.hostname
value = document.location.port
value = document.URL
value = document.characterSet 

//Scriptler

value = document.scripts
value = document.scripts.length
value = document.scripts[0]

//linkler

value = document.links
value = document.links[0]
value = document.links[document.links.length-1]
value = document.links[document.links.length-1].getAttribute("class")
value = document.links[document.links.length-1].getAttribute("href")
value = document.links[document.links.length-1].className
value = document.links[document.links.length-1].classList


//formlar

value = document.forms
value = document.forms.length
value = document.forms[0]
value = document.forms[0].id
value = document.forms[0].getAttribute("id")
value = document.forms[0].method







console.log(value)