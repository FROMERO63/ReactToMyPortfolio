import profilePhoto from '../../assets/profilePhoto.jpg'


export default function AboutMe() {
    return (
      <section id="aboutMeContainer">
        <div class="card" id="aboutMeCard">
          <header class="card-header" id="aboutMeHeader">
            <p class="card-header-title">About Me</p>
          </header>
          <div class="card-content" id="aboutMeContent">
          <img src={profilePhoto}  alt="Profile photo" width="500" height="600" id="profileImg"></img>
              <div id="bio">
              <p id="quote" >"Design is not just what it looks like and feels like. Design is how it works." -- Steve Jobs</p>
              </div>
              <div id="bio">
              <p>Coming from the fashion industry, quotes like this inspire me to use all of my skill sets in creating great designs. Whether it had been in creating the assortment for back to school or in my current endevour as a SWE, my mind is always focused on great design. My background in Buying required a great amount of attention to detail, creativity, problem solving, and analytics. Throughout my journey into coding, I have infused these honed skills and learned many more. With my Full-Stack certificate from UCLA extended program, I look forward to continuing my learning and journey as a SWE.</p>
              </div>
            </div>
        </div>
      </section>
    );
  }