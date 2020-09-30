import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
    
    
    
    componentDidMount(){
        // const map = ReactDOM.findDOMNode(this.ref.map)
        const mapStart = {
            center: { lat: 40.775566, lng: -73.960456 },
            zoom: 13 
        };

        // const map = this.refs.map-main
        const mapNode = ReactDOM.findDOMNode(this.refs.map)
        this.map = new google.maps.Map(this.mapNode, mapStart);
    }


    render(){
        
        return(
            <>
            <div id="map-main" ref={ map => this.mapNode = map} > 
            </div>
            </>
        )
    }
}

export default Map;