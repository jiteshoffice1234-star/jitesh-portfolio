import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import GalleryCollections from "./Components/GalleryCollections";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* HOME PAGE → WITH MAIN HEADER */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />

        {/* GALLERY COLLECTIONS → WITHOUT MAIN HEADER */}
        <Route
          path="/gallery/collections"
          element={<GalleryCollections />}
        />

        {/* 404 PAGE → CATCH ALL UNMATCHED ROUTES */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;