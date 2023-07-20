export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <label htmlFor="identifiant">Identifiant</label>
      <input type="text" id="identifiant" />

      <label htmlFor="pass">Password</label>
      <input type="password" id="pass" />

      <input type="submit" />
    </form>
  );
}
