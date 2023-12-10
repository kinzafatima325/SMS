import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

const Courses = () => {
    return (
        <div className="student">
            <h3 className="heading">Courses Management</h3>
            <div className="table-top">
                <div className="table-heading">Courses list</div>
                <Link to={'/add-course'} className="add-btn">Add Course</Link>
            </div>
            <div className="table">
                <div className="row">
                    <div className="data">Sr.No.</div>
                    <div className="data">Course Title</div>
                    <div className="data">Action</div>
                </div>
                <div className="row">
                    <div className="data">1</div>
                    <div className="data">Web Development</div>
                    <div className="data">
                        <Link className="edit" to='/update-course'><CiEdit /></Link>
                        <button className="delete"><MdDelete /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="data">1</div>
                    <div className="data">Android Development</div>
                    <div className="data">
                        <Link className="edit" to='/update-course'><CiEdit /></Link>
                        <button className="delete"><MdDelete /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="data">1</div>
                    <div className="data">Software Development</div>
                    <div className="data">
                        <Link className="edit" to='/update-course'><CiEdit /></Link>
                        <button className="delete"><MdDelete /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="data">1</div>
                    <div className="data">IOS Development</div>
                    <div className="data">
                        <Link className="edit" to='/update-course'><CiEdit /></Link>
                        <button className="delete"><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses