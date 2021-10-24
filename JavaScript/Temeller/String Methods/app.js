let value;

const firstName = "Louis";
const lastName = "Armstrong";
const langs = "Java, Python, C++";

value = firstName + " " + lastName;


value = "Çisem ";
value +="Akman"

value = firstName.length;
value = firstName.concat(" ", lastName, " ", "Caz")

value = firstName.toLowerCase();
value = firstName.toUpperCase();
value = firstName[0];
value = firstName[2];
value = firstName[4];
value = firstName[firstName.length-1];


//index of

value = firstName.indexOf("L");
value = firstName.indexOf("o");
value = firstName.indexOf("l");


//char at

value= firstName.charAt(0);
value= firstName.charAt(firstName.length-1);


//split

value = langs.split(",");

//replace

value = langs.replace("Python","CSS");

// Includes

value = langs.includes("Java");
value = langs.includes("adfsdgdfd");

console.log(value);