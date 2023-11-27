import introProfile from '../../assets/IntroProfile.jpg'
import kuwizMe from '../../assets/KuwizMe.jpg'
import passwordGenerator from '../../assets/PasswordGenerator.jpg'
import programmersPub from '../../assets/ProgrammersPub.jpg'
import refactoringSite from '../../assets/RefactoringSite.jpg'
import workDayPlanner from '../../assets/WorkDayPlanner.jpg'

export default function Portfolio() {
    return (
      <section id="portfolioContainer">
        <div class="card" id="portfolioCard">
            <header class="card-header" id="portfolioHeader">
                <p class="card-header-title" id="titleText">Portfolio</p>
            </header>
          <div  id="portfolioContent">
            <div class="columns is-multiline is-mobile" id="columSet">
            <div class="column is-one-third" id="projectCards">
                <div class="card" id="projects">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img src={workDayPlanner} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="card-content" id="cardBackground">
                        <div class="media">
                            <div class="media-content">
                                <p class="projectTitle">Day Planner</p>
                                <a class="projectLink" href="https://github.com/FROMERO63">https://github.com/FROMERO63</a>
                                <br></br>
                                <a class="projectLink" href="https://fromero63.github.io/dayplanner/">https://fromero63.github.io/dayplanner/</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-one-third" id="projectCards">
                <div class="card" id="projects">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img src={refactoringSite} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="card-content" id="cardBackground">
                        <div class="media">
                        <div class="media-content">
                                <p class="projectTitle">Site Refactoring</p>
                                <a class="projectLink" href="https://github.com/FROMERO63">https://github.com/FROMERO63</a>
                                <br></br>
                                <a class="projectLink" href="https://fromero63.github.io/horisean-page/">https://fromero63.github.io/horisean-page/</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-one-third" id="projectCards">
                <div class="card" id="projects">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img src={introProfile} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="card-content" id="cardBackground">
                        <div class="media">
                        <div class="media-content">
                                <p class="projectTitle">Intro Profile</p>
                                <a class="projectLink" href="https://github.com/FROMERO63">https://github.com/FROMERO63</a>
                                <br></br>
                                <a class="projectLink" href="https://fromero63.github.io/myprofile/">https://fromero63.github.io/myprofile/</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-one-third" id="projectCards">
                <div class="card" id="projects">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img src={kuwizMe} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="card-content" id="cardBackground">
                        <div class="media">
                        <div class="media-content">
                                <p class="projectTitle">Kuwiz Me</p>
                                <a class="projectLink" href="https://github.com/FROMERO63">https://github.com/FROMERO63</a>
                                <br></br>
                                <a class="projectLink" href="https://fromero63.github.io/quizme/">https://fromero63.github.io/quizme/</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-one-third" id="projectCards">
                <div class="card" id="projects">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img src={passwordGenerator} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="card-content" id="cardBackground">
                        <div class="media">
                        <div class="media-content" >
                                <p class="projectTitle">Password Generator</p>
                                <a class="projectLink" href="https://github.com/FROMERO63">https://github.com/FROMERO63</a>
                                <br></br>
                                <a class="projectLink" href="https://fromero63.github.io/randopassword/">https://fromero63.github.io/randopassword/</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-one-third" id="projectCards">
                <div class="card" id="projects">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img src={programmersPub} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="card-content" id="cardBackground">
                        <div class="media">
                        <div class="media-content">
                                <p class="projectTitle">Programmers Pub</p>
                                <a class="projectLink" href="https://github.com/FROMERO63">https://github.com/FROMERO63</a>
                                <br></br>
                                <a class="projectLink" href="https://fromero63.github.io/programmerspub/">https://fromero63.github.io/programmerspub/</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
      </section>
    );
  }