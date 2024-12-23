import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import BookReviewHome from "./pages/bokingreviewhome";
import ColomboDay from "./pages/colomboday";
import BookingDetailsPage from "./pages/bokkingdetais";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookReviewHome />} />
        <Route path="/colomboday" element={< ColomboDay  />} />
        <Route path="/bookingdetails/:id" element={<BookingDetailsPage />} />
     </Routes>
    </Router>
  );
}

export default App;
