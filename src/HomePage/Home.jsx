/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-06-21 22:02:45 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-21 23:01:41
 */
//首页
'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch, Navigator } from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'

class Empty extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.counter.num}</Text>
                <Image src="https://p.ssl.qhimg.com/dmsmfl/120_100_/t01e407dcc627bbdc3b.webp?size=180x240" style={{width:500,height:500}} onClick={()=>{this._imagePress()}}/>
            </View>
        );
    }
    componentDidMount(){
        //Modal.alert("didMount") 
    }
    _imagePress(){
        //Modal.alert('ddd');
        //Navigator.push('https://m.taobao.com');
        //Navigator.push('https://h5.m.taobao.com/qn/mobile/weex-tpl.html?_wx_tpl=https://g.alicdn.com/nuke/components/0.2.21/view.js','下个页面标题');
        this.props.add();
        Navigator.push('qap:///list.js');
        //Navigator.push('http://www.bilibili.com/');
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
const EmptyConnect = connect(mapStateToProps,mapDispatchToProps)(Empty);


export default EmptyConnect;
