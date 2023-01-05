function displayPetCards(){
    let petSection = document.getElementById("pets");
    let card="";
    
    for(let i=0; i < petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card += `
        <div>
            <h4>${pet.name}</h4>
            <p>Age: ${pet.age}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
        </div>
        `;
        console.log(card);
    }

    petSection.innerHTML=card;
}
function displayInfo(){
    document.getelementByID("info").innerHTML="You have " + petSalon.pets.length + "pets in the salon.";
}