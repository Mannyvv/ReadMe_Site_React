export const validateUserLoginform = (values) =>{
    const errors = {}
    const {username, password} = values;
    if(!username){
        errors.username = 'Must have Username'
    }

    if(username.length < 6 || username.length > 15){
        errors.username = 'Username must be between 6 and 15 characters'
    }

    if(password.length < 8){
        errors.password = 'Password must be atleast 8 characters'
    }

    return errors
}

