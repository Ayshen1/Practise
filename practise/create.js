let inputName = document.querySelector("#fname")
let inputTitle = document.querySelector("#tname")
let inputCountry = document.querySelector("#cname")
let submit = document.querySelector("#submit")
const API_URL = 'https://northwind.vercel.app/api/suppliers'
import { postSupplier } from './httprequests.js'


submit.addEventListener("click",async(e)=>{
    e.preventDefault();
    const supplier = {
        contactName:inputName.value,
        contactTitle:inputTitle.value,
        address:{
            country:inputCountry.value
        }
    }
    inputName.value = "";
    inputTitle.value = "";
    inputCountry.value = "";
    await postSupplier(supplier); 
    window.location.href = "http://127.0.0.1:5500/index.html";
})