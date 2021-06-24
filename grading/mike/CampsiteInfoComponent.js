import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

// Create a class component named CampsiteInfo inside it, and export it as the default. 
class CampsiteInfo extends Component {


    renderComments(comments) {
        // Checking if comment is null or undefine. If not, run this if statement.
        if(comments)
        {
            // Inside, if set up returns statement.
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                {comment.text}
                                <p>
                                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </div>
                        )})
                    }
                </div>
            );
        } 
        else
        {
            return <div />;
        }
    }

    // Give it a variable named "campsite" as the only parameter inside its parameter list.
    renderCampsite(campsite) {
        return (
            // add a JSX div element with the classes col-md-5 and m-1.
            <div className="col-md-5 m-1">
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

    // Inside its render method, check if an object with the name "campsite" (passed in via props) can be evaluated as truthy (e.g. is not null, is not undefined)
    render() {
        // Checking if an object with the name "campsite" passes through with using props.
        if(this.props.campsite)
        {
            // If so, then return an empty div that has the Bootstrap "row" class as an attribute
            return <div className="row">
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
            </div>
        }
        else
        {
            return <div />;
        }
    }
}

export default CampsiteInfo;