// libraries
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; 

// redux
import { actionAddDataToAPI, actionGetDataFromAPI } from "../../../config/redux/action"; 

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
    }
    
    async componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData')) 
        
        if(userData != null && userData != undefined){
            const res = await this.props.getNotes(userData.uid).catch(err => err); 

            console.log('dash ', res)
        }
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

                {
                    this.props.notes.length > 0 ? (
                        <Fragment> 
                            {
                                this.props.notes.map(note => {
                                    return (
                                    <div className="card-content">
                                        <p className="title">{note.data.title}</p>
                                        <p className="date">{note.data.date}</p>
                                        <p className="content">{note.data.content}</p>
                                    </div>
                                    )
                                }) 
                            }
                        </Fragment>
                    ) : null
                }

                {/* <Link to="/registrasi">Go To Register</Link>
                <Link to="/dashboard">Go To Dashboard</Link> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userData : state.user,
    notes : state.note,
})

const mapDispatchToProps = (dispatch) => ({
    saveNotes : (data) => dispatch(actionAddDataToAPI(data)),
    getNotes : (userId) => dispatch(actionGetDataFromAPI(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);