// document.addEventListener("DOMContentLoaded", () => {
//     const forms = [
//         { formId: 'form1', nameField: 'nameForm1', emailField: 'emailForm1', dateField: 'dateForm1', timeField: 'timeForm1', quantityField: 'numberForm1', nameCookie: 'form_name1', emailCookie: 'form_email1' },
//         { formId: 'form2', nameField: 'nameForm2', emailField: 'emailForm2', dateField: 'dateForm2', timeField: 'timeForm2', quantityField: 'numberForm2', nameCookie: 'form_name2', emailCookie: 'form_email2' },
//         { formId: 'form3', nameField: 'nameForm3', emailField: 'emailForm3', dateField: 'dateForm3', timeField: 'timeForm3', quantityField: 'numberForm3', nameCookie: 'form_name3', emailCookie: 'form_email3' }
//     ];

//     const cookieCountDisplay = document.getElementById('cookieCountDisplay');

//     forms.forEach(formConfig => {
//         const form = document.getElementById(formConfig.formId);

//         form.addEventListener('submit', (event) => {
//             event.preventDefault();

//             const formData = new FormData(form);
//             const name = formData.get('name');
//             const email = formData.get('email');
//             const date = formData.get('date');
//             const time = formData.get('time');
//             const quantity = document.getElementById(formConfig.quantityField).textContent;

//             setCookie(formConfig.nameCookie, name, 7);
//             setCookie(formConfig.emailCookie, email, 7);
//             setCookie(formConfig.dateField, date, 7);
//             setCookie(formConfig.timeField, time, 7);
//             setCookie(formConfig.quantityField, quantity, 7);

//             updateCookieCount();
//             alert('Form data saved in cookies.');
//         });
//     });

//     document.querySelectorAll('.btn-minus').forEach(button => {
//         button.addEventListener('click', (event) => {
//             event.preventDefault();
//             const formId = button.getAttribute('data-form');
//             const countElement = document.getElementById(`number${formId}`);
//             let count = parseInt(countElement.textContent, 10);
//             if (count > 1) {
//                 countElement.textContent = --count;
//             }
//         });
//     });

//     document.querySelectorAll('.btn-add').forEach(button => {
//         button.addEventListener('click', (event) => {
//             event.preventDefault();
//             const formId = button.getAttribute('data-form');
//             const countElement = document.getElementById(`number${formId}`);
//             let count = parseInt(countElement.textContent, 10);
//             countElement.textContent = ++count;
//         });
//     });

// })