import SearchBar from "./SearchBar.jsx"
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => (
    <nav>
        <Link to='/about' >About</Link>
        <Link to='/home' >Home</Link>
        <SearchBar onSearch={onSearch} />
    </nav>
)

export default Nav;