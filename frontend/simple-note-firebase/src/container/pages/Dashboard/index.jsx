// libraries
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; 

// redux
import { actionAddDataToAPI, actionGetDataFromAPI, actionUpdateDataToAPI } from "../../../config/redux/action"; 

// style
import './Dashboard.css'

class Dashboard extends Component {
    state = { 
        id : '',
        title : '',
        content : '',
        date : new Date().getTime(),
        textButton : 'save'
    }
 
    handleChangeData = (element) => {  
        this.setState({
            [element.target.id] : element.target.value
        })
    }

    handleSetForm = (note) => { 
        this.setState({
            id : note.id,
            title : note.data.title,
            content : note.data.content,
            date : note.data.date,
            textButton: 'update'
        })
    }

    handleSavedata = async() => {  
        const data = {...this.state}; 

        if(this.props.userData.uid !== undefined && this.props.userData.uid !== null){
            data['userId'] = this.props.userData.uid;
    
            if(this.state.textButton == 'save'){
                const res = await this.props.saveNotes(data).catch(err => err) 
            } else {
                const res = await this.props.updateNotes(data).catch(err => err);
                console.log('dash', res)
            }
        } else {
            alert('silahkan login')
        }

    }
     
    handleCancleForm = () => { 
        this.setState({
            id : '',
            title : '',
            content : '',
            date : '',
            textButton: 'save'
        })
    }

    async componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData')) 
        
        if(userData != null && userData != undefined){
            const res = await this.props.getNotes(userData.uid).catch(err => err);  
        }
    }

    render(){
        return(
            <div className="container">
                <p>Dashboard Page</p>
                <div className="input-form">
                    <input placeholder="Title" id="title" className="input-title" value={this.state.title} onChange={this.handleChangeData} />
                    <textarea placeholder="Content" id="content" className="input-content" value={this.state.content} onChange={this.handleChangeData} ></textarea>
                    
                    <div className="action-wrapper">
                        <button className="btn-save" onClick={this.handleSavedata}>{this.state.textButton}</button>
                        {   
                            this.state.textButton == 'update' ? 
                                (<button className="btn-cancel" onClick={this.handleCancleForm}>Cancel</button>)
                            : null
                        } 
                    </div>
                        
                </div>
                
                <hr />

                {
                    this.props.notes.length > 0 ? (
                        <Fragment> 
                            {
                                this.props.notes.map(note => {
                                    return (
                                    <div className="card-content" key={note.id}>
                                        <p className="title">{note.data.title}</p>
                                        <p className="date">{note.data.date}</p>
                                        <p className="content">{note.data.content}</p>
                                        <button id="btn-edit" onClick={ () => this.handleSetForm(note) }>Edit</button>
                                        <button id="btn-delete">Delete</button>
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
    updateNotes : (data) => dispatch(actionUpdateDataToAPI(data)),
    getNotes : (userId) => dispatch(actionGetDataFromAPI(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);