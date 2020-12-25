export const get = key => JSON.parse(localStorage.getItem(key));
export const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const remove = key => localStorage.removeItem(key);
export const update = (key, value) => {
	remove(key);
	set(key, value);
};
