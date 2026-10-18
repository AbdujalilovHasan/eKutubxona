import "./NewBooks.css";
import newbook from "../../assets/images/newbook.svg";

function NewBooks() {
  return (
    <section className="newbooks-section">
      <div className="newbooks-row">
        <div className="newbooks-text">
          <h2>
            TEZ ORADA YANGI
            KITOBLAR QO‘SHILADI
          </h2>
        </div>

        <div className="newbooks-illustration">
          <img
            src={newbook}
            alt="Kitoblar va yangi kitoblar belgisi"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default NewBooks;