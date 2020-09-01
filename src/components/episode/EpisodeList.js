import React, { Fragment } from 'react';
import { Table } from 'reactstrap';
import './style.scss';

function EpisodeList({ max, min, episodes }) {
    
    let episodeList; 
    let seasons = []; 
    let position; 
  
    for (let index = min; index <= max; index++) {
         seasons.push(index); 
        
    }

  
    episodeList = seasons.map((index) => {
         position=  index; 
         return (
            <Fragment class="EpisodeTable">
                <h1>Season {index}</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Scene</th>
                            <th>Episode</th>
                            <th>Date</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {episodes.map((episode) => {
                             if(episode.season ===  position && episode.image !=null) {
                                return (
                                  <tr> 
                                    <td><img src={episode.image.medium}></img></td>
                                    <td>{episode.number}</td>
                                    <td>{episode.airdate}</td>               
                                    <td>{episode.name}</td> 
                                  </tr>  
                                ) }
                        })} 
                    </tbody>
                   
                </Table>
            </Fragment>
        )

    })


    return  episodeList; ;
}



export default EpisodeList
