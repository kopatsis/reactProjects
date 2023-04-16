import { Outlet } from "react-router-dom"

const Home = ({place}) => {
  return (
    <>
    <header>
        <h1>Cheddar Depot</h1>
        <nav>
            <div>Home</div>
            <div>Products</div>
            <div>Cart</div>
        </nav>
    </header>
    <p>Your source for all products and brands of cheddar cheese</p>
    <div>View Products</div>
    <Outlet />
    </>
  )
}

export default Home