
let petSalon={
    name:"Belle Bete",
    address:{
        street:"Belle",
        zip: 33510,
        number:500
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[] 
        
    
}

function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this. service = service;
    this.ownername = owner; 
    this.contactPhone = phone;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function register(){
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService);
    
    petSalon.pets.push(newPet);
    
    alert("You have " + petSalon.pets.length + " pets in the salon.");
    displayInfo();
    displayPetCards();
    clearForm();
}
function clearForm(){
    inputName.value ="";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
}
function displayInfo(){
    document.getElementById("info").innerHTML="You have " + petSalon.pets.length + " pets in the salon.";
}


function init(){
    let scooby = new Pet("Scooby","50","male","Dane","Grooming","Shaggy","555-555-5555");
    let spike = new Pet ("Spike","34","male","Boxer","Nails Trimming","Mike Tyson","444-444-4444");
    let witchy = new Pet("Witchy","80","female","Persian","Bath","schrodinger","314-314-3143");
    

    petSalon.pets.push(scooby,spike,witchy);
    displayInfo();
    displayPetCards();


}
window.onload = init;

// function displaySalonInfo(){
//     let tmp=`
//     <p> Welcome to the ${petSalon.name} we are open from ${petSalon.hours.open}</p>`;
//     document.getElementById("info").innerHTML=tmp;
// }
//  function displayInfo(){

//  }

// function init(){
    
// }

// window.onload = init;
