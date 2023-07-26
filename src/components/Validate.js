export const Validate = contact => {
    const errors = {};

    if ((contact.name.length === 0)) {
        errors.name = 'username required';
    } else if (!/^[A-Za-z]+$/.test(contact.name)){
        errors.name = 'username should just have alphabet'
    } else {
        delete errors.name;
    };

    if (!(contact.email)) {  
        errors.email = 'email required';
    } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
        errors.email = 'email is invalid';
    } else {
        delete errors.email;
    };


    if (!(contact.phoneNumber)){
        errors.phoneNumber = 'phoneNumber required'
    } else if (!/^[0-9]+$/.test(contact.phoneNumber)){
        errors.phoneNumber = 'the phone number is should be just numbers';
    } else if(!(contact.phoneNumber.length === 11)) {
        errors.phoneNumber = 'the phone number is not 11 numbers';
    } else {
        delete errors.phoneNumber
    };

    return errors;
};