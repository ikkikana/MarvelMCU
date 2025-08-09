import { useState, useEffect } from "react";

function CharacterForm({ onSave, characterToEdit, onCancel }) {
    const [formData, setFormData] = useState({
        name: "",
        realName: "",
        image: ""
    });

    useEffect(() => {
        if (characterToEdit) setFormData(characterToEdit);
    }, [characterToEdit]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSave(formData);
        setFormData({ name: "", realName: "", image: "" });
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                margin: "30px auto",
                padding: "20px",
                maxWidth: "400px",
                backgroundColor: "#f9f9f9",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                {characterToEdit ? "Modifier un personnage" : "Ajouter un personnage"}
            </h2>
            <input
                name="name"
                placeholder="Nom de super-héros"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                name="realName"
                placeholder="Nom réel"
                value={formData.realName}
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                name="image"
                placeholder="Lien vers l’image"
                value={formData.image}
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <button type="submit" style={submitBtnStyle}>
                    {characterToEdit ? "Modifier" : " + Ajouter"}
                </button>
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        style={{
                            ...submitBtnStyle,
                            backgroundColor: "#ccc",
                            color: "#333",
                        }}
                    >
                        Annuler
                    </button>
                )}
            </div>
        </form>
    );
}

const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
};

const submitBtnStyle = {
    backgroundColor: "#61dafb",
    color: "black",
    border: "none",
    padding: "10px 16px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
};

export default CharacterForm;
