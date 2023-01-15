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
function displayTable(){
        //select the section by id
        let petTable = document.getElementById("guest-table");
        let table="";
        //travel the array
        for(let i=0; i < petSalon.pets.length;i++){
            {
            let pet = petSalon.pets[i];
            //create the template string
            table += `
                <td>
                <td>${pet.name}</td>
                <td>Age: ${pet.age}</td>
                <td>Breed: ${pet.breed}</td>
                <td>Service: ${pet.service}</td>
                <td>Owner Name: ${pet.ownerName}</td>
            <td>Phone Number: ${pet.Phone}</td>
            </tr>
            `;
            }
           
        }
        document.getElementById("guest-table").innerHTML = table;
        //insert the tmp intp the petSections
        petTable.innerHTML=table;
}
displayTable();
{/* <button onclick="deletePet(${pet.id});">Delete</button> */}
                
// function displayPets(){
//     let petTable = document.getElementById("");
//     let table="";

//     for(let i=0; i < petSalon.pets.length;i++){
//         let pet = petSalon.pets[i];
        
//         {
//         table+=`<tr>
//             <td>${pet.name}</td>
//             <td>${pet.age}</td>
//             </tr>
//             `
//         }
        
//     }
//     document.getElementById("guest-table").innerHTML = table;
// }  

// displayPets();

