$(document).ready(function () {
    $("#book-btn").click(function () {
        var id = document.getElementById("patientId").value;
        var password = document.getElementById("password").value;
        var date = document.getElementById("pickDate").value;
        var numService = document.querySelectorAll(
            'input[type="checkbox"]:checked'
        );
        var specialist = document.getElementById("specialist").value;
        if (validId(id) && validPass(password) && validDate(date)) {
            var newPatient =
                "<tr><td>" +
                1 +
                "</td><td>" +
                id +
                "</td><td>" +
                password +
                "</td><td>" +
                date +
                "</td><td>" +
                numService.length * 500000 +
                "</td><td>" +
                specialist +
                "</td></tr>";
            document.querySelector(".table").innerHTML += newPatient;
        }
    });

    $("#modal").on("hidden.bs.modal", function () {
        $(this).find("form").trigger("reset");
    });

    function validId(id) {
        if (/^BN-\d{5}$/.test(id)) {
            return true;
        }
        return false;
    }

    function validPass(password) {
        if (/^.{6}$/.test(password)) {
            return true;
        }
        return false;
    }

    function validDate(date) {
        if (date > new Date().toISOString().substring(0, 10)) {
            return true;
        }
        return false;
    }
});