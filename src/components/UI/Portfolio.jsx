import profilePhoto from './profilePic.jpg'

export default function Portfolio() {
    return (
      <section id="portfolioContainer">
        <div class="card" id="portfolioCard">
            <header class="card-header" id="portfolioHeader">
                <p class="card-header-title">Portfolio</p>
            </header>
          <div  id="portfolioContent">
            <div class="columns is-multiline is-mobile">
            <div class="column is-one-third">
                <div class="card" id="projects">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img src={profilePhoto} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="card-content" id="cardBackground">
                        <div class="media">
                            <div class="media-content">
                                <p class="projectTitle">Title Of Project</p>
                                <p class="projectLink">@github.com</p>
                                <p class="projectLink">@github.con/title-of-project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-one-third">
                <div class="card" id="projects">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img src={profilePhoto} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="card-content" id="cardBackground">
                        <div class="media">
                        <div class="media-content">
                                <p class="projectTitle">Title Of Project</p>
                                <p class="projectLink">@github.com</p>
                                <p class="projectLink">@github.con/title-of-project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-one-third">
                <div class="card" id="projects">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img src={profilePhoto} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="card-content" id="cardBackground">
                        <div class="media">
                        <div class="media-content">
                                <p class="projectTitle">Title Of Project</p>
                                <p class="projectLink">@github.com</p>
                                <p class="projectLink">@github.con/title-of-project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-one-third">
                <div class="card" id="projects">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img src={profilePhoto} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="card-content" id="cardBackground">
                        <div class="media">
                        <div class="media-content">
                                <p class="projectTitle">Title Of Project</p>
                                <p class="projectLink">@github.com</p>
                                <p class="projectLink">@github.con/title-of-project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-one-third">
                <div class="card" id="projects">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img src={profilePhoto} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="card-content" id="cardBackground">
                        <div class="media">
                        <div class="media-content" >
                                <p class="projectTitle">Title Of Project</p>
                                <p class="projectLink">@github.com</p>
                                <p class="projectLink">@github.con/title-of-project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-one-third">
                <div class="card" id="projects">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img src={profilePhoto} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="card-content" id="cardBackground">
                        <div class="media">
                        <div class="media-content">
                                <p class="projectTitle">Title Of Project</p>
                                <p class="projectLink">@github.com</p>
                                <p class="projectLink">@github.con/title-of-project</p>
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