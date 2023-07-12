const regexValidation = {};

regexValidation.hasSpecialChar = (value) => {
    const regexCode = /[!@#$%^&*]/;
    return !regexCode.test(value);
};

regexValidation.hasUppercase = (value) => {
    const regexCode = /[A-Z]/;
    return !regexCode.test(value);
};

regexValidation.minAndMaxLength = (value, min, max) => {
    const regexCode = new RegExp(`^.{${min},${max}}$`);
    return !regexCode.test(value);
};

regexValidation.onlyLetters = (value) => {
    const regexCode = /^[A-Za-z\s]+$/;
    return !regexCode.test(value);
};


regexValidation.isEmail = (value) => {
    const regexCode = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !regexCode.test(value);
};

regexValidation.isUrl = (value) => {
    const regexCode = /^(ftp|http|https):\/\/[^ "]+$/;
    return !regexCode.test(value);
};

module.exports = regexValidation;