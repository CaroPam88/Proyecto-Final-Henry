import Header from "../../AdminComponents/Headers";
import style from "./dashboard.css";



const Dashboard = () => {

    return(
        <div class={style.box}>
        <div class={style.headContainer}>
          <Header>

            <h2 class={style.title}>DASHBOARD</h2>
            <h5 class={style.subtitle}>Welcome to your dashboard</h5>

          </Header>

        </div>
      
        <div class={style.gridContainer}>

        </div>
      </div>
      
    )
}


export default Dashboard;