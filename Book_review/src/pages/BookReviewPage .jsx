// Import necessary dependencies
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import images from "../images/images.jpg";
import images1 from "../images/images1.jpg";
import images2 from "../images/images2.jpg";
import images3 from "../images/images3.jpg";
import images4 from "../images/images4.jpg";
import images5 from "../images/images5.jpg";

const BookReviewPage = () => {
  const [formData, setFormData] = useState({
    bookTitle: "",
    author: "",
    review: "",
    rating: "",
    dateAdded: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const carouselImages = [images, images1, images2, images3, images4, images5];

  // Handle carousel slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { bookTitle, author, review, rating } = formData;
    if (!bookTitle || !author || !review || !rating) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const submissionData = { ...formData };

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:8083/bookreview/add", submissionData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setMessage(response.data.message || "Review submitted successfully.");
        setFormData({
          bookTitle: "",
          author: "",
          review: "",
          rating: "",
          dateAdded: "",
        });
      } else {
        setMessage(response.data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReviewDetails = () => {
    const reviewId = 123; // Replace with actual review ID
    navigate(`/reviewdetails/${reviewId}`);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f7fa", padding: "20px" }}>
      <Header />

      <main style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "50px" }}>
        <section style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{ fontSize: "3rem", color: "#333", fontWeight: "600" }}>Book Review</h1>
          <p style={{ fontSize: "1.2rem", color: "#555" }}>Share your thoughts on the book of your choice</p>
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              width: "45%",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "15px" }}>Book Information</h2>
            <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "20px" }}>
              The book "Don Quixote" by Miguel de Cervantes is one of the most influential works in Western literature.
            </p>
            <img
              src={images}
              alt="Don Quixote"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              width: "45%",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "20px" }}>Write Your Review</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "1.1rem", marginBottom: "8px", color: "#333" }}>
                  Book Title
                </label>
                <input
                  type="text"
                  name="bookTitle"
                  value={formData.bookTitle}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "1rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                  }}
                  placeholder="Enter the title of the book"
                  required
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "1.1rem", marginBottom: "8px", color: "#333" }}>
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "1rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                  }}
                  placeholder="Enter the author's name"
                  required
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "1.1rem", marginBottom: "8px", color: "#333" }}>
                  Review
                </label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "1rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    height: "150px",
                    resize: "none",
                  }}
                  placeholder="Write your review here"
                  required
                ></textarea>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "1.1rem", marginBottom: "8px", color: "#333" }}>
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "1rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                  }}
                  min="1"
                  max="5"
                  placeholder="Rate the book"
                  required
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  fontSize: "1.2rem",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </button>
            </form>

            {message && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "10px",
                  textAlign: "center",
                  borderRadius: "6px",
                  backgroundColor: message.includes("successfully") ? "#d4edda" : "#f8d7da",
                  color: message.includes("successfully") ? "#155724" : "#721c24",
                  border: "1px solid",
                  borderColor: message.includes("successfully") ? "#c3e6cb" : "#f5c6cb",
                }}
              >
                {message}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookReviewPage;
