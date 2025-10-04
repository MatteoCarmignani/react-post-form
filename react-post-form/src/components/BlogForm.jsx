import { useState } from "react";

const BlogForm = () => {

  const [formData, setFormData] = useState({
    authorName: "",
    authorSurname: "",
    title: "",
    public: false,
    body: "",
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // invio form
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((res) => console.log("Dati inviati:", res.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="principalContainer">
      <h2>Dati dell'autore</h2>
      <form onSubmit={handleSubmit}>
        {/* Nome autore */}
        <div>
          <label>Nome</label>
          <input
            type="text"
            name="authorName"
            className="form-control"
            required
            value={formData.authorName}
            onChange={handleChange}
          />
        </div>

        {/* Cognome autore */}
        <div>
          <label>Cognome</label>
          <input
            type="text"
            name="authorSurname"
            className="form-control"
            required
            value={formData.authorSurname}
            onChange={handleChange}
          />
        </div>

        {/* Titolo */}
        <div>
          <label>Titolo</label>
          <input
            type="text"
            name="title"
            className="form-control"
            required
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Testo del post</label>
          <textarea
            name="body"
            className="form-control"
            rows="4"
            required
            value={formData.body}
            onChange={handleChange}
          />
        </div>


        <div>
          <input
            type="checkbox"
            name="public"
            id="public"
            className="form-check-input"
            checked={formData.public}
            onChange={handleChange}
          />
          <label htmlFor="public">
            Rendi pubblico il post
          </label>
        </div>

        
        <button type="submit">
          Invia richiesta
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
