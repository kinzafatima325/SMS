const AddCourse = () => {
    return (
        <div className="addStudent">
            <h3 className="heading">Add Course</h3>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Course Title</label>
                    <input type="text" name="name" id="" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Course" />
                </div>
            </form>
        </div>
    )
}

export default AddCourse