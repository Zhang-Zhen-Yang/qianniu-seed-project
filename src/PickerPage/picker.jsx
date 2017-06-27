'use strict';

import {createElement, Component, render } from 'rax';
import {View, Text, Modal, NumberPicker} from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'


class TabbarDemo extends Component {
    constructor(props) {
      super(props);
      this.state={
          NumberPickerValue:10
      }
    }
    render() {
        
        return (
            <View style={styles.container}>             
                <NumberPicker disabled min={1} max={1000} defaultValue={2}  step={3}/>
                <NumberPicker  min={1} max={1000} defaultValue={2}  step={3}/>
                <NumberPicker  min={1} max={1000} value={this.state.NumberPickerValue} onChange={(val)=>{this.changeHandle(val)}} step={3}/>

            </View>
        );
    }
    componentDidMount(){
        Modal.alert("didMount") 
    }
    changeHandle(val){
        this.setState({
            NumberPickerValue:val
        });
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
