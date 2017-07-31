import React, { Component } from 'react';
import { Grid, Row, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image } from 'react-native' ; 


class SearchResult extends Component {
    render() {
        return (
            
			<Card>
				<CardItem>
				<Left>
					<Thumbnail source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
					<Body>
					<Text>Cocktail Name</Text>
					<Text note>Cocktail Type</Text>
					</Body>
				</Left>
				</CardItem>
				<CardItem cardBody>
					<Image 
						source={{url: 'http://skinnygirlsweeteners.com/wp-content/themes/skinnygirlresponsive/images/iced-tea.png'}} 
						style={{height: 300, flex: 1}}/>
				</CardItem>
				<CardItem>
					<Left>
						<Button transparent>
						<Icon active name="thumbs-up" />
						<Text>12 Likes</Text>
						</Button>
					</Left>
					<Body>
						<Button transparent>
						<Icon active name="chatbubbles" />
						<Text>4 Comments</Text>
						</Button>
					</Body>
					<Right>
						<Button transparent>
						<Icon active name="ios-information-circle" />
						<Text>View Recipie</Text>
						</Button>
					</Right>
				</CardItem>
			</Card>
                                                                                                               
        )
    }
}
export default SearchResult;
