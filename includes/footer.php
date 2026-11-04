        </main>
        <footer class="site-footer">
            <div class="wrap">
                <div class="site-footer__grid">
                    <div class="site-footer__about">
                        <a class="logo" href="index.php" aria-label="desertdigitals home">
                            <img src="assets/logos/mark-amber.svg" alt="" width="28" height="28"><span>desertdigitals</span>
                        </a>
                    <p>
                        <span class="site-footer__copy-full">Products for web developers. Video courses, e-books, software,
                        templates and 1 on 1 time with a developer.</span>
                        <span class="site-footer__copy-short">Products for web developers. E-books, courses, software,
                        templates and 1 on 1 time with a developer.</span>
                    </p>
                    <a class="site-footer__mail" href="mailto:support@desertdigitals.com">support@desertdigitals.com</a>
                    </div>
                    <div class="site-footer__col">
                    <h2>// shop</h2><a href="store.php">Products</a><a href="one-on-one.php">1 on 1</a>
                    </div>
                    <div class="site-footer__col">
                    <h2>// company</h2><a href="about.php">About us</a><a href="contact.php">Contact us</a>
                    </div>
                    <div class="site-footer__col">
                    <h2>// account</h2><a href="login.php">Log in</a><a href="sign-up.php">Sign up</a>
                    </div>
                    <div class="site-footer__col">
                    <h2>// legal</h2><a href="terms.php">Terms and conditions</a><a href="privacy.php">Privacy policy</a>
                    </div>
                </div>
                <div class="site-footer__bottom">
                <span>
                    <span class="site-footer__copy-full">© 2026 desertdigitals. All rights reserved.</span>
                    <span class="site-footer__copy-short">© 2026 desertdigitals</span>
                </span>
                <div class="payment-logos" aria-label="We accept Visa and Mastercard">
                    <span><img src="assets/images/visa.svg" alt="Visa" width="32" height="10" loading="lazy" decoding="async"></span>
                    <span><img src="assets/images/mastercard.svg" alt="Mastercard" width="30" height="18" loading="lazy" decoding="async"></span></div>
                </div>
            </div>
        </footer>
        </div>
        <script src="uiframe/js/jquery.min.js"></script>
        <script src="uiframe/js/bootstrap.bundle.min.js"></script>
        <script src="uiframe/js/popper.min.js"></script>
        <script src="uiframe/js/slick.js"></script>
        <script src="uiframe/js/owl.carousel.js"></script>
        <script src="uiframe/js/swiper-bundle.min.js"></script>
        <script src="uiframe/js/flickity.pkgd.min.js"></script>   
        <script src="uiframe/js/aos.js"></script>
        <script src="./uiframe/js/home-js.js"></script>
        <script src="assets/data/catalogue.js"></script>
        <script src="assets/js/store.js"></script>
        <script src="assets/js/partials.js"></script>
        <script src="assets/js/ui.js"></script>
        <script src="assets/js/pages/home.js"></script>
        <script>
            $(document).ready(function () {
            $("#menuBtn").click(function () {
                $(this).toggleClass("is-active");
                $("#nav").toggleClass("header-is-active");
            });
        });
        </script>
        <script>
            const menuBtn = document.querySelector('#menuBtn');
            const nav = document.querySelector('#nav');
            const mmenu = document.querySelector('#mmenu');

            menuBtn.addEventListener('click', function () {
                menuBtn.classList.toggle('active');
                nav.classList.toggle('menu-on');
                mmenu.classList.toggle('open');
                document.body.classList.toggle('menu-open');
            });
        </script>
        <script>
        window.addEventListener('scroll', function() {
            var content = document.querySelector('header');
            var scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                content.classList.add("header-scroll", "solid")
            } else {
                content.classList.remove("header-scroll", "solid")
            }
        });
        </script>
        <script>
          
        </script>
        <script>
        AOS.init();
        </script>
   </body>
    </html>