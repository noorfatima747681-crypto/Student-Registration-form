let studentsList = [];

document.getElementById('Registration-Form').addEventListener('submit', function(e) {
    e.preventDefault(); 


    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const cPass = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const about = document.getElementById('about').value;

    const gender = document.querySelector('input[name="gender"]:checked');
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(h => h.value);


    const errorSpans = document.querySelectorAll('.error');
    errorSpans.forEach(span => span.innerText = "");

    let isValid = true;


    if (name.trim() === "") {
        document.getElementById('nameError').innerText = "Name is required!";
        isValid = false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        document.getElementById('emailError').innerText = "Enter a valid Email!";
        isValid = false;
    }

    if (pass.length < 6) {
        document.getElementById('passError').innerText = "Password must be 6 characters!";
        isValid = false;
    }

    if (pass !== cPass) {
        document.getElementById('confirmPassError').innerText = "Passwords do not match!";
        isValid = false;
    }

    if (phone.length < 11) {
        document.getElementById('phoneError').innerText = "Enter valid phone number!";
        isValid = false;
    }

    if (!gender) {
        document.getElementById('genderError').innerText = "Please select gender!";
        isValid = false;
    }

    if (course === "") {
        document.getElementById('courseError').innerText = "Please select a course!";
        isValid = false;
    }

    if (isValid) {
        const newStudent = {
            fullName: name,
            email: email,
            phone: phone,
            gender: gender.value,
            course: course,
            hobbies: hobbies.join(", "),
            message: about
        };

        studentsList.push(newStudent);

        displayStudents();

        this.reset();
        alert("Registration Successful!");
    }
});

function displayStudents() {
    const container = document.getElementById('studentContainer');
    container.innerHTML = ""; 

    studentsList.forEach((student, index) => {
        container.innerHTML += `
            <div class="student-card">
                <p><strong>#${index + 1} Name:</strong> ${student.fullName}</p>
                <p><strong>Email:</strong> ${student.email}</p>
                <p><strong>Course:</strong> ${student.course}</p>
                <p><strong>Hobbies:</strong> ${student.hobbies}</p>
                <hr>
            </div>
        `;
    });
}