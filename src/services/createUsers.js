export const userError = {
    pattern: {
        value: /[a-zA-Z]/,
        message: 'Please type only letters (a-z, A-Z)'
    },
    minLength: {
        value: 3,
        message: 'Minimum 3 characters'
    }
}


export const emailError = {
    pattern: {
        value: /\S+@\S+.\S+/,
        message: 'Wrong email format'
    }
}

export const paswwordError = {
    minLength: {
        value: 8,
        message: 'Minium 8 characters'
    },
    maxLength: {
        value: 16,
        message: 'Maximum 16 characters'
    }
}
