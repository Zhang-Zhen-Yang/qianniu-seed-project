'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch } from 'nuke';
import QN from 'QAP-SDK';
//import {connect} from 'react-redux'
//import {createStore} from 'redux'
import store from './store'

store.subscribe(() =>{
        console.log(store.getState());
        render(<Demo />);
    }
  
);
class Demo extends Component {
    constructor(props) {
      super(props);

      this.state = {apple:100};
    }
    render() {
        return (
            <View style={styles.container}>
                <Button type="primary" onPress={()=>{this.setState({apple:145555})}}>apple:{this.state.apple}</Button>
                <Button type="normal" onPress={this._buttonPress}>ddfddf</Button>
                 <Image autoFit={true} src="https://gd2.alicdn.com/imgextra/i2/413996455/TB2tNcJbd0opuFjSZFxXXaDNVXa_!!413996455.jpg" style={{quality:"original"}}/>
                <Image 
                autoFit={false} 
                src="https://gd2.alicdn.com/imgextra/i2/413996455/TB2tNcJbd0opuFjSZFxXXaDNVXa_!!413996455.jpg" 
                style={[{quality:"original"},{width:100,height:100}]} width={100} height={100}/>
                <Text>{JSON.stringify(store.getState())}</Text>
                <Image                
                onLoad={this._imgLoad} 
                source={{uri:"https://p.ssl.qhimg.com/dmsmfl/120_100_/t01e407dcc627bbdc3b.webp?size=180x240"}}
                style={{width:500,height:500}} resizeMode="cover"/>

                <Switch disabled value={false}/>
                <Switch  value={true}/>
                <Text style={styles.welcome}>
                    欢迎使用千牛!kkkkk
                </Text>
                <Text style={styles.welcome}>
                    欢迎使用千牛!kkkkk
                </Text>
                <Text style={styles.instructions}>
                    编辑src/index.jsx文件，开始QAP之旅，
                </Text>
                <Text style={styles.instructions}>
                    点击手机千牛右上角刷新，
                </Text>
                <Text style={styles.instructions}>
                    或者刷新浏览器立即查看效果 dddddddddddddddd
                </Text>
            </View>
        );
    }
    _imgLoad(){
        Modal.alert("imgLoad") 
    }
    _buttonPress(){
        Modal.alert('ADD');
        store.dispatch({
            type:'ADD'
        });
    }
    componentDidMount(){
        Modal.alert("大家好") 
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
};


/*const UnityChan = () => (
    <Provider store={store}>
        <Demo/>>
    </Provider>
)*/

render(<Demo />);

export default Demo;
