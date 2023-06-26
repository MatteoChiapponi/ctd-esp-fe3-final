const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">
        ingrese su nombre
        <input id="name" type="text" placeholder="ej: Matteo Chiapponi" />
      </label>
      <label htmlFor="email">
        ingrese su email
        <input
          id="email"
          type="email"
          placeholder="ej: mateo.chiapponi@gmail.com"
        />
      </label>
      <button>enviar</button>
    </form>
  );
};

export default Contact;
