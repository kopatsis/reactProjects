import { Outlet } from "react-router-dom"
import Topbar from "./Topbar"
import { Link } from "react-router-dom"

const Home = ({place, data}) => {
  return (
    <>
        <Topbar inpath={place}/>
        <p>Your source for all products and brands of cheddar cheese</p>
        <Link to={"/all"}>View Products</Link>
        <Outlet context={{passedData: data, place: place}} />
    </>
  )
}

export default Home