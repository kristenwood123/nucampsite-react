import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { LocalForm, Errors } from 'react-redux-form'
import { Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa'
import { Control } from 'react-redux-form';
import { Loading } from './Loading'
import { baseUrl } from '../shared/baseUrl'
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const max = (len) => (val) => !val || val.length <= len;
const min = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.addComment(
      this.props.campsiteId,
      values.rating,
      values.author,
      values.text
    );
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.toggleModal} outline className='fa-lg'><FaPencilAlt/> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
          <LocalForm>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <Control.select
                model='.rating'
                id='rating'
                name='rating'
                className='form-control'>
                  <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
              </Control.select>
            </div>

            <div className="form-group">
              <label htmlFor="author">Your Name</label>
              <Control.text 
                model='.author'
                id='author'
                name='author'
                className='form-control'
                placeholder='Your Name'
                validators={{
                  min: min(2),
                  max: max(15)
                }}
              /> 
              <Errors
                className="text-danger"
                model=".author"
                show="touched"
                component="div"
                messages={{
                    min: 'Must be at least 2 characters',
                    max: 'Must be 15 characters or less',
                  }}
                />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment</label>
                <Control.textarea
                  model='.comment'
                  id='comment'
                  name='comment'
                  className='form-control'>
                </Control.textarea>
              </div>
              <Button onSubmit={this.handleSubmit}>Submit Comment</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

  function RenderCampsite ({campsite}) {
    return (
      <div className="col-md-5 m-1">
        
        <Card>
          <CardImg top src={baseUrl + campsite.image} alt={campsite.name}/>
            <CardBody>
                <CardText>{campsite.description}</CardText>
            </CardBody>
         </Card>
      </div>
    )
  }

  function RenderComments ({comments, addComment, campsiteId}) {
    if(comments) {
      return(
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          <Stagger in>
            {
              comments.map(comment => {
              return (
                <Fade in key ={comment.id}>
                <div>
                <p>{comment.text}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
                </Fade>
              )
            })
            }
            </Stagger>
          <CommentForm campsiteId={campsiteId} addComment={addComment}/>
        </div>
      )
    }
  }

  function CampsiteInfo(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments 
                      comments={props.comments}
                      addComment={props.addComment}
                      campsiteId={props.campsiteId}
                    />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;