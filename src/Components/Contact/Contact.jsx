import { useState } from "react";
import { validarEmail } from "../utils/utils";
import "./contact.css";

const Contact = () => {
  const [formValue, setFormValue] = useState({ nombre: "", email: "" });
  const [error, setError] = useState({
    name: false,
    email: false,
    form: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error.email && !error.name) {
      setError({ ...error, form: true });
      setTimeout(() => {
        setError({ ...error, form: false });
        e.target.reset();
      }, 2000);
    }
  };

  function handleChange(e) {
    const inputTarget = e.target.id;
    const inputValue = e.target.value;

    //nombre tiene que tener mas de 5 caracteres
    if (inputTarget === "name") {
      if (inputValue.length <= 5) {
        setError({ ...error, name: true });
      } else {
        setFormValue({ ...formValue, nombre: inputValue });
        setError({ ...error, name: false });
      }
    } else {
      if (!validarEmail(inputValue)) {
        setError({ ...error, email: true });
      } else {
        setFormValue({ ...formValue, email: inputValue });
        setError({ ...error, email: false });
      }
    }

    //     //email debe tener el formato
  }

  return (
    <main className="contact-container">
      <div className="form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>Contacto</h3>
          <label htmlFor="name" className="form-label">
            ingrese su nombre
            <input
              onChange={(e) => handleChange(e)}
              id="name"
              type="text"
              placeholder="ej: Matteo Chiapponi"
            />
            {error.name ? (
              <span className="error">
                <br />
                el nombre debe tener mas 5 caracteres
              </span>
            ) : undefined}
          </label>
          <label htmlFor="email" className="form-label">
            ingrese su email
            <input
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="ej: mateo@gmail.com"
            />
            {error.email ? (
              <span className="error">
                <br />
                formato de correo erroneo
              </span>
            ) : undefined}
          </label>
          <button className="hero-btn">enviar</button>
        </form>
        {error.form ? (
          <h2>
            Gracias {formValue.nombre}, te contactaremos cuando antes vía mail
          </h2>
        ) : undefined}
      </div>
    </main>
  );
};

export default Contact;
