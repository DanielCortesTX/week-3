import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'; 


class CampsiteInfo extends Component {

    renderComments(comments){

        if (comments){
            return (
                <div class="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return (<div>
                            <div>
                                {comment.text}
                            </div>
                            <div>
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </div>

                        </div>
                         ) })}
                </div>
            )
        }
        return <div></div>
    } 

    renderCampsite (campsite) {
        return (<div class='col-md-5 m-1'>
             <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
        </div>)
        return <div></div>
    } 

    render(){
       if (this.props.campsite) {
           return <div class="row">
               {this.renderCampsite(this.props.campsite)}
               {this.renderComments(this.props.campsite.comments)}
           </div>
       } else {
           return <div/>
       }
    }

}





export default CampsiteInfo;