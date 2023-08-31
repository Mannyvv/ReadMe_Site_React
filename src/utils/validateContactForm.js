

export const validateContactForm = (values) => {
    const errors = {};
    const {firstName, lastName,phoneNum,email} = values;

    // Validation for First Name
    if (!firstName) {
        errors.firstName = 'Required';
    }else if(firstName.length < 2){
        errors.firstName = 'Must be at least 2 characters';
    }else if(firstName.length > 15){
        errors.firstName = 'Must be 15 characters or less';
    };

    // Validation for Last Name
    if (!lastName) {
        errors.lastName = 'Required';
    }else if(lastName.length < 2){
        errors.lastName = 'Must be at least 2 characters';
    }else if(lastName.length > 15){
        errors.lastName = 'Must be 15 characters or less';
    };

    // Validation for phone number
    const reg = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneNum){
        errors.phoneNum = ""
    }else if (!reg.test(phoneNum)) {
        errors.phoneNum = 'The phone number should be of format => 555-555-5555.';
    }

    if (!email){
        errors.email = 'Required'
    }else if (!email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;

};