export async function getCharacters() {
    const res = await fetch('/data/characters.json');
    const data = await res.json();
    return data;
}
