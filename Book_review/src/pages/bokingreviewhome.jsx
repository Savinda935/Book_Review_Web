import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import images from "../images/images.jpg";
import images1 from "../images/images1.jpg";
import images2 from "../images/images2.jpg";
import images3 from "../images/images3.jpg";
import images4 from "../images/images4.jpg";
import images5 from "../images/images5.jpg";

const BookReviewHome = () => {
  const navigate = useNavigate();

  const featuredBooks = [
    { title: "Book Title 1", img: images, path: "/colomboday" },
    { title: "Book Title 2", img: images1, path: "/book2" },
    { title: "Book Title 3", img: images2, path: "/book3" },
    { title: "Book Title 4", img: images3, path: "/book4" },
    { title: "Book Title 5", img: images4, path: "/book5" },
    { title: "Book Title 6", img: images5, path: "/book6" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        color: "#333",
        lineHeight: "1.6",
        margin: "0",
        padding: "0",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Header />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#6c757d",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", marginBottom: "20px" }}>Book Review Hub</h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
          Discover reviews, share your thoughts, and explore your next great read.
        </p>
        <button
          style={{
            backgroundColor: "#ffc107",
            color: "#000",
            padding: "15px 30px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Start Exploring
        </button>
      </section>

      {/* Featured Reviews Section */}
      <section
        style={{
          padding: "50px",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", color: "#6c757d", marginBottom: "20px" }}>
          Featured Reviews
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {featuredBooks.map((book, index) => (
            <div
              key={index}
              onClick={() => navigate(book.path)}
              style={{
                width: "20%",
                margin: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                backgroundColor: "#f8f9fa",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"}
            >
              {book.img && (
                <img
                  src={book.img}
                  alt={book.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "15px",
                  }}
                />
              )}
              <h3 style={{ color: "#6c757d" }}>{book.title}</h3>
              <p style={{ color: "#666" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore what makes this book special.
              </p>
              <button
                style={{
                  backgroundColor: "#6c757d",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section
        style={{
          padding: "50px",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", color: "#6c757d", marginBottom: "20px" }}>
          Join Our Community
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "30px" }}>
          Be a part of a vibrant community of book enthusiasts. Share your reviews and discover your next favorite book.
        </p>
        <button
          style={{
            backgroundColor: "#ffc107",
            color: "#000",
            padding: "15px 30px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Join Now
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default BookReviewHome;