import React, { Component } from 'react'
import "./cnn_explainer_style.css"
export default class CNNExplainerComponent extends Component {
    render() {
        return (
            
                <iframe src="http://cnn-explainer.surge.sh/"
            frameborder="0" 
            marginheight="0" 
            marginwidth="0" 
            width="100%" 
            height="100%" 
            scrolling="auto"> 
            </iframe> 
           
        )
    }
}
