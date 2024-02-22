//importando la funcion para mostrar datos
import { displayData } from "./dataDisplay.js";

//elemento para mostrar error en el usuario
const errName = document.createElement('p');
// validacion en evento submit para los datos del usario
let countID = 0;
export const sendData = () => document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
     // validar errores variables de control
     const name = document.getElementById('fname').value;
     const lastName = document.getElementById('lname').value;
     const age = document.getElementById('age').value;
     
     const formName = document.getElementById('labelName');
     const formLastName = document.getElementById('labelLastName');
     const ageValidate = document.getElementById('labelAge');
     
     const errHandler = ageValidate.appendChild(errName);
     const errRemove = ageValidate.removeChild(errName);
 
     if(name.length < 4 || name.length > 12){
         errName.classList.add('error');
         errName.innerHTML = 'Name not valid';
         formName.appendChild(errName);
         return
     }else if(lastName.length < 4 || lastName.length >12){
         errName.classList.add('error');
         errName.innerHTML = 'Last Name not valid';
         formLastName.appendChild(errName);         
         return
     }
    const noNumbers = /[0-9]/

    if(noNumbers.test(name)){
        errName.classList.add('error');
        errName.innerHTML = 'No Numbers Allowed';
        formName.appendChild(errName);
        return

    } else if(noNumbers.test(lastName)) {
        errName.classList.add('error');
        errName.innerHTML = 'No Numbers Allowed';
        formLastName.appendChild(errName);
        return
    }else if(!age) {
        errName.classList.add('error');
        errName.innerHTML = 'Age is required';
        errHandler
        return
    }else if(errHandler) {
        errRemove
    }
    const noSpecial = /[^a-zA-Z0-9]/

    if(noSpecial.test(name)){
        errName.classList.add('error');
        errName.innerHTML = 'No Special Characters Allowed';
        formName.appendChild(errName);
        return
    } else if(noSpecial.test(lastName)){
        errName.classList.add('error');
        errName.innerHTML = 'No Special Characters Allowed';
        formLastName.appendChild(errName);
        return
    }else if(!age) {
        errName.classList.add('error');
        errName.innerHTML = 'Age is required';
        errHandler
        return
    }else if(errHandler) {
        errRemove
    }
    
    countID++;
    
    const personData = {
        Id: countID,
        Name: name,
        LastName: lastName,
        Age: age
    }
    displayData(personData);
    
    
    return
})