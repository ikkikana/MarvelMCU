
function SearchBar({ onSearch }) {
    return (
        <input
            type="text"
            placeholder="🔍 Rechercher un personnage Marvel..."
            onChange={(e) => onSearch(e.target.value)}
            style={{
                width: "100%",
                maxWidth: "500px",
                padding: "14px 18px",
                fontSize: "18px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                outline: "none",
                backgroundColor: "#fff",
                color: "#333",
                transition: "border-color 0.3s",
            }}
        />
    );
}

export default SearchBar;
