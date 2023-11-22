export default function Contact() {
    return (
      <section className="contactContainer">
        <form>
            <input placeholder="name" type="name"></input>
            <input placeholder="email" type="email"></input>
            <input placeholder="message" type="text"></input>
            <button tyoe="submit">Submit</button>
        </form>
      </section>
    );
  }