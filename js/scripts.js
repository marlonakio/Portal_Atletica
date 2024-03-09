document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitButton = document.getElementById("submitButton");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");
    let firstSubmission = true;
    function checkFields() {
        if (nameInput.value !== "" && emailInput.value !== "" && phoneInput.value !== "" && messageInput.value !== "") {
            submitButton.classList.remove("disabled");
        } else {
            submitButton.classList.add("disabled");
        }
    }
    function formatPhoneNumber() {
        let phoneNumber = phoneInput.value.replace(/\D/g, "");
        if (phoneNumber.length > 0) {
            phoneNumber = phoneNumber.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
        }
        phoneInput.value = phoneNumber;
        checkFields();
    }
    form.addEventListener("input", function (e) {
        if (e.target === phoneInput) {
            formatPhoneNumber();
        }
        checkFields();
    });
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        setTimeout(function () {
            const success = firstSubmission;
            toastr.options = {
                "closeButton": true,
                "progressBar": true,
                "positionClass": "toast-top-center",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };
            if (success) {
                toastr.success("Mensagem enviada!");
            } else {
                toastr.error("Aguarde uma resposta!");
            }
            firstSubmission = false;
        }, 500);
    });
});