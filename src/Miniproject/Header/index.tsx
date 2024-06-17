import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { SiFireship } from "react-icons/si";
import { MdExplore } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import NavbarItem from "../../conponents/NavbarItem";



function Header() {
    return (
        <header>    
        <div className="nav container w-[1060px]">   
            <Link className="logo" to={`/Project`}>MOVIE<span>VENNIE</span></Link>     
            <div className="search-box h-10">
                <input type="search" name="" id="search-input" placeholder="Search Movie"/>
                <IoSearch className="text-xl"/>
            </div>
            
            <a href="#" className="user">
                <img src="https://www.didongmy.com/vnt_upload/news/05_2024/anh-27-meme-dang-yeu-didongmy.jpg" alt="" className="user-img"/>
            </a>

            <div className="navbar">
                <Link to={`/ProjectAptech`}><NavbarItem type="nav-active" icon={<AiOutlineHome />} label="Home" /></Link>
                <Link to={`/ProjectAptech/popular`}><NavbarItem icon={<SiFireship />} label="Popular" /></Link>
                <Link to={`/ProjectAptech/now_playing`}><NavbarItem icon={<MdExplore />} label="Now Playing" /></Link>
                <Link to={`/ProjectAptech/movies`}><NavbarItem icon={<PiTelevisionSimpleBold />} label="Movies" /></Link>
                <Link to={`/ProjectAptech/favourite`}><NavbarItem icon={<FaRegHeart />} label="Favourite" /></Link>             
            </div>
        </div>
    </header>
    );
}

export default Header;