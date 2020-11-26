export default async function getData(url) {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error('Could not fetch data');
	}

	return await res.json();
}