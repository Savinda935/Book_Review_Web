import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReviewDetailsPage = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // State for handling update
  const [updatedBooking, setUpdatedBooking] = useState(null);
  const [bookingStatus, setBookingStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await axios.get("http://localhost:8083/bookreview");
        console.log("Fetched reviews:", response.data); // Debugging log
        setReviews(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching review data:", error);
        setMessage("Error fetching review data.");
        setIsLoading(false);
      }
    };

    fetchReviewData();
  }, []);

  const handleDelete = async (id) => {
    console.log("Attempting to delete review with ID:", id); // Debugging log
    const confirmDelete = window.confirm("Are you sure you want to delete this review?");
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:8083/bookreview/delete/${id}`);
        console.log("Delete response:", response); // Debugging log
        if (response.status === 200) {
          setMessage("Review deleted successfully.");
          setReviews(reviews.filter((review) => review._id !== id));
        } else {
          setMessage("Failed to delete the review.");
        }
      } catch (error) {
        console.error("Error deleting review:", error.response ? error.response.data : error.message);
        setMessage("An error occurred while deleting the review.");
      }
    }
  };

  const handleUpdateSubmit = async (id) => {
    try {
      const response = await fetch(`http://localhost:8083/bookreview/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBooking),
      });

      if (response.ok) {
        setBookingStatus("Booking updated successfully!");
        setTimeout(() => setBookingStatus(""), 3000);
        setUpdatedBooking(null);
        setShowPopup(true);
      } else {
        setBookingStatus("Failed to update booking.");
      }
    } catch (error) {
      setBookingStatus("An error occurred while updating the booking.");
      console.error("Error:", error);
    }
  };

  const handleEdit = (id) => {
    const reviewToEdit = reviews.find((review) => review._id === id);
    setUpdatedBooking(reviewToEdit);
    navigate(`/edit-review/${id}`);  // You can adjust the URL based on your route setup
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f7fa", padding: "20px" }}>
      <Header />
      <main style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "50px" }}>
        <section style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{ fontSize: "3rem", color: "#333", fontWeight: "600" }}>Review Details</h1>
        </section>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <thead style={{ backgroundColor: "#007bff", color: "#fff" }}>
            <tr>
              <th style={{ padding: "12px", textAlign: "left" }}>Title</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Review</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Rating</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px" }}>{review.bookTitle}</td>
                <td style={{ padding: "12px" }}>{review.review}</td>
                <td style={{ padding: "12px", textAlign: "center" }}>{review.rating} / 5</td>
                <td style={{ padding: "12px", textAlign: "center" }}>
                  <button
                    onClick={() => handleEdit(review._id)}
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "#28a745",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(review._id)}
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "#d9534f",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {message && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              textAlign: "center",
              borderRadius: "6px",
              backgroundColor: message.includes("successfully") ? "#d4edda" : "#f8d7da",
              color: message.includes("successfully") ? "#155724" : "#721c24",
              border: message.includes("successfully") ? "1px solid #c3e6cb" : "1px solid #f5c6cb",
            }}
          >
            {message}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ReviewDetailsPage;
