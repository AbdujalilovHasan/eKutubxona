import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Books from "./components/books/Books";
import Marifat from "./components/marifat/Marifat";
import Darslik from "./components/darsliklar/Darslik";
import Namoyondalar from "./components/namoyondalar/Namoyondalar";
import Adabiyotlar from "./components/adabiyotlar/Adabiyotlar";
import NewBooks from "./components/newbooks.jsx/NewBooks";
import Footer from "./components/footer/Footer";
import NotFoundPage from "./pages/NotFoundPage";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Books />
      <Marifat />

      <div id="darsliklar-section">
        <Darslik />
      </div>

      <Namoyondalar />

      <div id="adabiyotlar-section">
        <Adabiyotlar />
      </div>

      <NewBooks />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;