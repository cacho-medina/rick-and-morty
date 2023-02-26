const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errors = {};

const validateInput = (input) => {
    if (!regexEmail.test(input.username))
        errors.username = "Ingrese un mail correcto regex";
    if (!input.username) errors.username = "Complete el campo";
    if (input.username.length > 35)
        errors.username = "Caracteres maximos permitidos 35";
    if (input.password.length < 6 || input.password.length > 10)
        errors.password = "Ingrese una contraseña valida";
    if (!input.password.match(/\d/))
        errors.password = "Ingrese una contraseña valida regex";
    return errors;
};

export default validateInput;
