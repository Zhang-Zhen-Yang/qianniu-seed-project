'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch, ListView } from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'
import { listData } from './list.data'
import ListItem from './list.item.jsx'

class List extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <View style={[styles.container,{alignItems:'stretch',justifyContent:'flex-start'}]}>
                <ListView 
                dataSource={listData}
                renderRow={this._renderRow}></ListView>
            </View>
        );
    }
    componentDidMount(){
        //Modal.alert("didMount") 
    }
    _renderRow(item){
        return (
            <ListItem item={item}></ListItem>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
   
};

const mapStateToProps = (state,ownProps) => {
    return {
        counter:state.counter,
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        add:()=>{
            dispatch(
                function(dispatch,getState){
                    setTimeout(()=>{
                        dispatch({type:'ADD'});
                    },3000);
                }
           )
        },
    }
}
const ListConnect = connect(mapStateToProps,mapDispatchToProps)(List);

export default ListConnect;

