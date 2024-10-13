// libraries
import React, {Component, Fragment, createContext} from "react"; 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 

// pages
import BlogPost from "../Page/BlogPost/BlogPost";
import DetailPost from "../Page/BlogPost/DetailPost";
import Product from "../Page/Product/Product";
import Youtube from "../Page/Youtube/Youtube";
import LifeCycleComponent from "../Page/LifeCycleComponent/LifeCycleComponent";
import Hooks from "../Page/Hooks/Hooks";

// style
import './Home.css';

// context
import GlobalProvider from "../../context/GlobalContext";

class Home extends Component {
    state = {
        showComponent: true, 
    }
      
    render(){
        return (
            <BrowserRouter> 
                <Fragment>
                    <div className="navigation">
                        <Link to="/*">Blog Post</Link> 
                        <Link to="/product">Product</Link>
                        <Link to="/youtube">Youtube</Link>
                        {
                            this.state.showComponent ? <Link to="/lifecycle">Life Cycle Component</Link> : null
                        }  
                        <Link to="/hooks">Hooks</Link>
                    </div>
                    
                    <Routes>
                        <Route path="/*" element={<BlogPost />} />
                        <Route path="/detail-post/:id" element={<DetailPost />} />
 
                        <Route path="/product" element={<Product />} />
                        <Route path="/youtube" element={<Youtube />} /> 
                        <Route path="/lifecycle" element={<LifeCycleComponent />} />  
                        <Route path="/hooks" element={<Hooks />} />
                    </Routes>
                </Fragment>  
            </BrowserRouter>
        )  
    }
}

export default GlobalProvider(Home);