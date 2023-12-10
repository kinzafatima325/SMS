const UpdateStudent = () => {
    return (
        <div className="addStudent">
            <h3 className="heading">Update Student</h3>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="fatherName">Father Name</label>
                    <input type="text" name="fatherName" id="" placeholder="Enter Father Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="course">Course</label>
                    <select name="course" id="">
                        <option value="BSCS">BSCS</option>
                        <option value="BSIT">BSIT</option>
                        <option value="BSSE">BSSE</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="name" id="" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="" placeholder="Enter Phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea name="address" id="" cols="30" rows="10" placeholder="Enter Address"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Update Student" />
                </div>
            </form>
        </div>
    )
}

export default UpdateStudent