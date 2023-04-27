let userEmail= document.querySelector(".email")
let Password= document.querySelector(".password")
let submit=document.querySelector(".submit")
let user_alert=document.querySelector(".user_alert")
let passwordicon = document.querySelector("#passwordicon")

/* ---------------------------------------------------------------------------------------- */
/* checking whether the user is old or new*/
submit.addEventListener("click",(e)=>{
    // alert()
    e.preventDefault()
    fetch(`http://localhost:3000/users/?Email=${userEmail.value}&Password=${Password.value}`)
    .then(data => data.json())
    .then(data=>{
        if (data.length ==0) {
            

            user_alert.innerText = "Incorrect username or Password"
            user_alert.classList.add("visible")

            setTimeout(() => {
                user_alert.classList.remove("visible")
            }, 1000);
        }
     
    })


})
/* ---------------------------------------------------------------------------------------- */

/* eye icon changing functionality*/
passwordicon.addEventListener("click", (e) => {

    if (e.target.parentElement.previousElementSibling.type == "password") {
        e.target.className = "fa-solid fa-eye"
        e.target.parentElement.previousElementSibling.type = "text"
    }

    else if (e.target.parentElement.previousElementSibling.type == "text") {
        e.target.className = "fa-solid fa-eye-slash"
        e.target.parentElement.previousElementSibling.type = "password"



    }
})

/* ---------------------------------------------------------------------------------------- */

