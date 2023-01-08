function displayPetCards(){
    let petSection = document.getElementById("pets");
    let card="";
    
    for(let i=0; i < petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card += `
        <div id=${pet.id} class="petCard">
            <h4>${pet.name}</h4>
            <p>Age: ${pet.age}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Owner Name: ${pet.ownerName}</P>
            <p>Phone Number: ${pet.Phone}</P>
            <button onclick="deletePet(${pet.id});">Delete</button>
        </div>
        `;
        console.log(card);
    }

    petSection.innerHTML=card;
}
// function displayTable(){
//         //select the section by id
//         let petSection = document.getElementById("pets");
//         let table="";
//         //travel the array
//         for(let i=0; i < petSalon.pets.length;i++){
//             let pet = petSalon.pets[i];
//             //create the template string
//             table += `
//             <table id=${pet.id} class="petTable">
//                 <h4>${pet.name}</h4>
//                 <td>Age: ${pet.age}</td>
//                 <td>Breed: ${pet.breed}</td>
//                 <td>Service: ${pet.service}</td>
//                 <button onclick="deletePet(${pet.id});">Delete</button>
//             </table>
//             `;
//             console.log(table);
//         }
    
//         //insert the tmp intp the petSections
//         petSection.innerHTML=table;
// }


function displayInfo(){
    document.getelementByID("info").innerHTML="You have " + petSalon.pets.length + "pets in the salon.";
}