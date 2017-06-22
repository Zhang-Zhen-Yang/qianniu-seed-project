'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch, ListView } from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'
import { listData } from './list.data'
import ListItem from './list.item.jsx'
import ListHeader from './list.header.jsx'

class List extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <View style={[styles.container,{alignItems:'stretch',justifyContent:'flex-start'}]}>
                {/*<Text>{JSON.stringify(this.props.listData)}</Text>*/}
                {<Text>当前页{this.props.currentPage}</Text>}
                <ListView 
                renderHeader={this._renderHeader}
                renderFooter={this._renderFooter}
                dataSource={this.props.listData/*listData*/}
                renderRow={this._renderRow}
                onEndReached={()=>{this.endReached()}}></ListView>
            </View>
        );
    }
    componentDidMount(){
        //Modal.alert("didMount") 
    }
    _renderHeader(){
        return (
            <ListHeader></ListHeader>
        )
    }
    _renderFooter=()=>{
        return (
            <View style={{alignItems:'center'}}>
                <Text>{this.props.loadEnd?'没有更多了':'loading'}</Text>
            </View>
        )
    }
    _renderRow(item,index){
        return (
            <ListItem item={item} actionPress={()=>{Modal.alert(index)}}></ListItem>
        )
    }
    endReached(){
        Modal.alert('endReached');
        this.props.LoadMoreData();
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
        listData:state.listData.listData,
        loading:state.listData.loading,
        loadEnd:state.listData.loadEnd,
        currentPage:state.listData.currentPage
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        LoadMoreData:()=>{
            dispatch(
                function(dispatch,getState){
                    //Modal.alert('laod');
                    dispatch({type:'Loading'})
                    setTimeout(()=>{
                        dispatch({type:'LoadMoreData',res:listData})
                    },2000)
                }
            )
        }
    }
}
const ListConnect = connect(mapStateToProps,mapDispatchToProps)(List);

export default ListConnect;

