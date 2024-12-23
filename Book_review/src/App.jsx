import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import BookReviewHome from "./pages/bokingreviewhome";
import ColomboDay from "./pages/colomboday";
import BookingDetailsPage from "./pages/bokkingdetais";
import ReviewDetailsPage from "./pages/reviewdetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookReviewHome />} />
        <Route path="/colomboday" element={< ColomboDay  />} />
        <Route path="/bookingdetails/:id" element={<BookingDetailsPage />} />
        <Route path="/reviewdetails/:id" element={<ReviewDetailsPage />} />
     </Routes>
    </Router>
  );
}

export default App;
