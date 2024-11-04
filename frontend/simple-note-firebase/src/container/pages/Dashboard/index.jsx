// libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; 

// redux
import { actionAddDataToAPI } from "../../../config/redux/action"; 

// style
import './Dashboard.css'

class Dashboard extends Component {
    state = {
        title : '',
        content : '',
        date : new Date().getTime(),
    }
 
    handleChangeData = (element) => {  
        this.setState({
            [element.target.id] : element.target.value
        })
    }

    handleSavedata = () => {  
        const data = {...this.state};
        data['userId'] = this.props.userData.uid;

        this.props.saveNotes(data);

        console.log(data)
    }
    
    render(){
        return(
            <div className="container">
                <p>Dashboard Page</p>
                <div className="input-form">
                    <input placeholder="Title" id="title" className="input-title" value={this.state.title} onChange={this.handleChangeData} />
                    <textarea placeholder="Content" id="content" className="input-content" value={this.state.content} onChange={this.handleChangeData} ></textarea>
                    <button className="btn-save" onClick={this.handleSavedata}>Simpan</button>
                </div>
                
                <hr />

                <div className="card-content">
                    <p className="title">Title</p>
                    <p className="date">Title</p>
                    <p className="content">Content Notes</p>
                </div>

                {/* <Link to="/registrasi">Go To Register</Link>
                <Link to="/dashboard">Go To Dashboard</Link> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userData : state.user
})

const mapDispatchToProps = (dispatch) => ({
    saveNotes : (data) => dispatch(actionAddDataToAPI(data))
})

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);