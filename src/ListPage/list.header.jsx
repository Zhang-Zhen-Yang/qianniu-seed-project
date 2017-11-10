'use strict';

import { createElement, Component, render} from 'rax';
import {View, Text, Modal, RefreshControl } from 'nuke';


class ListHeader extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <RefreshControl style={{
                height:"80rem",
                width:"750rem",
                backgroundColor:"#cccccc",
                justifyContent:"center",
                alignItems:"center"}} 
            isRefreshing={true} 
            refreshing ={true}
            onRefresh={this.handleRefresh}>
                <Text onclick={this.rfclick}>刷新</Text>
            </RefreshControl>
        
        );
    }
    componentDidMount(){
        
    }
    handleRefresh(){
        console.log('ffffffffffffffffff')
        Modal.toast('refresh',0)
    }
    rfclick(){
        console.log('ffffffffffffffffff')
    }
}

const styles = {
    itemHeader: {
        
    },
   
};


export default ListHeader;
