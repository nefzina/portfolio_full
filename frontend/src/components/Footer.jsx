import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Contact</h2>
        <form
          className="form"
          action="mailto:amani.nefzip@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" />

          <label htmlFor="msg">Message</label>
          <textarea type="text" id="msg" />

          <input className="send" type="submit" value="Send" />
        </form>
      </div>
      <p className="copyright">
        © Copyright 2023. Made by{" "}
        <Link to="/Admin" className="link">
          Amani NEFZI
        </Link>
      </p>
    </footer>
  );
}
