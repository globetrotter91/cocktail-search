import React from 'react'; 
import { pillStyle } from './../styles/common'; 
import { View, Text, Icon, Button } from 'native-base';
import { TouchableOpacity } from 'react-native';

class Pill extends React.Component{
    render(){
        const { item } = this.props;
        return(
            <View style={[pillStyle.base, {width: item.name.length * 6 + 60}]} >
                <Text style={pillStyle.text}>
                {item.name}
                </Text>
                <TouchableOpacity onPress={() => { this.props.removeSelectedItem(item); }}>
                    <Icon name="ios-close-circle" style={pillStyle.icon}/>
                </TouchableOpacity>
            </View> 
        )
    }
}

export default Pill