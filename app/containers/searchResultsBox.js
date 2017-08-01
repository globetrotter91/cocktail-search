import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'native-base';
import { Image } from 'react-native' ; 
import SearchResult from './searchResult' ;

class SearchResultsBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Grid style={{marginTop:20, backgroundColor:'#ececec'}}>
                <Row>
                    <SearchResult cocktails={this.props.searchedCocktails}/>
                </Row>
            </Grid>                                                                                                  
        )
    }
}

function mapStateToProps(state) {
  return {
        searchedCocktails: state.cocktails.listOfCocktails
  };
}

export default connect(mapStateToProps, {})(SearchResultsBox);
