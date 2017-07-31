import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, TouchableOpacity }  from 'react-native'; 
import { Grid, Row, View, Button, Icon, Text, Item, Input, InputGroup} from 'native-base';
import { searchBox } from './../styles/common'; 
import Pill from './pill'; 

class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state= {
			selectedText: '' ,
			filterAlcohols: [],
			selectedAlcohols: [], 
			allAlcohols: [
				{id: 1, name: 'whiskey'}, 
				{id: 2, name: 'tequilla'},
				{id: 3, name: 'rum'},
				{id: 4, name: 'absinthe'},
				{id: 5, name: 'gin'},
			], 
			searchBoxOpen: false			
		}
	}

	removeSelectedItem(item){
		let newArray = [] ; 
		this.state.selectedAlcohols.forEach((alc, i) => {
			if(alc.id!=item.id){ newArray.push(alc)}	
		})
		this.setState({
			selectedAlcohols: newArray
		})
	}

	showItems(searchTerm){		
		
		const filterAlcohols = [];
		this.state.allAlcohols.forEach((item) => {
			const parts = searchTerm.trim().split(/[ \-:]+/);
			const regex = new RegExp(`(${parts.join('|')})`, 'ig');
			if (regex.test(item.name)) {
				filterAlcohols.push(item);
			}
		});

		this.setState({
			filterAlcohols: filterAlcohols, 
			searchBoxOpen: true, 
			selectedText: searchTerm
		})
	}

	selectedAlcohol(item){
		let newArray = this.state.selectedAlcohols;
		newArray.push(item);
		this.setState({selectedAlcohols : newArray});
	}

	getRow = item => (
		<TouchableOpacity
			onPress={() => this.selectedAlcohol(item)}
			style={{ paddingLeft: 20, paddingRight: 20 }} >
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text
					style={{
						flex: 1,
						paddingTop: 5,
						paddingBottom: 5,
					}}>
					{item.name}
				</Text>
			</View>
		</TouchableOpacity>
	);


	renderItems = () => {
		
		let component = null;
		if (this.state.filterAlcohols.length) {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		const dataSource = ds.cloneWithRows(this.state.filterAlcohols);
		component = (
			<ListView
			enableEmptySections
			dataSource={dataSource}
			renderRow={rowData => this.getRow(rowData)}
			/>
		);
		} else {
		component = (
			<View
			style={{ flexDirection: 'row', alignItems: 'center' }}
			>
			<Text
				style={{
				flex: 1,
				marginTop: 20,
				textAlign: 'center'
				}}
			>
				No item to display.
			</Text>
			</View>
		);
		}
		return component;
	};
	clearSearchBar(){
		this.setState({searchBoxOpen:false, selectedText: ''});
	}
	render() {
		
		const selectedItems = !this.state.selectedAlcohols.length ? null :this.state.selectedAlcohols.map((item,i) => {
			return <Pill item={item} key={i} removeSelectedItem={this.removeSelectedItem.bind(this)}/>
		})
		return (
			<Grid padded>
				<Row>
					<View style={searchBox.selectedView} >
						{selectedItems}
					</View>
				</Row>
				<View style={searchBox.selectorView}>
					<InputGroup style={searchBox.inputGroup}>
						<Icon name="ios-search"/>
						<Input
							onChangeText={searchTerm => this.showItems(searchTerm)}
							placeholder='whiskey, tequilla'
							value={this.state.selectedText}
						/>
						<TouchableOpacity onPress={this.clearSearchBar.bind(this)}>
							<Icon name="ios-close-circle"/>
						</TouchableOpacity>
					</InputGroup>   
					{this.state.searchBoxOpen &&
					<View
						style={{
						flex: 1,
						flexDirection: 'column',
						backgroundColor: '#fff',
						}}>
						{this.renderItems()}
					</View>
					}             
				</View>

			</Grid>                                                                                                  
		)
	}
}



function mapStateToProps(state) {
  return {
	  
  };
}

export default connect(mapStateToProps)(SearchBox);
