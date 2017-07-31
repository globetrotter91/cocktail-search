import React, { Component } from 'react';
import { connect } from 'react-redux';
import { homePage } from './../styles/common'; 
import getTheme from './../../native-base-theme/components';
import { StyleProvider, Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import commonColor from './../../native-base-theme/variables/commonColor';
import SearchBox from './searchBox';
import SearchResultsBox from './searchResultsBox';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { searching: false, ingredientsInput: '' }
  }

  searchPressed() {
    this.setState({ searching: true })
    this.props.fetchRecipes(this.state.ingredientsInput).then( (res) => {
      this.setState({searching: false })
    });
  }

  recipes() {
    return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key])
  }

  render() {
    return (
      <StyleProvider  style={getTheme(commonColor)}>  
        <Container>        
          <Content padded style={homePage.content}>
            <SearchBox />
            <SearchResultsBox />
          </Content>
          <Footer>
            <FooterTab>
              <Button full success>
                <Text style={{color: '#fff'}}>Find Cocktails</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>                                                                                                 
    )
  }
}

function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps)(Home);
