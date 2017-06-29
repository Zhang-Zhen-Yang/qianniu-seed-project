'use strict';

import {createElement, Component, render } from 'rax';
import {View, Text, Modal, NumberPicker} from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'


class TabbarDemo extends Component {
    constructor(props) {
      super(props);
      this.state={
          text:10
      }
    }
    render() {
        
        return (
            <View style={styles.container}>             
                <Text>
                    {this.state.text}
                </Text>
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
    }   
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
const TabbarDemoContainer = connect(mapStateToProps,mapDispatchToProps)(TabbarDemo);


export default TabbarDemoContainer;
