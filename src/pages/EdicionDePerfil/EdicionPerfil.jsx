
import styles from "./EdicionPerfil.module.css";

const EditProfile = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        sitioWeb: "",
        especializacion: "",
        avatar: null,
        instagram: "",
        facebook: ""
    });

    const [emailError, setEmailError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            setFormData({ ...formData, avatar: file });
        } else {
            alert("Solo se permiten imágenes JPG o PNG");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simula validación de correo con el backend
        const emailEnUso = await verificarCorreo(formData.correo);
        if (emailEnUso) {
            setEmailError("Este correo ya está en uso");
            return;
        }

        setEmailError("");
        // Aquí iría la lógica para enviar los datos actualizados al backend
        console.log("Perfil actualizado:", formData);
    };

    const verificarCorreo = async (correo) => {
        // Simulación de una llamada al backend
        return false; // Cambiar a true si quieres simular error de correo duplicado
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.titulo}>Editar Perfil</h2>

                <input
                    className={styles.input}
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />

                <input
                    className={styles.input}
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                />
                {emailError && <p className={styles.error}>{emailError}</p>}

                <input
                    className={styles.input}
                    type="text"
                    name="sitioWeb"
                    placeholder="URL de tu sitio web"
                    value={formData.sitioWeb}
                    onChange={handleChange}
                />

                <select
                    className={styles.input}
                    name="especializacion"
                    value={formData.especializacion}
                    onChange={handleChange}
                >
                    <option value="">Selecciona tu especialización</option>
                    <option value="bodas">Bodas</option>
                    <option value="retratos">Retratos</option>
                    <option value="paisajes">Paisajes</option>
                    <option value="productos">Productos</option>
                    <option value="moda">Moda</option>
                </select>

                <label className={styles.label}>Avatar (JPG o PNG)</label>
                <input
                    className={styles.input}
                    type="file"
                    accept="image/jpeg, image/png"
                    onChange={handleFileChange}
                />

                <input
                    className={styles.input}
                    type="text"
                    name="instagram"
                    placeholder="Instagram (URL)"
                    value={formData.instagram}
                    onChange={handleChange}
                />

                <input
                    className={styles.input}
                    type="text"
                    name="facebook"
                    placeholder="Facebook (URL)"
                    value={formData.facebook}
                    onChange={handleChange}
                />

                <button className={styles.button} type="submit">
                    Guardar Cambios
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
