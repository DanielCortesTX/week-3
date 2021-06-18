import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedCampsite: null
    }
  }

  onCampsiteSelect(campsite) {
    this.setState({selectedCampsite: campsite});
  }

  renderSelectedCampsite(campsite) {
    if (campsite) {
      return (
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    const directory = this.props.campsites.map(campsite => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
          <Card onClick={() => this.onCampsiteSelect(campsite)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {directory}
        </div>
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedCampsite(this.state.selectedCampsite)}
          </div>
        </div>
      </div>
    );
  }
}

export default Directory





// import React, { Component } from 'react'
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// class CampsiteInfoComponent extends Component {
// 	renderCampsite(campsite){
// 		return(
// 			<div className="col-md-5 m-1">
// 				<Card onClick={() => this.onCampsiteSelect(campsite)}>
// 					<CardImg width="100%" src={campsite.image} alt={campsite.name} />
// 					<CardImgOverlay>
// 						<CardTitle>{campsite.name}</CardTitle>
// 					</CardImgOverlay>
// 				</Card>
// 			</div>
// 		)
// 	}

// 	renderComments(comments){
// 		if(comments){
// 			return (
// 				<div className="col=md=5 m-1">
// 					<h4>Comments</h4>
// 					{comments.map(comment => {
// 						return (
// 							<div>
// 								<p>{comment.text}</p>
// 								<p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
// 							</div>
// 						)					
// 					})}
// 				</div>
// 			)
// 		}
// 		return <div/>
// 	}

//   render() {
//     if(this.props.campsite){
//       return (
// 				<div className="row">
// 					{this.renderCampsite(this.props.campsite)}
// 					{this.renderComments(this.props.campsite.comments)}
// 				</div>
// 			)
// 		}   
// 		return <div/>
//   }
// }

// export default CampsiteInfoComponent