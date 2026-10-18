import { useState } from "react";
import "./Book.css";

import cholpon from "../../assets/images/cho'lpon.png";
import abdullaqodiriy from "../../assets/images/abdulla-qodiriy.png";
import xamsa from "../../assets/images/xamsa.png";
import chayon from "../../assets/images/mexrobdan-chayon.png";

const books = [
  {
    id: 1,
    title: "Abdulhamid Cho'lpon",
    img: cholpon,
    pdf: "https://jadid.uz/wp-content/uploads/2024/05/abdulhamid-cholpon.-binafsha-2021.pdf",
  },
  {
    id: 2,
    title: "Abdulla Qodiriy",
    img: abdullaqodiriy,
    pdf: "https://n.ziyouz.com/books/uzbek_nasri/Abdulla%20Qodiriy.%20Jinlar%20bazmi%20(hikoyalar).pdf",
  },
  {
    id: 3,
    title: "Xamsa",
    img: xamsa,
    pdf: "/pdf/xamsa.pdf",
  },
  {
    id: 4,
    title: "Mehrobdan chayon",
    img: chayon,
    pdf: "/pdf/mexrobdan-chayon.pdf",
  },
];

export default function Books() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="books-page" id="books-section">
      <div className="container">
        <div className="books-search">
          <input
            type="text"
            placeholder="Kitob nomini qidiring..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Kitob nomini qidirish"
          />

          <button
            type="button"
            className="search-icon"
            aria-label="Qidirish"
          >
            <span />
          </button>
        </div>

        <nav className="books-nav">
          <button
            type="button"
            onClick={() => scrollToSection("darsliklar-section")}
          >
            Darsliklar
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("adabiyotlar-section")}
          >
            Adabiyotlar
          </button>
        </nav>

        <main className="books-content">
          <h1>Yangi kitoblar</h1>
          <div className="books-underline" />

          <div className="books-grid">
            {filteredBooks.map((book) => (
              <a
                className="book-card"
                key={book.id}
                href={book.pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="book-cover"
                  src={book.img}
                  alt={book.title}
                />

                <div className="book-title">{book.title}</div>
              </a>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <p className="no-books">Kitob topilmadi.</p>
          )}
        </main>
      </div>
    </div>
  );
}