let Firstname = document.querySelector(".Firstname")

let LastName = document.querySelector(".LastName")

let userEmail = document.querySelector(".email")

let Password = document.querySelector(".Password")

let Confirmpassword = document.querySelector(".Confirmpassword")

let signup = document.querySelector(".signbtn")

let Password_alert = document.querySelector(".Password_alert")

let passwordicon = document.querySelector("#passwordicon")

let passwordiconsee = document.querySelector(".passwordiconsee")

let user_alert = document.querySelector(".user_alert")


passwordicon.addEventListener("click", (e) => userseepassword(e))

/* ---------------------------------------------------------------------------------------- */
/* When the signup button is clicked the input value is assigned to 
the local database by the POST Method*/

signup.addEventListener("click", (e) => {
    e.preventDefault()
    /* Before storing t the local database this fetch checks whether the user is already 
    in database*/
    fetch(`http://localhost:3000/users/?Email=${userEmail.value}`)
        .then(data => data.json())
        .then(data => {

            /* If the user Database is stored it returns the value of 0 */
            if (data.length == 0) {
                /* This function is used to create the database for users whether the user 
                is new*/

                gettingdata_from_user()
            }
            else {
                /* If the user is already existed it alerts the user*/

                user_alert.classList.add("visible")

                setTimeout(() => {
                    user_alert.classList.remove("visible")
                }, 1000);
            }
        })
})
/* ---------------------------------------------------------------------------------------- */
/* This function checks whether the user inputs the password is equal to confirm password*/
function userseepassword(e) {

    if (Password.type == " password") {
        Password.type = "password"

    }
    else {
        Password.type = "text"
        passwordiconsee.style.display = "block"
        passwordicon.style.display = "none"

    }
}


/* ---------------------------------------------------------------------------------------- */
/*This function used to create the data for the user*/
function gettingdata_from_user() {
    {


        if (Firstname.value && LastName.value && userEmail.value && Password.value && Confirmpassword.value) {

            if (Password.value == Confirmpassword.value) {
                fetch("http://localhost:3000/users", {
                    method: 'POST',
                    body: JSON.stringify({
                        Firstname: `${Firstname.value}`,
                        LastName: `${LastName.value}`,
                        Email: `${userEmail.value}`,
                        Password: `${Password.value}`,
                        Confirmpassword: `${Confirmpassword.value}`
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {

                    })
                    .catch(err => console.log(err))
            }
            else {

                Password_alert.innerText = "please enter the Correct password"

                setTimeout(() => {
                    Password_alert.innerText = ""
                }, 1000);
            }
        }



    }
}

/* ---------------------------------------------------------------------------------------- */