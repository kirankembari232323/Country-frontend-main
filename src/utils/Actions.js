// Global actions
export let ADD_COUNTRY = 'ADD_COUNTRY';
export let GET_LIST_COUNTRY = 'GET_LIST_COUNTRY';
export let GET_COUNTRY = 'GET_COUNTRY';


/**
 * Add all of your actions above these functions.
 *
 * @export
 * @param {*} action
 * @returns
 */
export function pending(action) {
    return action + "_PENDING";
}

export function fulfilled(action) {
    return action + "_FULFILLED";
}

export function rejected(action) {
    return action + "_REJECTED";
}