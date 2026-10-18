import { useState } from "react";
import "./Darslik.css";

import adabiyot10 from "../../assets/images/adabiyot10.jpg";
import chqbt10 from "../../assets/images/chqbt10.jpg";
import fizika10 from "../../assets/images/fizika10.jpg";
import informatika from "../../assets/images/informatika.jpg";
import jtarix10 from "../../assets/images/jtarix10.jpg";
import davlathuquq10 from "../../assets/images/davlathuquq10.jpg";
import rus10 from "../../assets/images/rus10.jpg";
import adabiyot11 from "../../assets/images/adabiyot11.jpg";
import fizika11 from "../../assets/images/fizika11.jpg";
import jtarix11 from "../../assets/images/jtarix11.jpg";
import otarix11 from "../../assets/images/otarix11.jpg";
import davlathuquq11 from "../../assets/images/davlathuquq11.jpg";

const darslik = [
  {
    id: 1,
    title: "Rus tili",
    img: rus10,
    pdf: "https://old.eduportal.uz/Umumiyfiles/darsliklar/10/rus_tili_10_uzbqardosh.pdf",
    year: "2017",
    sinf: "10",
  },
  {
    id: 2,
    title: "Jahon tarixi",
    img: jtarix10,
    pdf: "https://www.hasanboy.uz/wp-content/uploads/2017/09/jahon_tarixi_10_uzb_0.pdf",
    year: "2017",
    sinf: "10",
  },
  {
    id: 3,
    title: "Informatika va AT",
    img: informatika,
    pdf: "https://www.hasanboy.uz/wp-content/uploads/2017/09/10-sinf-informatika.pdf",
    year: "2017",
    sinf: "10",
  },
  {
    id: 4,
    title: "Fizika",
    img: fizika10,
    pdf: "https://old.eduportal.uz/Umumiyfiles/darsliklar/10/fizika_10_uzb.pdf",
    year: "2017",
    sinf: "10",
  },
  {
    id: 5,
    title: "Davlat va huquq",
    img: davlathuquq10,
    pdf: "https://www.hasanboy.uz/wp-content/uploads/2017/09/davlat_va_huquq-10.pdf",
    year: "2017",
    sinf: "10",
  },
  {
    id: 6,
    title: "Chaqiruvga qadar boshlang‘ich tayyorgarlik",
    img: chqbt10,
    pdf: "https://old.eduportal.uz/Umumiyfiles/darsliklar/10/chaqiruvga_qadar_boshlangich_tayyorgarlik_10_uzb.pdf",
    year: "2017",
    sinf: "10",
  },
  {
    id: 7,
    title: "Adabiyot 1-qism",
    img: adabiyot10,
    pdf: "https://www.hasanboy.uz/wp-content/uploads/2017/09/adabiyot_10_uzb.pdf",
    year: "2017",
    sinf: "10",
  },
  {
    id: 8,
    title: "Adabiyot 2-qism",
    img: adabiyot10,
    pdf: "https://old.eduportal.uz/Umumiyfiles/darsliklar/10/adabiyot_2qism_10_uzb.pdf",
    year: "2017",
    sinf: "10",
  },
  {
    id: 9,
    title: "Adabiyot",
    img: adabiyot11,
    pdf: "https://testmakon.uz/media/library/pdf/11-sinf-adabiyot.pdf",
    year: "2018",
    sinf: "11",
  },
  {
    id: 10,
    title: "Fizika",
    img: fizika11,
    pdf: "https://testmakon.uz/media/library/pdf/11-sinf-fizika.pdf",
    year: "2018",
    sinf: "11",
  },
  {
    id: 11,
    title: "Informatika va AT",
    img: informatika,
    pdf: "https://testmakon.uz/media/library/pdf/11-sinf-informatika.pdf",
    year: "2018",
    sinf: "11",
  },
  {
    id: 12,
    title: "Jahon tarixi",
    img: jtarix11,
    pdf: "https://testmakon.uz/media/library/pdf/11-sinf-jahon-tarixi.pdf",
    year: "2018",
    sinf: "11",
  },
  {
    id: 13,
    title: "O‘zbekiston tarixi",
    img: otarix11,
    pdf: "https://testmakon.uz/media/library/pdf/11-sinf-ozbekiston-tarixi.pdf",
    year: "2018",
    sinf: "11",
  },
  {
    id: 14,
    title: "Davlat va huquq asoslari",
    img: davlathuquq11,
    pdf: "https://testmakon.uz/media/library/pdf/11-sinf-davlat-va-huquq.pdf",
    year: "2018",
    sinf: "11",
  },
  {
    id: 15,
    title: "Rus tili",
    img: rus10,
    pdf: "https://testmakon.uz/media/library/pdf/11-sinf-ozbekiston-tarixi.pdf",
    year: "2018",
    sinf: "11",
  },
  {
    id: 16,
    title: "Adabiyot 2-qism",
    img: adabiyot11,
    pdf: "https://testmakon.uz/media/library/pdf/adabiyot-11-sinf-2-qism.pdf",
    year: "2018",
    sinf: "11",
  },
];

export default function Darslik() {
  const [selectedSinf, setSelectedSinf] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const resetList = () => setShowAll(false);

  const filteredBooks = darslik.filter((book) => {
    const sinfMatch =
      selectedSinf === "all" || book.sinf === selectedSinf;

    const yearMatch =
      selectedYear === "all" || book.year === selectedYear;

    return sinfMatch && yearMatch;
  });

  const visibleBooks = showAll
    ? filteredBooks
    : filteredBooks.slice(0, 8);

  const handleSinf = (sinf) => {
    setSelectedSinf((current) => (current === sinf ? "all" : sinf));
    resetList();
  };

  const handleYear = (year) => {
    setSelectedYear((current) => (current === year ? "all" : year));
    resetList();
  };

  return (
    <div className="textbook-page">
      <div className="textbook-container">
        <main className="textbook-content">
          <h1>Darsliklar</h1>
          <div className="textbook-underline" />

          <nav className="textbook-nav" aria-label="Sinfni tanlash">
            <button
              type="button"
              className={selectedSinf === "10" ? "active" : ""}
              aria-pressed={selectedSinf === "10"}
              onClick={() => handleSinf("10")}
            >
              10-sinf
            </button>

            <button
              type="button"
              className={selectedSinf === "11" ? "active" : ""}
              aria-pressed={selectedSinf === "11"}
              onClick={() => handleSinf("11")}
            >
              11-sinf
            </button>
          </nav>

          <nav className="bookyear-nav" aria-label="Yilni tanlash">
            {["2017", "2018", "2019", "2020"].map((year) => (
              <button
                key={year}
                type="button"
                className={selectedYear === year ? "active" : ""}
                aria-pressed={selectedYear === year}
                onClick={() => handleYear(year)}
              >
                {year}-yil
              </button>
            ))}
          </nav>

          <div className="textbook-results">
            <p className="textbook-count">
              Jami: {filteredBooks.length} ta darslik
            </p>

            <div className="textbook-grid">
              {visibleBooks.map((book) => (
                <a
                  className="textbook-card"
                  key={book.id}
                  href={book.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="textbook-cover"
                    src={book.img}
                    alt={book.title}
                    loading="lazy"
                  />

                  <div className="textbook-title">
                    {book.title}
                  </div>

                  <span className="textbook-meta">
                    {book.sinf}-sinf · {book.year}-yil
                  </span>
                </a>
              ))}
            </div>

            {filteredBooks.length === 0 && (
              <p className="textbook-empty">
                Bu tanlov bo‘yicha darsliklar topilmadi.
              </p>
            )}

            {filteredBooks.length > 8 && (
              <div className="textbook-more">
                <button
                  type="button"
                  className="textbook-more-btn"
                  onClick={() => setShowAll((current) => !current)}
                >
                  {showAll ? "Kamroq ko‘rish" : "Barchasini ko‘rish"}
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}