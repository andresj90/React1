import React, { Component } from 'react'
import Cast from './Cast';
import ShowInfo from './ShowInfo';
import {connect} from 'react-redux'; 
import {fetchShowInfo, fetchShowDetails} from '../../redux/show/showActions';

class ShowContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    

        //component didmount after view renders
        // fetch('http://api.tvmaze.com/shows/2993/cast').then(response => {
        //     return response.json(); 
        // }).then((cast) => {
        //     this.setState({
        //         cast : cast, 
        //         isLoadingCast: !this.state.isLoadingCast,
        //     })
            
        // })
         
        this.props.fetchShowInfo();
        this.props.fetchShowDetails()
    }

    render() {
      
     
        if (!this.props.isLoadingCast && !this.props.isLoadingShow) {

            return (
                <div>
                     <ShowInfo show = {this.props.show}></ShowInfo>
                     <hr></hr>
                     <Cast cast={this.props.cast}></Cast>
                </div>
            )

        } else {
            return (<div>
                <h1>LOADING ..... </h1>
            </div>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        cast : state.showcast.cast,
        isLoadingCast:state.showcast.isLoadingCast, 
        show : state.showcast.show,
        isLoadingShow:state.showcast.isLoadingShow
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShowInfo : () => dispatch(fetchShowInfo()), 
        fetchShowDetails : () => dispatch(fetchShowDetails())
    }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer);