'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch } from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'

class ListItem extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <View style={styles.listItem}>                
                <Image src={this.props.item.img} style={{width:200,height:200}} resizeMode="cover"></Image>
                <View style={{alginItems:'center',flex:1,paddingLeft:10,paddingRight:10}}>
                    
                    <Text text-overflow='ellipsis' style={{flex:1,fontSize:'18wx',lines:2,textOverflow:'ellipsis',color:'#666666'}}>{this.props.item.title}</Text> 
                    
                    <Text style={{fontSize:'16wx',color:'orange',fontWeight:'bold'}}>{this.props.item.price}</Text>
                </View>
                
            </View>
        );
    }
    componentDidMount(){
        
    }
}

const styles = {
    listItem: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        padding:2
    },
   
};



export default ListItem;
