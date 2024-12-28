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
import bc from "../images/bc.jpg";
import k1 from "../images/k1.jpg";
import k2 from "../images/k2.jpg";
import k3 from "../images/k3.jpg";
import k4 from "../images/k4.jpeg";
import bc1 from "../images/bc1.jpg";
import discovery from "../images/discovery.jpg";
import goodreads from "../images/goodreads.jpg";
import librarythink from "../images/librarythink.jpg";








const BookReviewHome = () => {
  const navigate = useNavigate();

  const featuredBooks = [
    { title: "Book Title 1", img: images, path: "/colomboday" },
    { title: "Book Title 2", img: images1, path: "/book2" },
    { title: "Book Title 3", img: images2, path: "/book3" },
    { title: "Book Title 4", img: images3, path: "/book4" },
    { title: "Book Title 5", img: images4, path: "/book5" },
    { title: "Book Title 6", img: images5, path: "/book6" },
    { title: "Book Title 6", img: images5, path: "/book6" },
    { title: "Book Title 6", img: images5, path: "/book6" },
  ];
  // Quotes data
const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr."
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  }
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
    fontFamily: "Lora, serif",
    fontWeight: 700,
    lineHeight: 1.285,
    fontSize: "1.5rem",
  }}
>
  <div
    style={{
      backgroundImage: `url(${bc})`, // Replace `bc` with your background image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "500px",
      padding: "50px 20px",
      color: "#fff",
      textAlign: "center",
    }}
  >
    <h1
      style={{
        fontSize: "70px", // Matches the requested font size
        marginBottom: "20px",
        color: "black",
      }}
    >
      Book Review Hub
    </h1>
    <p
      style={{
        fontSize: "45px", // Matches the requested font size
        marginBottom: "30px",
        color: "black",
      }}
    >
      Discover reviews, share your thoughts, and explore your next great read.
    </p>
  </div>
  <button
    style={{
      backgroundColor: "#ffc107",
      color: "#000",
      padding: "15px 30px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontFamily: "Lora, serif", // Ensures consistency in font usage
      fontWeight: 700,
      lineHeight: 1.285,
      marginBottom  : "20px"
    }}
  >
    Start Exploring
  </button>
</section>


<section
  style={{
    padding: "50px 20px",
    backgroundColor: "#f9f9f9",
    fontFamily: "'Georgia', serif",
    lineHeight: "1.8",
    color: "#333",
  }}
>
  <h2
    style={{
      fontSize: "2.5rem",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "30px",
      color: "#444",
    }}
  >
    The Best Book Review Sites For Enthusiastic Readers
  </h2>
  <p style={{ fontSize: "1.2rem", marginBottom: "20px", textAlign: "justify" }}>
    Book lovers, stop us if you’ve heard this one before: you’ve just finished a
    mind-blowing book and you need to hear some discussion about it. What do you
    do? Dive straight into the limitless realm of the Internet and search for
    book review sites, of course.
  </p>
  <p style={{ fontSize: "1.2rem", marginBottom: "30px", textAlign: "justify" }}>
    Or here’s another scenario: you’ve finished reading a novel and now you’re
    searching for something to fill the void. Maybe you want more of the same,
    or maybe something completely different to switch things up. You’ll probably
    also scour the Internet for ratings and trustworthy recommendations.
  </p>

  {/* List of Review Sites with Images */}
  <div style={{ marginTop: "30px" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <img
        src={goodreads}
        alt="Goodreads"
        style={{
          width: "150px",
          height: "150px",
          marginRight: "20px",
          borderRadius: "10px",
        }}
      />
      <div>
        <h3 style={{ fontSize: "1.8rem", color: "#007bff" }}>1. Goodreads</h3>
        <p style={{ fontSize: "1rem", textAlign: "justify" }}>
          <strong>Review styles:</strong> star rating, community reviews
        </p>
        <p style={{ fontSize: "1rem", textAlign: "justify" }}>
          It’s impossible not to mention Goodreads when discussing book
          communities: it’s the Facebook of book reviews — the ultimate social
          media platform for bibliophiles. If you’ve somehow managed to go this
          long without stumbling upon this omnipresent site, here’s the run-down:
          you can use Goodreads to organize, display, and discuss your virtual
          bookshelf with other users.
        </p>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <img
        src={librarythink}
        alt="LibraryThing"
        style={{
          width: "150px",
          height: "150px",
          marginRight: "20px",
          borderRadius: "10px",
        }}
      />
      <div>
        <h3 style={{ fontSize: "1.8rem", color: "#007bff" }}>2. LibraryThing</h3>
        <p style={{ fontSize: "1rem", textAlign: "justify" }}>
          <strong>Review styles:</strong> star rating, recommendation, community
          reviews
        </p>
        <p style={{ fontSize: "1rem", textAlign: "justify" }}>
          This is the OG of all online book catalogues and discussion boards —
          take a look and you’ll see that it’s an oldie but a goodie. Of course,
          the basic functions of LibraryThing are rather similar to Goodreads:
          there are millions of books that readers can add to their lists, as
          well as review with star ratings.
        </p>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <img
        src={discovery}
        alt="Reedsy Discovery"
        style={{
          width: "150px",
          height: "150px",
          marginRight: "20px",
          borderRadius: "10px",
        }}
      />
      <div>
        <h3 style={{ fontSize: "1.8rem", color: "#007bff" }}>
          3. Reedsy Discovery
        </h3>
        <p style={{ fontSize: "1rem", textAlign: "justify" }}>
          <strong>Review styles:</strong> star rating, recommendation, editorial
          reviews, community reviews (video option available)
        </p>
        <p style={{ fontSize: "1rem", textAlign: "justify" }}>
          Now, if you’re searching for some hidden gems to peruse, Reedsy
          Discovery’s got your back. While our blog features everything from
          classics to contemporary hits, Discovery’s specialty is indie
          publications, many of which are accompanied with succinct comments
          from experienced reviewers. There’s no better way to broaden your
          horizon!
        </p>
      </div>
    </div>
  </div>

  <p
    style={{
      marginTop: "30px",
      fontSize: "1.2rem",
      textAlign: "center",
      fontWeight: "bold",
    }}
  >
    With these ten sites, you’ll be sure to find your little community of fellow
    book lovers regardless of what your interests are. Here’s to exciting TBR
    lists and nourished minds!
  </p>
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
                    width: "70%",
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
      <section style={{ padding: "50px 20px", backgroundColor: "#f4f7fa" }}>
  <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "40px" }}>
    Popular with Kids
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "20px",
      margin: "0 auto",
      maxWidth: "1200px",
    }}
  >
    {/* Card 1 */}
    <div
      style={{
        backgroundColor: "#fff",
        width: "250px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <img
        src={k1} // Image k1
        alt="Book Title 1"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Book Title 1
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          A short description of the book. Perfect for kids.
        </p>
        <button
          style={{
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Read More
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div
      style={{
        backgroundColor: "#fff",
        width: "250px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <img
        src={k2} // Image k2
        alt="Book Title 2"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Book Title 2
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          A short description of the book. Perfect for kids.
        </p>
        <button
          style={{
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Read More
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div
      style={{
        backgroundColor: "#fff",
        width: "250px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <img
        src={k3} // Image k3
        alt="Book Title 3"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Book Title 3
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          A short description of the book. Perfect for kids.
        </p>
        <button
          style={{
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Read More
        </button>
      </div>
    </div>

    {/* Card 4 */}
    <div
      style={{
        backgroundColor: "#fff",
        width: "250px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <img
        src={k4} // Image k4
        alt="Book Title 4"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Book Title 4
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          A short description of the book. Perfect for kids.
        </p>
        <button
          style={{
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Read More
        </button>
      </div>
    </div>
    {/* Card 4 */}
    <div
      style={{
        backgroundColor: "#fff",
        width: "250px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <img
        src={k4} // Image k4
        alt="Book Title 4"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Book Title 4
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          A short description of the book. Perfect for kids.
        </p>
        <button
          style={{
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Read More
        </button>
      </div>
    </div>
    {/* Card 4 */}
    <div
      style={{
        backgroundColor: "#fff",
        width: "250px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <img
        src={k4} // Image k4
        alt="Book Title 4"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Book Title 4
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          A short description of the book. Perfect for kids.
        </p>
        <button
          style={{
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Read More
        </button>
      </div>
    </div>
    
  </div>
</section>






<section style={{ padding: "50px", backgroundColor: "#f4f7fa", }}>
  <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "40px" }}>
    Our Quotes
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "20px",
      margin: "0 auto",
      maxWidth: "1200px",
    }}
  >
    {/* Quote 1 */}
    <div
      style={{
        backgroundColor: "#fff",
        width: "400px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p style={{ marginBottom: "0" }}>
        "I absolutely adore this book! The writing is so engaging and the characters are so well-developed. I highly recommend it to anyone looking for a new favorite."
        <br />
        - John Doe
      </p>
    </div>
    {/* Quote 2 */}
    <div
      style={{
        backgroundColor: "#fff",
        width: "400px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p style={{ marginBottom: "0" }}>
        "This book has really helped me understand the world of literature better. I highly recommend it to anyone interested in learning more about literature."
        <br />
        - Jane Smith
      </p>
    </div>
    {/* Quote 3 */}
    <div
      style={{
        backgroundColor: "#fff",
        width: "400px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p style={{ marginBottom: "0" }}>
        "This book has made me appreciate more about the world around me. I highly recommend it to anyone who wants to learn more about their surroundings."
        <br />
        - Mike Johnson
      </p>
    </div>
  </div>
</section>


      {/* Join Us Section */}
      <section
  style={{
    padding: "50px",
    textAlign: "center",
    backgroundImage: `url(${bc1})`, // Background image
    backgroundSize: "cover", // Ensures the image covers the section
    backgroundPosition: "center", // Centers the image
    color: "white", // Change text color to white
  }}
>
  <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
    Join Our Community
  </h2>
  <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
    Be a part of a vibrant community of book enthusiasts. Share your reviews and discover your next favorite book.
  </p>
  <button
    style={{
      backgroundColor: "#ffc107", // Button color
      color: "#000", // Text color on the button
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