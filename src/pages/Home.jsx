import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import CharacterForm from "../components/CharacterForm";
import SearchBar from "../components/SearchBar";

function Home() {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState("");
    const [editingChar, setEditingChar] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch("/data/characters.json")
            .then((res) => res.json())
            .then((data) => setCharacters(data));
    }, []);

    const filtered = characters.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    function handleSave(character) {
        if (character.id) {
            setCharacters((prev) =>
                prev.map((c) => (c.id === character.id ? character : c))
            );
        } else {
            character.id = Date.now();
            setCharacters((prev) => [...prev, character]);
        }
        setEditingChar(null);
        setShowForm(false);
    }

    function handleDelete(id) {
        setCharacters((prev) => prev.filter((c) => c.id !== id));
    }

    function handleEdit(character) {
        setEditingChar(character);
        setShowForm(true);
    }

    return (
        <div>
            <nav
                style={{
                    backgroundColor: "var(--black)",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "10px",
                }}
            >
                <SearchBar onSearch={setSearch} />
                <button
                    className="btn-primary"
                    style={{ padding: "12px 20px", fontSize: "16px" }}
                    onClick={() => {
                        setEditingChar(null);
                        setShowForm(true);
                    }}
                >
                    Ajouter un personnage
                </button>
            </nav>

            {showForm && (
                <CharacterForm
                    characterToEdit={editingChar}
                    onSave={handleSave}
                    onCancel={() => setShowForm(false)}
                />
            )}

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                    marginTop: "30px",
                }}
            >
                {filtered.map((c) => (
                    <CharacterCard
                        key={c.id}
                        character={c}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
