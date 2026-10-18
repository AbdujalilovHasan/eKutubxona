import "./Adabiyotlar.css";

import ikkieshik from "../../assets/images/ikkieshik.svg";
import dunyoningish from "../../assets/images/dunyoningish.svg";
import otkankunlar from "../../assets/images/otgankunlar.svg";
import jinlarbazmi from "../../assets/images/jinlarbazmi.svg";
import bahorqaytmaydi from "../../assets/images/bahorqaytmaydi.svg";
import abdullaQodiriy from "../../assets/images/abdulla-qodiriy.png";
import alisa from "../../assets/images/alisa.svg";
import ozbekiston from "../../assets/images/ozbekiston.svg";
import jahongirMirzo from "../../assets/images/jaxongirmirzo.svg";
import shumBola from "../../assets/images/shumbola.svg";
import ozbekXalqErtaklari from "../../assets/images/uzbertaklar.svg";
import oltintarvuz from "../../assets/images/oltintarvuz.svg";

const adabiyotlar = [
  { id: 1, title: "Ikki eshik orasi", image: ikkieshik },
  { id: 2, title: "Dunyoning ishlari", image: dunyoningish },
  { id: 3, title: "O‘tkan kunlar", image: otkankunlar },
  { id: 4, title: "Jinlar bazmi", image: jinlarbazmi },
  { id: 5, title: "Bahor qaytmaydi", image: bahorqaytmaydi },
  { id: 6, title: "Abdulla Qodiriy", image: abdullaQodiriy },
  { id: 7, title: "Alisa mo‘jizalar mamlakatida", image: alisa },
  { id: 8, title: "Oltin tarvuz", image: oltintarvuz },
  { id: 9, title: "O‘zbekiston", image: ozbekiston },
  { id: 10, title: "Jahongir Mirzo", image: jahongirMirzo },
  { id: 11, title: "Shum bola", image: shumBola },
  { id: 12, title: "O‘zbek xalq ertaklari", image: ozbekXalqErtaklari },
];

function Adabiyotlar() {
  return (
    <section className="adabiyotlar-section">
      <div className="adabiyotlar-container">
        <h2 className="adabiyotlar-heading">Adabiyotlar</h2>
        <div className="adabiyotlar-underline"></div>

        <div className="adabiyotlar-grid">
          {adabiyotlar.map((kitob) => (
            <article className="adabiyotlar-card" key={kitob.id}>
              <div className="adabiyotlar-cover">
                {kitob.image && (
                  <img
                    src={kitob.image}
                    alt={kitob.title}
                    loading="lazy"
                  />
                )}
              </div>

              <h3 className="adabiyotlar-title">{kitob.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Adabiyotlar;