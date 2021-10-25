let value;

const programmer = {
    name : "Çisem Akman",
    age : 22,
    email : "cisemmakmann@gmail.com",
    langs: ["Python", "Java","Javascript"],

    address: {
        city: "Ankara",
        streer: "Bahçelievler"
    },

    work : function(){
        console.log("programcı çalışıyor...");
    }
}

value = programmer;

value = programmer.email;
value = programmer["email"];
value = programmer.langs;
value = programmer.address.city;

programmer.work();


const programmers = [
    {name: "Çisem Akman", age:25 },
    {name: "Oğuz" , age: 22}
]

value = programmers[0];
value = programmers[0].name;


console.log(value);