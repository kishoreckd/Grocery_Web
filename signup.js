let Firstname = document.querySelector(".Firstname")
let LastName = document.querySelector(".LastName")
let userEmail = document.querySelector(".email")
let Password = document.querySelector(".Password")
let Confirmpassword = document.querySelector(".Confirmpassword")
let signup = document.querySelector(".signbtn")
let Password_alert = document.querySelector(".Password_alert")
let passwordicon = document.querySelectorAll("#passwordicon")
let passwordiconsee = document.querySelector(".passwordiconsee")
let user_alert = document.querySelector(".user_alert")



/* ---------------------------------------------------------------------------------------- */
/* eye icon changing functionality*/
for (let i = 0; i < passwordicon.length; i++) {
    passwordicon[i].addEventListener("click", (e) => {

        if (e.target.parentElement.previousElementSibling.type == "password") {
            e.target.className = "fa-solid fa-eye"
            e.target.parentElement.previousElementSibling.type = "text"
        }

        else if (e.target.parentElement.previousElementSibling.type == "text") {
            e.target.className = "fa-solid fa-eye-slash"
            e.target.parentElement.previousElementSibling.type = "password"



        }
    })
}


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
                window.location= window.location.origin+"/home.html"

            }
            else {
                /* If the user is already existed it alerts the user*/
                user_alert.innerText = " Username already exists"
                user_alert.classList.add("visible")

                setTimeout(() => {
                    user_alert.classList.remove("visible")
                }, 1000);
            }
        })
})

/* ---------------------------------------------------------------------------------------- */

/*This checks the password whether the user is entered the valid password*/
let password_check = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

/*This function used to create the data for the user*/
function gettingdata_from_user() {
    {


        if (Firstname.value && LastName.value && userEmail.value && Password.value && Confirmpassword.value) {

            if (Password.value == Confirmpassword.value) {

                if (Password.value.match(password_check)) {
                    fetch("http://localhost:3000/users", {
                        method: 'POST',
                        body: JSON.stringify({
                            Firstname: `${Firstname.value}`,
                            LastName: `${LastName.value}`,
                            Email: `${userEmail.value}`,
                            Password: `${Confirmpassword.value}`
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
                else
                 {
                    Password_alert.innerText = "please enter the Correct password"

                    setTimeout(() => {
                        Password_alert.innerText = ""
                    }, 1000);
                }

            }
            else {

                Password_alert.innerText = "please enter the Correct password"

                setTimeout(() => {
                    Password_alert.innerText = ""
                }, 1000);
            }
        }
        else {

            user_alert.innerText = "Please fill up all the column"
            user_alert.classList.add("visible")

            setTimeout(() => {
                user_alert.classList.remove("visible")
            }, 1000);

        }



    }
}

/* ---------------------------------------------------------------------------------------- */