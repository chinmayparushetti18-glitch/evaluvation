function student() {
    let name = document.getElementById("name").value.trim();
    let USN = document.getElementById("USN").value.trim();
    let email = document.getElementById("loginEmail").value.trim();

    if (name === "" || 
        USN === "" || 
        email === "") 
        {
        alert("Please fill all login/registration fields.");
        return;
    }

    alert("Login / Registration successful!");
}

function eventregistrationForm() {

    let name = document.getElementById("name").value.trim();
    let USN = document.getElementById("usn").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value;
    let event = document.getElementById("event").value;
    let date = document.getElementById("date").value;

    if (
        name === "" ||
        USN === "" ||
        email === "" ||
        department === "" ||
        event === "" ||
        date === ""
    ) {
        alert("please fill all required fields.");
        return;
    }


    document.getElementById("result").innerHTML =
        "<p>" +
        "<b>Registration Successful</b>" +
        "Student Name: " + name + "<br>" +
        "USN: " + USN + "<br>" +
        "Email: " + email + "<br>" +
        "Department: " + department + "<br>" +
        "Event: " + event + "<br>" +
        "Event Date: " + date +
        "</p>";
}