<?php
  $currentPage = basename($_SERVER['PHP_SELF']);
?>
<!doctype php>
<php lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>desertdigitals</title>
    <link rel="icon" href="./assets/logos/mark-amber.svg" type="image/svg+xml">
    <link rel="stylesheet" href="./assets/devcss/mainBase.css">
  </head>
  <body>
  <div class="main-div">
    <header class="site-header is-solid" data-header="">
      <a class="logo" href="index.php" aria-label="desertdigitals home">
        <img src="./assets/logos/mark-amber.svg" alt="" width="28" height="28"><span>desertdigitals</span>
      </a>
        <nav class="site-nav" aria-label="Main"><a class="site-nav__link" href="store.php">/products</a><a class="site-nav__link" href="one-on-one.php">/one-on-one</a><a class="site-nav__link" href="about.php">/about</a><a class="site-nav__link" href="contact.php">/contact</a></nav>
        <div class="site-header__right">
          <div class="currency site-header__hide-mobile" data-currency-select="">
            <button class="currency__button" aria-haspopup="listbox" aria-expanded="false">
              <span data-currency-label="">usd</span><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg>
            </button>
            <ul class="currency__list" role="listbox" aria-label="Currency">
              <li>
                <button class="currency__option" role="option" data-currency="USD" aria-selected="true">
                  usd<span>$</span>
                </button>
              </li>
              <li>
                <button class="currency__option" role="option" data-currency="EUR" aria-selected="false">
                  eur<span>€</span>
                </button>
              </li>
              <li>
                <button class="currency__option" role="option" data-currency="GBP" aria-selected="false">
                  gbp<span>£</span>
                </button>
              </li>
              <li>
                <button class="currency__option" role="option" data-currency="USD" aria-selected="true">
                  usd<span>$</span>
                </button>
              </li>
              <li>
                <button class="currency__option" role="option" data-currency="EUR" aria-selected="false">
                  eur<span>€</span>
                </button>
              </li>
              <li>
                <button class="currency__option" role="option" data-currency="GBP" aria-selected="false">
                  gbp<span>£</span>
                </button>
              </li>
            </ul>
          </div>
          <span class="site-header__hide-mobile" data-account-link=""><a href="login.php">login</a></span>
          <a href="cart.php">cart(<span class="cart-count" data-cart-count="">0</span>)</a>
          <button class="burger" aria-label="Open menu" aria-expanded="false" data-menu-open=""><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8h18M9 16h12"></path></svg></button>
        </div>
    </header>
    <div class="menu" id="menu" aria-hidden="true" role="dialog" aria-label="Menu">
      <div class="menu__top">
        <a class="logo" href="index.php" aria-label="desertdigitals home">
          <img src="assets/logos/mark-amber.svg" alt="" width="28" height="28">
          <span>desertdigitals</span>
        </a>
        <button class="menu__close" data-menu-close="">close <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18"></path>
          </svg>
        </button>
      </div>
      <nav class="menu__nav" aria-label="Mobile">
        <a class="menu__link" href="store.php" aria-current="page">/products</a>
        <a class="menu__link" href="one-on-one.php">/one-on-one</a>
        <a class="menu__link" href="about.php">/about</a>
        <a class="menu__link" href="contact.php">/contact</a>
      </nav>
      <div class="menu__meta">
        <span data-account-link="">
          <a href="login.php">login</a>
        </span>
        <div class="menu__currency">currency: <button data-currency="USD" aria-pressed="true">usd</button>
          <button data-currency="EUR" aria-pressed="false">eur</button>
          <button data-currency="GBP" aria-pressed="false">gbp</button>
        </div>
      </div>
    </div>
<main  class="page">

  


  
  