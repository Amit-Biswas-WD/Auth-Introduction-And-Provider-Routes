import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex gap-8 justify-center py-4">
        <NavLink className="btn bg-accent" to={`/login`}>Login</NavLink>
        <NavLink className="btn bg-accent" to={`/sign-up`}>Sign Up</NavLink>
    </div>
  )
}

export default Header