import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const styles = {
    page: {
      minHeight: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      boxSizing: "border-box",
      background: "#f4f7ff",
      fontFamily: "Montserrat, sans-serif",
    },
    card: {
      width: "100%",
      maxWidth: "600px",
      padding: "45px 25px",
      textAlign: "center",
      background: "#fff",
      border: "1px solid #e1e7f2",
      borderRadius: "20px",
      boxShadow: "0 12px 35px rgba(48, 65, 107, 0.09)",
      boxSizing: "border-box",
    },
    number: {
      margin: 0,
      color: "#30416b",
      fontSize: "clamp(80px, 18vw, 140px)",
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: "-5px",
    },
    title: {
      margin: "20px 0 12px",
      color: "#202b45",
      fontSize: "clamp(22px, 4vw, 30px)",
      fontWeight: 700,
    },
    description: {
      maxWidth: "420px",
      margin: "0 auto",
      color: "#6b7280",
      fontSize: "15px",
      lineHeight: 1.8,
    },
    icon: {
      marginTop: "25px",
      fontSize: "48px",
      color: "#30416b",
    },
    button: {
      marginTop: "28px",
      padding: "13px 26px",
      border: "none",
      borderRadius: "8px",
      background: "#30416b",
      color: "#fff",
      fontSize: "15px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "background 0.2s ease",
    },
  };

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1 style={styles.number}>404</h1>

        <h2 style={styles.title}>
          Sahifa topilmadi
        </h2>

        <p style={styles.description}>
          Siz izlayotgan sahifa hozircha mavjud emas yoki
          ushbu bo‘lim hali ishga tushirilmagan.
          Elektron kutubxonamizning boshqa bo‘limlaridan
          foydalanishingiz mumkin.
        </p>

        <div style={styles.icon} aria-hidden="true">
          <i className="bi bi-journal-bookmark-fill" />
        </div>

        <button
          type="button"
          style={styles.button}
          onClick={() => navigate("/")}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#243352";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#30416b";
          }}
        >
          ← Bosh sahifaga qaytish
        </button>
      </section>
    </main>
  );
}

export default NotFoundPage;