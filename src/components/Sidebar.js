import { IoLogoPolymer } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar open">
            <div className="logo-details">
                <IoLogoPolymer className="logo-icon" />
                <span className="logo_name">SMS</span>
            </div>
            <nav className="nav">
                <div className="nav-item">
                    <Link to={'/'}>
                        <div className="nav-icon"><AiFillDashboard /></div>
                        <div className="nav-link">
                            <span className="link_name" >Dashboard</span>
                        </div>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to={'/student'}>
                        <div className="nav-icon"><AiFillDashboard /></div>
                        <div className="nav-link">
                            <span className="link_name" >Students</span>
                        </div>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to={'/courses'}>
                        <div className="nav-icon"><AiFillDashboard /></div>
                        <div className="nav-link">
                            <span className="link_name" >Courses</span>
                        </div>
                    </Link >
                </div>
                <div className="nav-item">
                    <Link to={'/attendance'}>
                        <div className="nav-icon"><AiFillDashboard /></div>
                        <div className="nav-link">
                            <span className="link_name" >Attendance</span>
                        </div>
                    </Link >
                </div>
            </nav >
        </div >
    );
};

export default Sidebar;
