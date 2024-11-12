import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

const Navbar = () => {
    
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleclick = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to = "/">
                    <h1>My Courses</h1>
                </Link>

                <nav>
                    {user && (
                    <div>
                        <div>
                            <span>{user.email.split('@')[[0]]}</span>
                            <button onClick={handleclick}>Log out</button>
                        </div>
                    </div>
                    )}

                    {!user && (
                    <div>
                        <div>
                            <Link to = "/login">Login</Link>
                            <Link to = "/signup">Signup</Link> 
                        </div>
                    </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar