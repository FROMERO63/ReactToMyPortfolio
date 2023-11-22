import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footerContainer"> 
      <div id="footerLinks">
        <div class="navbar-start">
            <div class="footerLinks" id= "githubLink">
                Github
            </div>
            <div class="footerLinks" id= "linkedinLink">
                Linkedin
            </div>
            <div class="footerLinks" id= "otherLink">
                OtherLink
            </div>
        </div>
      </div>
    </footer>
  );
}