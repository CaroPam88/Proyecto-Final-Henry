import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link to="/home">
        <h2>
          <button>ENTRAR</button>
        </h2>
      </Link>
      <footer>
        <div>
          <p>Made with ❤️ por los más lindos</p>
        </div>
      </footer>
    </div>
  );
};
export default Landing;
