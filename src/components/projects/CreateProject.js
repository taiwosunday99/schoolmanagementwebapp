import React, { Component } from 'react'
import  createProject  from '../../store/actions/projectActions';
import { connect } from 'react-redux';

 class CreateProject extends Component {

    state = {
        biology: '',
        chemistry: '',
        mathematics: '',
        commerce: '',
        computer: '',
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
                        <label htmlFor='biology'>Biology bio102</label>
                        <input type='text' id='biology'  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='chemistry'>Chemisrty - che111</label>
                        <input type='text' id='chemistry'  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='mathematics'>Mathematical Algebra - mat112</label>
                        <input type='text' id='mathematics'  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='commerce'>Source of Life - sat111</label>
                        <input type='text' id='commerce'  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='computer'>Computer - comp122</label>
                        <input type='text' id='computer'  onChange={this.handleChange} />
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
