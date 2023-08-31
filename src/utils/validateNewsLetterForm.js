

export const validateNewsLetterForm = (values) => {
    const errors = {};
    const { email, fullName, zipCode } = values;

    // https://saturncloud.io/blog/how-can-i-validate-an-email-address-using-a-regular-expression/
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    const isValidEmail = (email) => {
        return emailRegex.test(email);
    };

    if (!email) {
        errors.email = 'Required'
    } else if (!isValidEmail(email)) {
        errors.email = 'Please Enter a Valid Email';
    }


    if (fullName.length < 2 && fullName.length > 0) {
        errors.fullName = 'Must be at least 2 characters';
    } else if (fullName.length > 15) {
        errors.fullName = 'Must be 15 characters or less';
    };

    if (zipCode && zipCode.length < 5) {
        errors.zipCode = 'Zipcode must be at minimum 5 digits'
    }



    return errors;

};