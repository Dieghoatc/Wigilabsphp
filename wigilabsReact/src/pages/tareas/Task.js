import  React from  'react'

class Task extends React.Component{
    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col md-4">
                        <div className="card card-body">
                            <form action="save_task.php" method="POST">
                                <div className="form-group">
                                    <input type="text" className="form-control" name= "title" placeholder= "Task Title" autofocus/>
                                </div>
                                <div className="form-group">
                                    <textarea name="description" rows="2" className="form-control" placeholder="Task Description"></textarea>
                                </div>
                                <input type="submit" name="save_task" className="btn btn-success btn-block" value="Save Task"/>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8">

                    </div>
                </div>
            </div>
        );
    }
}

export default Task