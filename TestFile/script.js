document.addEventListener("DOMContentLoaded", () => {
    const forms = [
        { formId: 'form1', dateField: 'dateForm1', timeField: 'timeForm1', quantityField: 'numberForm1', cookieName: 'form1Data' },
        // Add more form configurations as needed
    ];

    const cookieCountDisplay = document.getElementById('cookieCountDisplay');
    const logOutput = document.getElementById('logOutput');

    forms.forEach(formConfig => {
        const form = document.getElementById(formConfig.formId);

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = {
                item1: document.querySelector(`#${formConfig.formId} .modal-sub-head h3:first-of-type`).textContent,
                item2: document.querySelector(`#${formConfig.formId} .modal-sub-head h3:nth-of-type(2)`).textContent,
                price: document.querySelector(`#${formConfig.formId} .modal-sub-head p`).textContent,
                quantity: document.getElementById(formConfig.quantityField).textContent,
                date: document.getElementById(formConfig.dateField).value,
                time: document.getElementById(formConfig.timeField).value
            };

            setCookie(formConfig.cookieName, JSON.stringify(formData), 7);
            updateCookieCount();
            displayLog(`Form data saved in cookies: ${JSON.stringify(formData)}`);
        });
    });

    function displayLog(message) {
        console.log(message); // Still logs to console for debugging
        logOutput.textContent += message + '\n'; // Display log message in HTML element
    }

    function updateCookieCount() {
        const cookieArray = document.cookie.split(';');
        const formCookieCount = cookieArray.filter(cookie => /form\d+Data/.test(cookie.trim().split('=')[0])).length;
        cookieCountDisplay.textContent = `Total number of form cookies: ${formCookieCount}`;
    }

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        const cookieArray = document.cookie.split(';');
        for (let cookie of cookieArray) {
            let [key, value] = cookie.split('=');
            key = key.trim();
            if (key === name) {
                return value ? decodeURIComponent(value.trim()) : "";
            }
        }
        return null;
    }

    // Initial cookie count update on page load
    updateCookieCount();
});
