import React, { Component } from 'react'
import  createProject  from '../../store/actions/projectActions';
import { connect } from 'react-redux';

 class CreateProject extends Component {

    state = {
        bio102: '',
        che111: '',
        mat112: '',
        sat111: '',
        comp122: '',
        timeStamp: new Date()
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); 
        this.props.createProject(this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}  className='white'>
                    <h5 className='grey-text text-darken-3 center'>Course Registration</h5>
                    <h3>Courses Offered</h3>
                    <p>You are required to register only 5 courses as stipulated below using their course code</p>
                  
                    <div className='input-field'>
                        <label htmlFor='bio102'>Biology bio102</label>
                        <input type='text' id='bio102'  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='che111'>Chemisrty - che111</label>
                        <input type='text' id='che111'  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='mat112'>Mathematical Algebra - mat112</label>
                        <input type='text' id='mat112'  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='sat111'>Source of Life - sat111</label>
                        <input type='text' id='sat111'  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='comp122'>Computer - comp122</label>
                        <input type='text' id='comp122'  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Register Course</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
