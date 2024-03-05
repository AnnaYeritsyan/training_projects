import Game from "components/Game/Game";
import DbConection from "./DBConection/DBConnection";

        
const Home = () => {
    return (
        <div >
             hello home
             <DbConection/>
             <Game/>
        </div>
    );
};
export default Home;