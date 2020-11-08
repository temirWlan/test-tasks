async function getData(url) {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error();
	}

	return await response.json();
}

export default getData;