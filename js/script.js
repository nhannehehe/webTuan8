function validId(id) {
    if (/^BN-\d{5}$/.test(id)) {
        return true;
    }
    return false;
}

function validPass(password) {
    if (/^.{6}$/.test(password)) {
        return true;
    }
    return false;
}

function validDate(date) {
    if (date > new Date().toISOString().substring(0, 10)) {
        return true;
    }
    return false;
}