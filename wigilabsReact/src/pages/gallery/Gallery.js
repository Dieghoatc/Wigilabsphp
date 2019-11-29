import  React from  'react'

import "./Gallery.css"
class Gallery extends React.Component{
    render() {
        return(
            <div className= "container">
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card mt-2">
                            <img src="https://cdn.pixabay.com/photo/2019/10/30/17/54/formula-1-4590183_960_720.jpg" alt="img"/>
                        </div>
                        <div className="card mt-2">
                            <img src="https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918407_960_720.jpg" alt="img"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card mt-2">
                            <img src="https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408_960_720.jpg" alt="img"/>
                        </div>
                        <div className="card mt-2">
                            <img src="https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_960_720.jpg" alt="img"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card mt-2">
                            <img src="https://cdn.pixabay.com/photo/2014/05/03/00/56/summerfield-336672_960_720.jpg" alt="img"/>
                        </div>
                        <div className="card mt-2">
                            <img src="https://cdn.pixabay.com/photo/2015/08/13/17/24/vintage-1950s-887272_960_720.jpg" alt="img"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card mt-2">
                            <img src="https://cdn.pixabay.com/photo/2014/09/03/20/15/legs-434918_960_720.jpg" alt="img"/>
                        </div>
                        <div className="card mt-2">
                            <img src="https://cdn.pixabay.com/photo/2014/10/22/17/22/ford-498244_960_720.jpg" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Gallery