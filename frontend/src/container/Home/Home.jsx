// libraries
import React, {Component, Fragment} from "react"; 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import BlogPost from "../Page/BlogPost/BlogPost";
import DetailPost from "../Page/BlogPost/DetailPost";
import Product from "../Page/Product/Product";
import Youtube from "../Page/Youtube/Youtube";
import LifeCycleComponent from "../Page/LifeCycleComponent/LifeCycleComponent";

// style
import './Home.css';

class Home extends Component {
    state = {
        showComponent: true
    }
    
    componentDidMount(){ 
        // setTimeout(()=>{
        //     this.setState({
        //         showComponent : false
        //     }) 
        // }, 15000)
    }

    render(){
        return (
            <BrowserRouter>
                <div className="navigation">
                    <Link to="/*">Blog Post</Link> 
                    <Link to="/product">Product</Link>
                    <Link to="/youtube">Youtube</Link>
                    {
                        this.state.showComponent ? <Link to="/lifecycle">Life Cycle Component</Link> : null
                    }  
                </div>
                
                <Routes>
                    <Route path="/*" element={<BlogPost />} />
                    <Route path="/detail-post/:id" element={<DetailPost />} />


                    <Route path="/product" element={<Product />} />
                    <Route path="/youtube" element={<Youtube />} /> 
                    <Route path="/lifecycle" element={<LifeCycleComponent />} />  
                </Routes>
            </BrowserRouter>
        )  
    }
}

export default Home;