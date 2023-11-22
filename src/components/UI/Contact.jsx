export default function Contact() {
    return (
      <section id="contactContainer">
        <form class="card" id="contactCard">
          <header class="card-header" id="cardHeader">
            <p class="card-header-title is-centered">Contact Me</p>
          </header>
          <div class="card-content"> 
            <div class="field">
              <label class="label">Name</label>
                <input class="input" placeholder="name" type="name"></input>
            </div>
            <div class="field">
              <label class="label">Email</label>
                <input class="input" placeholder="email" type="email"></input>
            </div>
            <div id="textareaContainer">
              <label class="label">Message</label>
                <div class="control">
                  <input class="input" id="textInput" placeholder="send me a message" type="textarea"></input>
                </div>
            </div>
            <div class="field">
            <button id="submitButton" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </section>
    );
  }