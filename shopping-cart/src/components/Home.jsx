import { Outlet } from "react-router-dom"
import Topbar from "./Topbar"
import { Link } from "react-router-dom"

const Home = ({place, data}) => {
  return (
    <div className="whole">
        <Topbar inpath={place}/>
        <p className="slogan">Your source for all products and brands of cheddar cheese</p>
        <div className="centerhold">
          <Link to={"/all"} className="home centerb">View Products</Link>
        </div>
        <Outlet context={{passedData: data, place: place}} />
    </div>
  )
}

export default Home