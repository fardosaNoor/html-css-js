
document.addEventListener("DOMContentLoaded", function(){
    const firstName = document.querySelector(".firstname");
    const lastName = document.querySelector(".lastname");
    const email = document.querySelector(".email");
    const submit = document.querySelector(".submit");
    const alert = document.querySelector(".alert")
    submit.addEventListener("click", function(){
        if (firstName.value == ""||lastName.value == ""|| email.value == ""){
            alert.innerHTML = "FILL ALL THE GAPS! "
            alert.classList.remove(alert-success);
        }
        else{
            alert.innerHTML = "SUBMITTED SUCCESSFULLY";
            alert.classList.remove(alert-danger);
        }
    })

})