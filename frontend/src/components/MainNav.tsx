import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import UsernameMenu from "./UsernameMenu"


const MainNav = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0()

    return (
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? <UsernameMenu /> :  <Button
            variant="ghost"
            className="text-white bg-orange-500 font-bold hover:bg-orange-600 hover:text-white"
            onClick={async () => await loginWithRedirect()}
            >
            Log In
        </Button> }
        </span>
       
    )
}

export default MainNav