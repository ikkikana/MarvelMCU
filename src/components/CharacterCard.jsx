function CharacterCard({ character, onEdit, onDelete }) {
    return (
        <div style={{
            width: "220px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "15px",
            textAlign: "center",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
        }}>
            <img
                src={character.image}
                alt={character.name}
                style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    marginBottom: "10px"
                }}
            />
            <h3 style={{ margin: "5px 0", color: "#20232a" }}>{character.name}</h3>
            <p style={{ color: "#555", fontSize: "14px" }}>{character.realName}</p>
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "10px" }}>
                <button
                    onClick={() => onEdit(character)}
                    style={{
                        backgroundColor: "#ffca28",
                        border: "none",
                        padding: "8px 10px",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                    title="Modifier"
                >
                    ✏️
                </button>
                <button
                    onClick={() => onDelete(character.id)}
                    style={{
                        backgroundColor: "#ef5350",
                        border: "none",
                        padding: "8px 10px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        color: "white"
                    }}
                    title="Supprimer"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
}

export default CharacterCard;
