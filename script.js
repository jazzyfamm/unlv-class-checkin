function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

document.getElementById("classForm").onsubmit = function(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let id = document.getElementById("studentID").value;
    let building = document.getElementById("building").value;
    let classNumber = document.getElementById("classNumber").value;
    let time = document.getElementById("classTime").value;

    document.getElementById("results").textContent =
        "Student Name: " + name +
        " | Student ID: " + id +
        " | Building: " + building +
        " | Class Number: " + classNumber +
        " | Class Start Time: " + time;
};
