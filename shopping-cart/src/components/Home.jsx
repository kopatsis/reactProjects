import { Outlet } from "react-router-dom"
import Topbar from "./Topbar"

const Home = ({place, data}) => {
  return (
    <>
        <Topbar inpath={place}/>
        <p>Your source for all products and brands of cheddar cheese</p>
        <div>View Products</div>
        <Outlet context={{passedData: data}} />
    </>
  )
}

export default Home