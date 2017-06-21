'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch } from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'

class Empty extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <View style={styles.container}>             
                <Text>空文件</Text>
            </View>
        );
    }
    componentDidMount(){
        Modal.alert("didMount") 
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
           dispatch({type:'ADD'}) 
        },
    }
}
const EmptyConnect = connect(mapStateToProps,mapDispatchToProps)(Empty);


export default EmptyConnect;
