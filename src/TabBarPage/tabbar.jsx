'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch, Tabbar } from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'
import AlertDialog from '../Component/AlertDialog.jsx'

class TabbarDemo extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <View style={styles.container}>             
                <Tabbar navTop={false} activeKey={'tab1'}>
                    <Tabbar.Item
                        tabKey="tab1"
                        style={styles.item}
                        render={this.renderItem.bind(this,'标题一')}
                        src="./index.js">
                        <Text>fgfgfgf</Text>
                    </Tabbar.Item>
                    <Tabbar.Item
                        tabKey="tab2"
                        style={styles.item}
                        render={this.renderItem.bind(this,'标题一')}>
                        <AlertDialog></AlertDialog>
                    </Tabbar.Item>
                    <Tabbar.Item
                        tabKey="tab3"
                        style={styles.item}
                        render={this.renderItem.bind(this,'标题三')}>
                        <Text>fgfgfgf</Text>
                    </Tabbar.Item>
                    <Tabbar.Item
                        tabKey="tab4"
                        style={styles.item}
                        render={this.renderItem.bind(this,'标题四')}>
                        <Text>fgfgfgf</Text>
                    </Tabbar.Item>
                </Tabbar>
            </View>
        );
    }
    componentDidMount(){
        Modal.alert("didMount") 
    }
    renderItem( name, isActive ,key){
        return (<View >
            <Text style={{color:isActive?'orange':'black'}}>
                {name}
            </Text>
        </View>)
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    item:{

    },
    activeItem:{
        
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
