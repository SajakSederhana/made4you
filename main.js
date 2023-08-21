document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.querySelector(".btn");
    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah form dikirim secara default

        var usernameInput = document.getElementById("username");
        var passwordInput = document.getElementById("password");

        var username = usernameInput.value;
        var password = passwordInput.value;

        var allowedPage = validateUser(username, password);

        var popup = document.getElementById("popup");
        var closePopup = document.querySelector(".close-popup");

        closePopup.addEventListener("click", function () {
            popup.style.display = "none";
        });

        if (allowedPage) {
            // Pengguna berhasil masuk, arahkan ke halaman yang diizinkan
            window.location.href = allowedPage;
        } else {
            var popup = document.getElementById("popup");
            popup.style.display = "block";

            usernameInput.value = "";
            passwordInput.value = "";
        }
    });

    function validateUser(username, password) {
        // Gantikan dengan logika validasi Anda
        var users = [
            { username: "dwynbla", password: "bocil1", allowedPage: "/dwynbla/dwy.html" },
            { username: "user2", password: "pass2", allowedPage: "b.html" },
            // ... tambahkan lebih banyak pengguna
        ];

        for (var i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                return users[i].allowedPage;
            }
        }
        return null;
    }
});