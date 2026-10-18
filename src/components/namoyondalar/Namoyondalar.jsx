import "./Namoyondalar.css";

import gafurGulom from "../../assets/images/gafur-gulom.jpg";
import otkirHoshimov from "../../assets/images/otkir-hoshimov.jpg";
import alisherNavoiy from "../../assets/images/alisher-navoiy.png";
import abdullaQodiriy from "../../assets/images/abdulla-qodiriy1.png";

const namoyondalar = [
  {
    id: 1,
    name: "G‘afur G‘ulom",
    birth: "1903-yil 10-may",
    death: "1966-yil 10-iyun",
    image: gafurGulom,
  },
  {
    id: 2,
    name: "O‘tkir Hoshimov",
    birth: "1941-yil 5-avgust",
    death: "2013-yil 24-may",
    image: otkirHoshimov,
  },
  {
    id: 3,
    name: "Alisher Navoiy",
    birth: "1441-yil 9-fevral",
    death: "1501-yil 3-yanvar",
    image: alisherNavoiy,
  },
  {
    id: 4,
    name: "Abdulla Qodiriy",
    birth: "1894-yil 4-oktabr",
    death: "1938-yil 10-aprel",
    image: abdullaQodiriy,
  },
];

function Namoyondalar() {
  return (
    <section className="namoyondalar-section">
      <div className="namoyondalar-container">
        <h2 className="namoyondalar-heading">
          Adabiyot namoyondalari
        </h2>

        <div className="namoyondalar-underline"></div>

        <div className="namoyondalar-grid">
          {namoyondalar.map((shaxs) => (
            <article
              className="namoyondalar-card"
              key={shaxs.id}
            >
              <img
                className="namoyondalar-image"
                src={shaxs.image}
                alt={shaxs.name}
                loading="lazy"
              />

              <h3 className="namoyondalar-name">
                {shaxs.name}
              </h3>

              <p className="namoyondalar-date">
                ({shaxs.birth} — {shaxs.death})
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Namoyondalar;
