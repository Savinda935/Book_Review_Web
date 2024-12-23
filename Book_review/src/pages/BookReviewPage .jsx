import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
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
    title: "",
    review: "",
    rating: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviewDetailsVisible, setReviewDetailsVisible] = useState(false); // State to toggle review details visibility
  const navigate = useNavigate(); // Initialize navigate function

  const carouselImages = [images, images1, images2, images3, images4, images5];

  // Handle carousel slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [carouselImages.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, review, rating } = formData;
    if (!title || !review || !rating) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const submissionData = { ...formData };

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:8082/Booking/add", submissionData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setMessage(response.data.message || "Review submitted successfully.");
        setFormData({
          title: "",
          review: "",
          rating: "",
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

  const toggleReviewDetails = () => {
    setReviewDetailsVisible(!reviewDetailsVisible); // Toggle visibility of the review details
  };

  // Navigate to Review Details page
  const handleReviewDetails = () => {
    const reviewId = 123; // Replace with actual review ID
    navigate(`/reviewdetails/${reviewId}`); // Navigate to /reviewdetails/:id
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f7fa", padding: "20px" }}>
      <Header />

      {/* Carousel Section */}

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
          {/* Book Information Section */}
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
          

          {/* Book Review Form Section */}
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
                  name="title"
                  value={formData.title}
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
                <label style={{ display: "block", fontSize: "1.1rem", marginBottom: "8px", color: "#333" }}>Review</label>
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
                }}
              >
                {message}
              </div>
            )}
            

            {/* Review Details Button */}
            <button
              onClick={handleReviewDetails} // Trigger navigation to the review details page
              style={{
                marginTop: "20px",
                padding: "10px 15px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              View Review Details
            </button>

            {/* Review Details Section */}
            {reviewDetailsVisible && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "10px",
                  backgroundColor: "#f0f8ff",
                  borderRadius: "6px",
                }}
              >
                {/* Review details content */}
              </div>
            )}
          </div>
        </section>
        <section style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '10px' }}>
  <h1 style={{ fontSize: '2.5rem', color: '#4b4b4b', marginBottom: '20px' }}>IMPOSSIBLE CREATURES</h1>
  <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '20px', fontWeight: 'bold' }}>
    From the <em style={{ color: '#6c757d' }}>Impossible Creatures</em> series, Vol. 1
  </p>
  <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px' }}>
    by <strong>Katherine Rundell</strong>; illustrated by <strong>Ashley Mackenzie</strong> ‧
    <span style={{ color: '#ff5722', fontWeight: 'bold' }}>RELEASE DATE: Sept. 10, 2024</span>
  </p>
  <h2 style={{ fontSize: '1.8rem', color: '#4b4b4b', marginBottom: '20px' }}>An epic fantasy with timeless themes and unforgettable characters.</h2>
  <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '20px' }}>
    Two young people save the world and all the magic in it in this series opener.
  </p>
  <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px' }}>
    When tall, dark-haired, white-skinned <strong>Christopher Forrester</strong> goes to stay with his grandfather in Scotland,
    he ventures to the top of a forbidden hill and discovers astonishing magical creatures.
    His grandfather explains that Christopher’s family are guardians of the “way through” to the Archipelago,
    where the Glimourie Tree grows—the source of glimourie, or the world’s magic.
    <strong>Black-haired, olive-skinned Mal Arvorian</strong>, a girl from the Archipelago, is being pursued by a murderer,
    and she asks Christopher for help, launching them both on a wild, dangerous journey to discover why the glimourie is disappearing
    and how to stop it.
  </p>
  <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px' }}>
    Together with a part-nereid woman, a ratatoska, a dragon, and a Berserker, they face an odyssey of dangerous tasks to find the Immortal,
    the only one who can reverse the draining of magic. Like Lyra and Will from Philip Pullman’s <em style={{ color: '#6c757d' }}>His Dark Materials</em>,
    Mal and Christopher sacrifice their innocence for experience, meeting every challenge with depthless courage until they finally reach
    the maze at the heart of it all.
  </p>
  <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px' }}>
    Rundell throws myriad obstacles in her characters’ way, but she gives them tools both tangible (a casapasaran, which always points the way home,
    and the glamry blade, which cuts through anything) and intangible (the desire “to protect something worth protecting” and an “insistence
    that the world is worth loving”).
  </p>
  <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px' }}>
    <strong>Final art not seen.</strong>
  </p>
  <p style={{ fontSize: '1.2rem', color: '#4b4b4b', marginTop: '20px' }}>
    An epic fantasy with timeless themes and unforgettable characters. <span style={{ color: '#007bff' }}>(map, bestiary)</span>
    <span style={{ color: '#007bff' }}>(Fantasy. 10-16)</span>
  </p>
  <p style={{ fontSize: '1.1rem', color: '#555', marginTop: '20px' }}>
    <strong>Pub Date:</strong> Sept. 10, 2024
  </p>
  <p style={{ fontSize: '1.1rem', color: '#555' }}>
    <strong>ISBN:</strong> 9780593809860
  </p>
  <p style={{ fontSize: '1.1rem', color: '#555' }}>
    <strong>Page Count:</strong> 368
  </p>
  <p style={{ fontSize: '1.1rem', color: '#555' }}>
    <strong>Publisher:</strong> Knopf
  </p>
  <p style={{ fontSize: '1.1rem', color: '#555' }}>
    <strong>Review Posted Online:</strong> May 30, 2024
  </p>
  <p style={{ fontSize: '1.1rem', color: '#555' }}>
    <strong>Kirkus Reviews Issue:</strong> July 1, 2024
  </p>
  <p style={{ fontSize: '1.1rem', color: '#555' }}>
    Categories:
    <span style={{ fontWeight: 'bold', color: '#007bff' }}>CHILDREN'S DRAGONS & MYTHICAL CREATURES | </span>
    <span style={{ fontWeight: 'bold', color: '#007bff' }}>CHILDREN'S SCIENCE FICTION & FANTASY | </span>
    <span style={{ fontWeight: 'bold', color: '#007bff' }}>TEENS & YOUNG ADULT SCIENCE FICTION & FANTASY</span>
  </p>
</section>

      </main>

      <Footer />
    </div>
  );
};

export default BookReviewPage;
