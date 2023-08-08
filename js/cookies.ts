/**
 * Set cookie.
 * @param name 
 * @param value 
 */
export const setCookie = (name: string, value: string|boolean = true): void => {
	const date = new Date();
	date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
	document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}

/**
 * Get cookie by name.
 * @param name 
 * @returns Cookie name.
 */
export const getCookie = (name: string): string|undefined => {
	return document.cookie.split(';').find(cookie => cookie === name);
}