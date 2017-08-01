import React from 'react'; 
import { pillStyle } from './../styles/common'; 
import { View, Text, Icon, Button } from 'native-base';
import { TouchableOpacity } from 'react-native';

class Pill extends React.Component{
    render(){
        const { item } = this.props;
        return(
            <View style={[pillStyle.base, {width: item.length * 6 + 60}]} >
                <Text style={pillStyle.text}>
                {item}
                </Text>
                <TouchableOpacity onPress={() => { this.props.removeSelectedItem(item); }}>
                    <Icon name="ios-close-circle" style={pillStyle.icon}/>
                </TouchableOpacity>
            </View> 
        )
    }
}

export default Pill