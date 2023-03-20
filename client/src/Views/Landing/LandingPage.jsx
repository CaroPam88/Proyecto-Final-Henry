import style from './LandingPage.module.css';
import logo from '../../Assets/svg/logo.svg';
import { useState, useEffect } from 'react';


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
  const [_isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/home';
    }, 2000); // Change the value to adjust the amount of time to show the loading view

    return () => clearTimeout(timer);
  }, []);

  
  return (
<div className={style.loadingView}>
  <img src={logo} alt="" className={logo} />
  <div className={style.Spinner}></div>
</div>


  );
};
export default Landing;
