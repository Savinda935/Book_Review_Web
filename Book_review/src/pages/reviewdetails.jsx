import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; // Updated for v6
import Header from "../components/Header";
import Footer from "../components/Footer";
import images from "../images/images.jpg"; // Import the image

const ReviewDetailsPage = () => {
  const { id } = useParams(); // Getting the review ID from the URL parameters
  const navigate = useNavigate(); // Updated to use useNavigate
  
  const [review, setReview] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await fetch("http://localhost:8083/Booking/");
        
        if (!response.ok) {
          throw new Error("Error fetching review data");
        }
  
        // Parse the JSON response
        const data = await response.json();
  
        console.log("API Response:", data); // Log the response data
        setReview(data);  // Set review data into state
        setIsLoading(false); // Update loading state
      } catch (error) {
        console.error("Error fetching review data:", error);
        setMessage("Error fetching review data.");
        setIsLoading(false); // Update loading state even if there's an error
      }
    };
  
    fetchReviewData();
  }, []);
  

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this review?");
    if (confirmDelete) {
      try {
        // Make the delete request to delete all reviews or specific one based on the condition (without ID)
        const response = await axios.delete("http://localhost:8083/Booking/delete");
        if (response.status === 200) {
          setMessage("All reviews deleted successfully.");
          // Fetch the updated reviews list if necessary
          setReview(null);  // Clear the review data if deleting all reviews
        } else {
          setMessage("Failed to delete the review.");
        }
      } catch (error) {
        setMessage("An error occurred while deleting the review.");
      }
    }
  };
  

  const handleEdit = () => {
    // Navigate to the edit page
    navigate(`/edit-review/${id}`); // Updated to use navigate()
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!review) {
    return <div>No review found!</div>;
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f7fa", padding: "20px" }}>
      <Header />
      <main style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "50px" }}>
        <section style={{ textAlign: "center", marginBottom: "50px", animation: "fadeIn 2s ease-out" }}>
          <h1 style={{ fontSize: "3rem", color: "#333", fontWeight: "600" }}>Review Details</h1>
        </section>

        <section style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "20px", marginBottom: "50px" }}>
          {/* Review Information Section */}
          <div style={{ width: "45%", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "15px" }}>Book Information</h2>
            <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "20px" }}>
              <strong>Title:</strong> {review.title}
            </p>
            <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "20px" }}>
              <strong>Review:</strong> {review.review}
            </p>
            <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "20px" }}>
              <strong>Rating:</strong> {review.rating} / 5
            </p>
            <img
              src={images} // You can use a book cover image or default image
              alt={review.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                objectFit: "cover",
              }}
            />
          </div>
        </section>

        {/* Update and Delete Actions */}
        <section style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={handleEdit}
            style={{
              padding: "12px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              fontSize: "1.2rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginRight: "20px",
            }}
          >
            Edit Review
          </button>
          <button
            onClick={handleDelete}
            style={{
              padding: "12px 20px",
              backgroundColor: "#d9534f",
              color: "#fff",
              fontSize: "1.2rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Delete Review
          </button>
        </section>

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
