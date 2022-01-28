import React from "react";
import "../headerstyle.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; Ursula Wilborn, 2021</p>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"
        integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe"
        crossorigin="anonymous"
      ></script>
      <section id="social">
        <div class="rounded-social-buttons">
          <a
            class="social-button facebook"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            class="social-button twitter"
            href="https://www.twitter.com/"
            target="_blank"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            class="social-button linkedin"
            href="www.linkedin.com/in/ursula-w-2610ba186"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            class="social-button youtube"
            href="https://www.youtube.com/"
            target="_blank"
          >
            <i class="fab fa-youtube"></i>
          </a>
          <a
            class="social-button instagram"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

// function Footer() {
//     return (
//     <footer>
//         <div className="footer">
//             <p><span>The Hub</span></p>
//             <p><span>©2021 StemQA Corporation</span><p>
//         <div>
//             <ul className="nav-links">
//               <li><a href='#'><span>Phone<br>1 800 600 0000</span></a></li>
//               <li><a href='#'><span>Email<br>info@TheHub.com</span></a></li>
//             </ul>
//       </div>
//         </div>
//     </footer>

//   );
//   }
