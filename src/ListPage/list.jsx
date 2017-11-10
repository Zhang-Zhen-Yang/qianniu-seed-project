'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch, ListView, ScrollView, RefreshControl, TouchableHighlight } from 'nuke';
//import GoTop from 'rax-gotop';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'
import { listData } from './list.data'
import ListItem from './list.item.jsx'
import ListHeader from './list.header.jsx'

class List extends Component {
    constructor(props) {
      super(props);
      this.state={
          isRefreshing:false,
          refreshText:'刷新中...'
      }
    }
    render() {
        return ( 
            <View style={[styles.container,{alignItems:'stretch'/*,justifyContent:'flex-start'*/}]}>
                
                
                <ListView 
                    ref={(ref)=>{this.list = ref}}
                    renderHeader={this._renderHeader}
                    renderFooter={this._renderFooter}
                    dataSource={this.props.listData/*listData*/}
                    renderRow={this._renderRow.bind(this)}
                    onEndReached={()=>{this.endReached()}}>                    
                </ListView>

               
                {/*<View style={styles.goTopWarp} >
                    <Image 
                    onClick={()=>{this._goTop()}}
                        style={styles.goTop}
                        source={{uri:'https://gtms03.alicdn.com/tps/i3/TB1rrfVJVXXXXalXXXXGEZzGpXX-40-40.png'}}>
                    </Image>
                </View>*/}
                <Text>当前页{this.props.currentPage}</Text>         
                
            
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
            <ListItem item={item} index={index} actionPress={()=>{Modal.alert(index)}}></ListItem>
        )
    }
    endReached(){
        Modal.toast('endReached');
        this.props.LoadMoreData();
    }
    handleRefresh(){
        Modal.toast('refresh');
    }
    _goTop(){
        //this.list.scrollTo({y:0});
        Modal.alert('dd');
        /*for(let i in this.list){
            console.log(i);
        }*/
    }
    _goTopClick(){
        
        //this.list//.scrollTo({y:0});
    }

}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    goTopWarp:{
        borderWidth:1,
        borderColor:'gray',
        borderStyle:'solid',
        borderRadius:40,
        width:82,
        height:82,
        padding:15,
        position:'fixed',
        right:50,
        bottom:50,
        backgroundColor:'white'
    },
    goTop:{
        width:50,
        height:50,
    }
   
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
        },
        goTop:()=>{
            dispatch(
                function(dispatch,getState){
                    
                }
            )
        }
    }
}
const ListConnect = connect(mapStateToProps,mapDispatchToProps)(List);

export default ListConnect;

