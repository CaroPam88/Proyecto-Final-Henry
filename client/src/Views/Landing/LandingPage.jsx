import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  // const navigate = useNavigate();
  // const [open, setOpen] = useState(false);
  // const gotoHome = () => {
  //   setTimeout(() =>{
  //     setOpen(true);
  //     setTimeout(() => navigate("/home"), 1500)
  //   }, 1300)
  // };
  // useEffect(gotoHome)

  
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
