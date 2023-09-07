import './App.css';
import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <header class="header section" data-header>
        <div class="container">
          <a href="#" class="logo">
            <img src="./assets/images/blog-logo.png" width="80" height="10" alt="Blog logo"/>
          </a>

          <nav class="navbar" data-navbar>
            <ul class="navbar-list">
              <li class="navbar-item">
                <a href="#" class="navbar-link hover:underline" data-nav-link>Home</a>
              </li>
              <li class="navbar-item">
                <a href="#" class="navbar-link hover:underline" data-nav-link>Recent Post</a>
              </li>
              <button id='darkModeBtn' onClick={handleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </ul>
          </nav>

          <div class="wrapper">
            <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
              <span class="span one"></span>
              <span class="span two"></span>
              <span class="span three"></span>
            </button>
          </div>
        </div>
      </header>

      <div class="search-bar" data-search-bar>
        <div class="input-wrapper">
          <input type="search" name="search" placeholder="Search" class="input-field"/>
          <button class="search-close-btn" aria-label="close search bar" data-search-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
        <p class="search-bar-text">Please enter at least 3 characters</p>
      </div>

      <div class="overlay" data-overlay data-search-toggler></div>

      <main>
        <article>
          <section class="section hero" aria-label="home">
            <div class="container">
              <h1 class="h1 hero-title">
                <strong class="strong">Hey, welcome to our website.</strong> See our thoughts, stories and ideas.
              </h1>
            </div>
          </section>

          <section class="section featured" aria-label="featured post">
            <div class="container">
              <p class="section-subtitle">
                Get started with our <strong class="strong">best stories</strong>
              </p>

              <ul class="has-scrollbar">
                <li class="scrollbar-item">
                  <div class="blog-card">
                    <figure class="card-banner img-holder" width="500" height="600">
                      <img src="./assets/images/featured-1.jpg" width="500" height="600" loading="lazy"
                        alt="New technology is not good or evil in and of itself" class="img-cover"/>

                      <ul class="avatar-list absolute">
                        <li class="avatar-item">
                          <a href="#" class="avatar-img-holder" width="100" height="100">
                            <img src="./assets/images/author-1.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>
                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-2.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>
                      </ul>
                    </figure>

                    <div class="card-content">
                      <ul class="card-meta-list">
                        <li>
                          <a href="#" class="card-tag">Design</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Idea</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Review</a>
                        </li>
                      </ul>

                      <h3 class="h4">
                        <a href="#" class="card-title hover:underline">
                          New technology is not good or evil in and of itself
                        </a>
                      </h3>

                      <p class="card-text">
                        New technology is inherently neutral, neither good nor evil, as its impact depends on how it's used by individuals and society.
                      </p>
                    </div>
                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="blog-card">
                    <figure class="card-banner img-holder" width="500" height="600">
                      <img src="./assets/images/featured-2.jpg" width="500" height="600" loading="lazy"
                        alt="It’s a new era in design, there are no rules" class="img-cover"/>

                      <ul class="avatar-list absolute">
                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>
                      </ul>
                    </figure>

                    <div class="card-content">
                      <ul class="card-meta-list">
                        <li>
                          <a href="#" class="card-tag">Creative</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Product</a>
                        </li>
                      </ul>
                      <h3 class="h4">
                        <a href="#" class="card-title hover:underline">
                          It’s a new era in design, there are no rules
                        </a>
                      </h3>
                      <p class="card-text">
                        In modern design, traditional rules have been discarded, allowing for a more creative and flexible approach.
                      </p>
                    </div>
                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="blog-card">
                    <figure class="card-banner img-holder" width="500" height="600">
                      <img src="./assets/images/featured-3.jpg" width="500" height="600" loading="lazy"
                        alt="Perfection has to do with the end product" class="img-cover"/>

                      <ul class="avatar-list absolute">
                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-4.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>
                      </ul>
                    </figure>

                    <div class="card-content">
                      <ul class="card-meta-list">
                        <li>
                          <a href="#" class="card-tag">Design</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Creative</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Idea</a>
                        </li>
                      </ul>

                      <h3 class="h4">
                        <a href="#" class="card-title hover:underline">
                          Perfection has to do with the end product
                        </a>
                      </h3>
                      <p class="card-text">
                        Perfection is primarily concerned with achieving an ideal or flawless final result. It centers on the quality, precision, and completeness of the end product or outcome, whether it's a work of art, a project, or any creative endeavor.
                      </p>
                    </div>
                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="blog-card">
                    <figure class="card-banner img-holder" width="500" height="600">
                      <img src="./assets/images/featured-4.jpg" width="500" height="600" loading="lazy"
                        alt="Everyone has a different life story" class="img-cover"/>

                      <ul class="avatar-list absolute">
                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-5.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>
                        <li class="avatar-item">
                        <a href="#" className="avatar img-holder" width="100" height="100">
                          <img src="./assets/images/author-2.jpg" width="100" height="100" loading="lazy" alt="Author" className="img-cover"/>
                        </a>
                        </li>
                      </ul>
                    </figure>

                    <div class="card-content">
                      <ul class="card-meta-list">
                        <li>
                          <a href="#" class="card-tag">People</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Story</a>
                        </li>
                      </ul>
                      <h3 class="h4">
                        <a href="#" class="card-title hover:underline">
                          Everyone has a different life story
                        </a>
                      </h3>
                      <p class="card-text">
                        Indeed, every individual possesses a unique life story shaped by their experiences, choices, and circumstances. These narratives are a reflection of their personal journey, filled with distinct challenges, triumphs, and moments that make them one of a kind.
                      </p>
                    </div>
                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="blog-card">
                    <figure class="card-banner img-holder" width="500" height="600">
                      <img src="./assets/images/featured-5.jpg" width="500" height="600" loading="lazy"
                        alt="The difference is the quality" class="img-cover"/>

                      <ul class="avatar-list absolute">
                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-6.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>
                      </ul>
                    </figure>

                    <div class="card-content">
                      <ul class="card-meta-list">
                        <li>
                          <a href="#" class="card-tag">Design</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Lifestyle</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Idea</a>
                        </li>
                      </ul>

                      <h3 class="h4">
                        <a href="#" class="card-title hover:underline">
                          The difference is between the quality
                        </a>
                      </h3>
                      <p class="card-text">
                        Quality refers to the standard of excellence or superiority in a product, service, or outcome. It sets apart something that is exceptional or superior from something that is average or inferior. 
                      </p>
                    </div>
                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="blog-card">
                    <figure class="card-banner img-holder" width="500" height="600">
                      <img src="./assets/images/featured-6.jpg" width="500" height="600" loading="lazy"
                        alt="Problems are not stop signs, they are guidelines" class="img-cover"/>

                      <ul class="avatar-list absolute">
                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>
                      </ul>
                    </figure>

                    <div class="card-content">
                      <ul class="card-meta-list">
                        <li>
                          <a href="#" class="card-tag">Idea</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Creating</a>
                        </li>
                      </ul>

                      <h3 class="h4">
                        <a href="#" class="card-title hover:underline">
                          Problems are not stop signs, they are guidelines
                        </a>
                      </h3>
                      <p class="card-text">
                        Problems are not roadblocks, they serve as guiding markers in our journey. Instead of halting progress, they offer directions for growth and solutions. 
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="section recent" aria-label="recent post">
            <div class="container">
              <div class="title-wrapper">
                <h2 class="h2 section-title">
                  See what we’ve <strong class="strong">written lately</strong>
                </h2>

                <div class="top-author">
                  <ul class="avatar-list">
                    <li class="avatar-item">
                      <a href="#" class="avatar large img-holder" width="100" height="100">
                        <img src="./assets/images/author-1.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                      </a>
                    </li>
                    <li class="avatar-item">
                      <a href="#" class="avatar large img-holder" width="100" height="100">
                        <img src="./assets/images/author-2.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                      </a>
                    </li>
                    <li class="avatar-item">
                      <a href="#" class="avatar large img-holder" width="100" height="100">
                        <img src="./assets/images/author-3.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                      </a>
                    </li>
                    <li class="avatar-item">
                      <a href="#" class="avatar large img-holder" width="100" height="100">
                        <img src="./assets/images/author-4.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                      </a>
                    </li>
                    <li class="avatar-item">
                      <a href="#" class="avatar large img-holder" width="100" height="100">
                        <img src="./assets/images/author-5.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                      </a>
                    </li>
                  </ul>
                  <span class="span">Meet our top authors</span>
                </div>
              </div>

              <ul class="grid-list">
                <li>
                  <div class="blog-card">
                    <figure class="card-banner img-holder" width="550" height="660">
                      <img src="./assets/images/recent-1.jpg" width="550" height="660" loading="lazy"
                        alt="Creating is a privilege but it’s also a gift" class="img-cover"/>

                      <ul class="avatar-list absolute">
                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>
                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-5.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>
                      </ul>
                    </figure>

                    <div class="card-content">
                      <ul class="card-meta-list">
                        <li>
                          <a href="#" class="card-tag">Lifestyle</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">People</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Review</a>
                        </li>
                      </ul>
                      <h3 class="h4">
                        <a href="#" class="card-title hover:underline">
                          Creating is a privilege but it’s also a gift
                        </a>
                      </h3>
                      <p class="card-text">
                        The act of creating is both a privilege and a gift. It grants individuals the power to bring something unique into existence, whether it's art, ideas, or innovations. 
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="blog-card">
                    <figure class="card-banner img-holder" width="550" height="660">
                      <img src="./assets/images/recent-2.jpg" width="550" height="660" loading="lazy"
                        alt="Being unique is better than being perfect" class="img-cover"/>

                      <ul class="avatar-list absolute">
                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-5.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>
                      </ul>
                    </figure>

                    <div class="card-content">
                      <ul class="card-meta-list">
                        <li>
                          <a href="#" class="card-tag">Design</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Product</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Idea</a>
                        </li>
                      </ul>

                      <h3 class="h4">
                        <a href="#" class="card-title hover:underline">
                          Being unique is better than being perfect
                        </a>
                      </h3>

                      <p class="card-text">
                        Embracing one's uniqueness holds greater value than striving for perfection. Perfection is often an unattainable standard, causing stress and inhibiting growth.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="blog-card">
                    <figure class="card-banner img-holder" width="550" height="660">
                      <img src="./assets/images/recent-6.jpg" width="550" height="660" loading="lazy"
                        alt="Your voice, your mind, your story, your vision" class="img-cover"/>

                      <ul class="avatar-list absolute">
                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-6.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>
                      </ul>
                    </figure>

                    <div class="card-content">
                      <ul class="card-meta-list">
                        <li>
                          <a href="#" class="card-tag">People</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Review</a>
                        </li>
                        <li>
                          <a href="#" class="card-tag">Story</a>
                        </li>
                      </ul>

                      <h3 class="h4">
                        <a href="#" class="card-title hover:underline">
                          Your voice, your mind, your story, your vision
                        </a>
                      </h3>

                      <p class="card-text">
                        Your voice signifies unique expression, your mind represents personal thoughts, your story conveys life experiences, and your vision embodies aspirations.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="section recommended" aria-label="recommended post">
            <div class="container">
              <p class="section-subtitle">
                <strong class="strong">Recommended</strong>
              </p>
              <ul class="grid-list">
                <li>
                  <div class="blog-card">

                    <figure class="card-banner img-holder" width="300" height="360">
                      <img src="./assets/images/recommended-1.jpg" width="300" height="360" loading="lazy"
                        alt="The trick to getting more done is to have the freedom to roam around " class="img-cover"/>

                      <ul class="avatar-list absolute">

                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder"width="100" height="100">
                            <img src="./assets/images/author-5.jpgstyle" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>

                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-2.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>

                      </ul>
                    </figure>

                    <div class="card-content">

                      <h3 class="h5">
                        <a href="#" class="card-title hover:underline">
                          The trick to getting more done is to have the freedom to roam around
                        </a>
                      </h3>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="blog-card">

                    <figure class="card-banner img-holder" width="300" height="360">
                      <img src="./assets/images/recommended-2.jpg" width="300" height="360" loading="lazy"
                        alt="Every day, in every city and town across the country " class="img-cover"/>

                      <ul class="avatar-list absolute">

                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>

                      </ul>
                    </figure>

                    <div class="card-content">

                      <h3 class="h5">
                        <a href="#" class="card-title hover:underline">
                          Every day, in every city and town across the country
                        </a>
                      </h3>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="blog-card">

                    <figure class="card-banner img-holder" width="300" height="360">
                      <img src="./assets/images/recommended-3.jpg" width="300" height="360" loading="lazy"
                        alt="I work best when my space is filled with inspiration " class="img-cover"/>

                      <ul class="avatar-list absolute">

                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-1.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>

                      </ul>
                    </figure>

                    <div class="card-content">

                      <h3 class="h5">
                        <a href="#" class="card-title hover:underline">
                          I work best when my space is filled with inspiration
                        </a>
                      </h3>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="blog-card">

                    <figure class="card-banner img-holder" width="300" height="360">
                      <img src="./assets/images/recommended-4.jpg" width="300" height="360" loading="lazy"
                        alt="I have my own definition of minimalism " class="img-cover"/>

                      <ul class="avatar-list absolute">

                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-4.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>

                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>

                      </ul>
                    </figure>

                    <div class="card-content">

                      <h3 class="h5">
                        <a href="#" class="card-title hover:underline">
                          I have my own definition of minimalism
                        </a>
                      </h3>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="blog-card">

                    <figure class="card-banner img-holder" width="300" height="360">
                      <img src="./assets/images/recommended-5.jpg" width="300" height="360" loading="lazy"
                        alt="Change your look and your attitude " class="img-cover"/>

                      <ul class="avatar-list absolute">

                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-6.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>

                      </ul>
                    </figure>

                    <div class="card-content">

                      <h3 class="h5">
                        <a href="#" class="card-title hover:underline">
                          Change your look and your attitude
                        </a>
                      </h3>

                    </div>

                  </div>
                </li>

                <li>
                  <div class="blog-card">

                    <figure class="card-banner img-holder" width="300" height="360">
                      <img src="./assets/images/recommended-6.jpg" width="300" height="360" loading="lazy"
                        alt="The difference is quality " class="img-cover"/>

                      <ul class="avatar-list absolute">

                        <li class="avatar-item">
                          <a href="#" class="avatar img-holder" width="100" height="100">
                            <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                              class="img-cover"/>
                          </a>
                        </li>

                      </ul>
                    </figure>

                    <div class="card-content">

                      <h3 class="h5">
                        <a href="#" class="card-title hover:underline">
                          The difference is the quality
                        </a>
                      </h3>

                    </div>

                  </div>
                </li>

              </ul>

            </div>
          </section>
        </article>
      </main>

      <footer class="footer">
        <div class="container">
          <div class="footer-top section">
            <div class="footer-brand">
              <p class="footer-text">
                A minimal, functional theme for running a paid-membership publication on Ghost.
              </p>
            </div>
            <ul class="footer-list">
              <li>
                <p class="h5">Social</p>
              </li>

              <li class="footer-list-item">
                <ion-icon name="logo-facebook"></ion-icon>

                <a href="#" class="footer-link hover:underline">Facebook</a>
              </li>

              <li class="footer-list-item">
                <ion-icon name="logo-twitter"></ion-icon>

                <a href="#" class="footer-link hover:underline">Twitter</a>
              </li>

              <li class="footer-list-item">
                <ion-icon name="logo-pinterest"></ion-icon>

                <a href="#" class="footer-link hover:underline">Pinterest</a>
              </li>

              <li class="footer-list-item">
                <ion-icon name="logo-vimeo"></ion-icon>

                <a href="#" class="footer-link hover:underline">Vimeo</a>
              </li>

            </ul>

            <ul class="footer-list">

              <li>
                <p class="h5">About</p>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Style Guide</a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Features</a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Contact</a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">404</a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Privacy Policy</a>
              </li>

            </ul>

            <ul class="footer-list">

              <li>
                <p class="h5">Features</p>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Upcoming Events</a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Blog & News</a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Features</a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">FAQ Question</a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Testimonial</a>
              </li>

            </ul>

            <ul class="footer-list">

              <li>
                <p class="h5">Membership</p>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Account</a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Membership</a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Subscribe</a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Tags</a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">Authors</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;