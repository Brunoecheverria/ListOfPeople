alert("Welcome to the site, enter your full name to add it to the list, thank you very much! ")

const People = [
    new Person("Sylvester", "Jordan"),
    new Person("Scarlett", "Evans"),
    new Person("Bruno", "Díaz")
]

function showPeople(){
    let text = "";
    for(let person of People){
        text += `<li>${person.name} ${person.lastname}</li>`;
    }
    document.getElementById("people").innerHTML = text;
}

function addPeople(){
    const form = document.forms["form"];
    const name = form["name"];
    const lastname = form["lastname"];
    if (name.value === "" || lastname.value === "") {
        alert("You cannot add blanks, please add your first and last name.");
        return;}
    const person = new Person(name.value, lastname.value);
    console.log(person);
    People.push(person);
    showPeople();
    name.value = "";
    lastname.value = "";
}