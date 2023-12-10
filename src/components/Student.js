import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

const Student = () => {
    return (
        <div className="student">
            <h3 className="heading">Students Management</h3>
            <div className="table-top">
                <div className="table-heading">Students list</div>
                <Link to={'/add-student'} className="add-btn">Add Student</Link>
            </div>
            <div className="table">
                <div className="row">
                    <div className="data">Sr.No.</div>
                    <div className="data">Name</div>
                    <div className="data">Father Name</div>
                    <div className="data">Course</div>
                    <div className="data">Action</div>
                </div>

                <div className="row">
                    <div className="data">1</div>
                    <div className="data">Kinza Fatima</div>
                    <div className="data">Akbar Ali</div>
                    <div className="data">BSCS</div>
                    <div className="data">
                        <Link className="edit" to='/update-student'><CiEdit /></Link>
                        <button className="delete"><MdDelete /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="data">1</div>
                    <div className="data">Kinza Fatima</div>
                    <div className="data">Akbar Ali</div>
                    <div className="data">BSCS</div>
                    <div className="data">
                        <Link className="edit" to='/update-student'><CiEdit /></Link>
                        <button className="delete"><MdDelete /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="data">1</div>
                    <div className="data">Kinza Fatima</div>
                    <div className="data">Akbar Ali</div>
                    <div className="data">BSCS</div>
                    <div className="data">
                        <Link className="edit" to='/update-student'><CiEdit /></Link>
                        <button className="delete"><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student