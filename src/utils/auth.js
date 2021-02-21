// import EventBus from '../event-bus';

const TokenKey = 'token';

export function getToken() {
    return localStorage.getItem(TokenKey);
    // return "8bf6b7a0-1af6-420f-9f63-15db00f327d8"
}

export function setToken(token) {
    localStorage.setItem(TokenKey, token);
    localStorage.setItem('lastAuthTimestamp', new Date());
    // EventBus.$emit('loggedIn', token);
    return token;
}

export function removeToken() {
    localStorage.removeItem(TokenKey);
    return location.reload();
}
