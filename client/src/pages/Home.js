import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assests/CSS/home.css';
import 'bootstrap/dist/css/bootstrap.css';

const thoughts = [
  "We do not inherit the Earth from our ancestors; we borrow it from our children.",
  "Reduce, reuse, recycle.",
  "A tree is known by its fruit; a man by his deeds.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Take only memories, leave only footprints.",
  "The Earth does not belong to us; we belong to the Earth.",
  "Nature is not a place to visit. It is home.",
  "Think globally, act locally.",
  "Every drop in the ocean counts.",
  "When we heal the Earth, we heal ourselves.",
  "The Earth provides enough to satisfy every man's needs, but not every man's greed. - Mahatma Gandhi",
  "Nature always wears the colors of the spirit. - Ralph Waldo Emerson",
  "One person's trash is another person's treasure.",
  "Live simply so that others may simply live.",
  "The more you give, the more you receive.",
  "Sustainability begins with me.",
  "In every walk with nature, one receives far more than he seeks. - John Muir",
  "Leave the world better than you found it.",
  "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change. - Charles Darwin",
  "The future will either be green or not at all."
];

const Home = () => {
  const [randomThought, setRandomThought] = useState('');

  const getRandomThought = () => {
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    setRandomThought(thoughts[randomIndex]);
  };

  useEffect(() => {
    getRandomThought();
  }, []);

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-xl" aria-current="page" to="/feeds">
                    Feeds
                  </Link>
                </li>
              </ul>
              <div className="mx-auto order-0">
                {/* Center-align the "EcoTech" brand */}
                <Link className="navbar-brand mx-auto text-xxl" to="/">
                  EcoTech
                </Link>
              </div>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* Push "Log in" and "Sign up" links to the right */}
                <li className="nav-item">
                  <Link className="nav-link text-xl" to="/login">
                    Log in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-xl" to="/signup">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container mt-5 text-center d-flex flex-column align-items-center">
        <h1>Welcome Aliens</h1>
        <p className="letter-by-letter">{randomThought}</p>
      </div>
    </>
  );
};

export default Home;
