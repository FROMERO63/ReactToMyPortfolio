import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footerContainer"> 
      <div id="footerLinks">
        <div class="navbar-start">
            <a class="footerLinks" id= "githubLink" href="https://github.com/FROMERO63">
                Github
            </a>
            <a class="footerLinks" id= "linkedinLink" href="https://www.linkedin.com/in/frankluisromero/">
                Linkedin
            </a>
            <a class="footerLinks" id= "otherLink" href="https://twitter.com/">
                Twitter
            </a>
        </div>
      </div>
    </footer>
  );
}