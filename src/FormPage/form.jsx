'use strict';

import { createElement, Component, render } from 'rax';
import { View, Text, Modal, NumberPicker, TextInput, Image } from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'
import R from '../Util/R'
import SpannableString from '../Component/SpannableString.jsx'

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
                    &emsp;qap.json用来声明页面、<Text style={{color:'red'}}>描述页面的能力</Text>
                    <Image source={{uri:'http://p1.so.qhimgs1.com/bdr/_240_/t0113514e56d206a0ed.png'}} style={{width:100,height:50}}></Image>
                    {'和本地iconfont文件，是qap工程的配置文件。'.split('').map((item)=>{
                        return <Text>{item}</Text>
                    })}
                </View>
                <Image source={{uri:'http://p1.so.qhimgs1.com/bdr/_240_/t0113514e56d206a0ed.png'}} style={{width:100,height:100}}> 
                    <Text style={{color:'red'}}>kdfkdkfdkfkdfkdk</Text>
                </Image>
                <Text style={{fontStyle:'normal',textDecoration:'line-through'}}>
                    晓佳奈创作的轻小说《紫dddddfd
                </Text>
                <SpannableString style={{color:'red',fontSize:'50rem'}}
                opts={[
                    {start:0,end:2,style:{color:'blue'}},
                     {start:10,end:20,style:{color:'green',fontSize:'50rem',fontStyle:'italic',textDecoration:'line-through'}},
                     {start:20,end:30,style:{color:'yellow',textDecoration:'underline'}},
                     {start:30,end:40,style:{color:'gray',textDecoration:'line-through'}}
                 ]}
                 text="晓佳奈创作的轻小说《紫罗兰永恒花园》CM公布，由KAエスマ文库出版与刊行。曾获得第5回京都动画大赏，也是京都大赏举办至今第一个以及唯一一个正统大赏得主。"></SpannableString>
                
            </View>
        );
    }
    componentDidMount(){
        //Modal.alert("didMount") 
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
