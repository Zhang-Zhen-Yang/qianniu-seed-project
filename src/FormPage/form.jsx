'use strict';

import { createElement, Component, render } from 'rax';
import { View, Text, Modal, NumberPicker, TextInput } from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'
import R from '../Util/R'

class FormDemo extends Component {
    constructor(props) {
      super(props);
      this.state={         
          words:'和本地iconfont文件，是qap工程的配置文件。最简单的qap.json需要包含appKey、version和pages字段。'
      }
    }
    render() {
        
        return (
            <View style={[R.style.column]}>          
                
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    qap.json用来声明页面、<Text style={{color:'red'}}>描述页面的能力</Text>
                    {this.state.words.split('').map((item)=>{
                        return <Text>{item}</Text>
                    })}
                </View>

            </View>
        );
    }
    componentDidMount(){
        Modal.alert("didMount") 
    }
    change(){

    }
   
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    single:{
        width: '670rem',
        height: '100rem',
        fontSize:'32rem',
        padding:'10rem',
        borderWidth:'1rem',
        borderStyle:'solid',
        //borderColor:'#cccccc',
        borderColor:'red',
        backgroundColor:'#ffffff'
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
const FormDemoContainer = connect(mapStateToProps,mapDispatchToProps)(FormDemo);


export default FormDemoContainer;
