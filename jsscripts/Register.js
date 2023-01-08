
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
let c=0;
function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this. service = service;
    this.ownerName = owner; 
    this.Phone = phone;
    this.id=c++;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwnerName = document.getElementById("txtOwnerName");
let inputPhone = document.getElementById("txtPhone");

function validation(thePet){
    let validation=true;
    
    inputName.classList.remove("alert-error")
    inputAge.classList.remove("alert-error")
    inputGender.classList.remove("alert-error")
    inputBreed.classList.remove("alert-error")
    inputService.classList.remove("alert-error")
    inputOwnerName.classList.remove("alert-error")
    inputPhone.classList.remove("alert-error")
    
    if(thePet.name==""){
        // alert("please enter the name");
        validation=false;
        inputName.classList.add("alert-error");
    }
    if(thePet.age==""){
        validation=false;
        inputAge.classList.add("alert-error");
    }
    if(thePet.gender==""){
        validation=false;
        inputGender.classList.add("alert-error");
    }
    if(thePet.breed==""){
        validation=false;
        inputBreed.classList.add("alert-error");
    }
    if(thePet.service==""){
        validation=false;
        inputService.classList.add("alert-error");
    }
    if(thePet.ownerName==""){
        validation=false;
        inputOwnerName.classList.add("alert-error");
    }
    if(thePet.Phone==""){
        validation=false;
        inputPhone.classList.add("alert-error");
    }
    
    
    return validation;
}
function register(){
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwnerName.value,inputPhone.value);
    if(validation(newPet)==true){
        console.log(newPet.service.breed)

    petSalon.pets.push(newPet);
    
    // alert("You have " + petSalon.pets.length + " pets in the salon.");
    displayInfo();
    displayPetCards();
    clearForm();
    }else{
    alert("please complete the text");
    }
}
function clearForm(){
    inputName.value ="";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputOwnerName.value = "";
    inputPhone.value = "";
}
function deletePet(id){
    console.log("deleting pet " + id);
    let deleteIndex;

        for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(id==pet.id){
            deleteIndex=i;
    
        }
    }
    document.getElementById(id).remove();
    petSalon.pets.splice(deleteIndex,1);
    displayInfo();
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
