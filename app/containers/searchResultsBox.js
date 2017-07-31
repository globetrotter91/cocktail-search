import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'native-base';
import { Image } from 'react-native' ; 
import SearchResult from './searchResult' ;

class SearchResultsBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
          cocktails : [] 
        }
    }

    render() {
        return (
            <Grid style={{marginTop:20, backgroundColor:'#ececec'}}>
                <Row>
                    <SearchResult />
                </Row>
            </Grid>                                                                                                  
        )
    }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(SearchResultsBox);
