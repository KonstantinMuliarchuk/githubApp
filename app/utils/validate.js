const regExp = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

export default validate = (value, type) => {
    switch (type) {
        case 'email':
            return regExp.email.test(value.toLowerCase())

        case 'password':
            return value.length < 8 ? false : true

        default:
            break;
    }
}