const name = "Çisem Akman";
const departmant = "Bilişim";
const salary = 4000;

//const a = "İsim: " + name + "\n" + "Deparmant: "+departmant+"\n"+"Maaş: "+salary;

// const a = `İsim: ${name}\nDepartmant: ${departmant}\nMaaş: ${salary}`;
 
// const html = "<ul>" + 
//             "<li>" + name + "</li>"+
//             "<li>" + departmant + "</li>"+
//             "<li>" + salary + "</li>"+
//             "</ul>";
  function a() {
      return "Merhaba";
  }            
const html = `
            <ul>
                <li>${name}</li>
                <li>${departmant}</li>
                <li>${salary}</li>
                <li>${10/4}</li>
                <li>${a()}</li>
               

            </ul>

`
document.body.innerHTML = html

