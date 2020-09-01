import React, { Component } from 'react'
import EpisodeList from './EpisodeList';
import {connect} from 'react-redux';
import {fetchEpisodeList} from '../../redux'

export class EpisodeContainer extends Component {
    constructor() {
        super(); 
        
        this.state = {
            episodes : [], 
            isLoading : false,
            episodeList: [], 
            min: 0, 
            max: 0,

        }
    }
    componentDidMount() {

         this.props.fetchEpisodeList();
         
         
        //  .then(
        //     this.setState({
        //         isLoading: !this.props.isLoading,
        //         episodeList: this.props.episodes.map((episode) => {
        //             return episode.season
        //         }).sort(), 
               
        //     })
        //  )
 

        fetch('http://api.tvmaze.com/shows/2993/episodes').then(response => {
            return response.json(); 
        }).then((episodes) => {
            this.setState({
                episodes : episodes, 
                isLoading: this.state.isLoading,
                episodeList: episodes.map((episode) => {
                    return episode.season
                }).sort(), 
               
            })

            this.setState({
                min : this.state.episodeList[0], 
                max: this.state.episodeList[this.state.episodeList.length-1]
            })
            
        })
    }

    static getDerivedStateFromProps(props, state) {
        
    }

    render() {
        let {episodes, isLoading, min, max} = this.state;   
        {console.log(this.props.isLoading)}   
        if(!isLoading){ 
            return(
                <div>
                    <h1>DATA LOADING ...</h1>
                </div>
            )
        }else { 
            return (
                <div>
                   <EpisodeList  min={min} max={max} episodes={episodes}></EpisodeList>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        episodes : state.episode.episodeList,
        isLoading : state.episode.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEpisodeList : () => dispatch(fetchEpisodeList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeContainer);