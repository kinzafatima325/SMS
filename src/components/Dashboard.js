const Dashboard = () => {
    const students = 10;
    const courses = 5;

    return (
        <div>
            <h3 className="heading">Dashboard</h3>
            <div className="cards">
                <div className="card-single">
                    <div>
                        <h1>{students}</h1>
                        <span>Students</span>
                    </div>
                    <div>
                        <span className="las la-users"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>{courses}</h1>
                        <span>Courses</span>
                    </div>
                    <div>
                        <span className="las la-clipboard"></span>
                    </div>
                </div>
            </div>
            <div className="chart" id="chart">

            </div>
        </div>
    );
}

export default Dashboard