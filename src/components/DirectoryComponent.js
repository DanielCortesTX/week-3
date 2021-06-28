import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({campsite}) {
    return (
        <Card >
          <Link to={`/directory/${campsite.id}`}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite}  />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
              <div className="col">
                <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Directory</BreadcrumbItem>
                </Breadcrumb>
                <h2>Directory</h2>
                <hr />
              </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;








// import React, { Component } from 'react'
// import CampsiteInfoComponent from './CampsiteInfoComponent'
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// class Directory extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       selectedCampsite: null
//     }
//   }

//   onCampsiteSelect(campsite) {
//     this.setState({selectedCampsite: campsite});
//   }

//   render() {
//     const directory = this.props.campsites.map(campsite => {
//       return (
//         <div key={campsite.id} className="col-md-5 m-1">
//           <Card onClick={() => this.onCampsiteSelect(campsite)}>
//             <CardImg width="100%" src={campsite.image} alt={campsite.name} />
//             <CardImgOverlay>
//               <CardTitle>{campsite.name}</CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </div>
//       );
//     });

//     return (
//       <div className="container">
//         <div className="row">
//           {directory}
//         </div>
//         <CampsiteInfoComponent campsite={this.state.selectedCampsite}/>
//       </div>
//     );
//   }
// }

// export default Directory