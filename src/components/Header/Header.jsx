import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex gap-8 justify-center">
        <NavLink className="btn bg-accent" onClick={`/login`}>Login</NavLink>
        <NavLink className="btn bg-accent" onClick={`/sign-up`}>Sign Up</NavLink>
    </div>
  )
}

export default Header