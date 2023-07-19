export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Contact</h2>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" />

          <label htmlFor="msg">Message</label>
          <textarea type="text" id="msg" />
        </form>
      </div>
      <p>© Copyright 2023. Made by Amani NEFZI</p>
    </footer>
  );
}
