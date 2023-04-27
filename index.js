let userEmail= document.querySelector(".email")
// console.log(userEmail);
let Password= document.querySelector(".password")
// console.log(Password);
let submit=document.querySelector(".submit")
let user_alert=document.querySelector(".user_alert")
console.log(user_alert);


submit.addEventListener("click",(e)=>{
    // alert()
    e.preventDefault()
    fetch(`http://localhost:3000/users/?Email=${userEmail.value}&Password=${Password.value}`)
    .then(data => data.json())
    .then(data=>{
        console.log(data);
        if (data.length ==0) {
            // alert()

            user_alert.classList.add("visible")

            setTimeout(() => {
                user_alert.classList.remove("visible")
            }, 1000);
        }
     
    })


})
