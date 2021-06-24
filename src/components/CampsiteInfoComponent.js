import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


class CampsiteInfo extends Component{ 
        constructor(props) {
            super(props);
            this.state = {
            selectedCampsite: null};
        }

        onCampsiteSelect(campsite) {
            this.setState({selectedCampsite: campsite});
        }



renderCampsite(campsite) {
    if (campsite) {
        return (
            <div className="col-md-5  m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );
    }
    return <div />;
}


renderComments(comments) {
    if (comments) {
        return (
            <div className='col-md-5 m-1'>
                <h4>Comments</h4>
                    {comments.map(comment => { return (
                        <div key ={comment.id}>
                            <div>{comment.text}</div>
                            <div> --{comment.author},
                            {new Intl.DateTimeFormat('en-US',
                            { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </div><br/>
                        </div>
                    )})
                }
            </div>
            )
        }
    return <div/>
}  



  render() {
    if (this.props.campsite) {
            return (
                <div className='row'>
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
                </div>
                    )
            }   
                return (<div />) 
                    
    }
}
export default CampsiteInfo;









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
// 								<p>{comment.text}!!!!!</p>
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