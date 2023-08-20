export const userError = {
    pattern: {
        value: /[a-zA-Z]/,
        message: 'please type only letters (a-z, A-Z)'
    },
    minLength: {
        value: 3,
        message: 'min 3 characters'
    }
}


export const emailError = {
    pattern: {
        value: /\S+@\S+.\S+/,
        message: 'wrong mail format'
    }
}

export const paswwordError = {
    minLength: {
        value: 8,
        message: 'min 8 characters'
    },
    maxLength: {
        value: 16,
        message: 'max 16 characters'
    }
}
