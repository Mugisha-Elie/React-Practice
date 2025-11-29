export const search = async (searchTerm) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srsearch=${searchTerm}`
    const response = await fetch(url);
    const result = await response.json();
    return result.query.search
}

