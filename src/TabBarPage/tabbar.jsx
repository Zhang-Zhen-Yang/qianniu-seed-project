'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch, Tabbar, Iconfont,Layout } from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'
import AlertDialog from '../Component/AlertDialog.jsx'
const iconsMap = {
    tab1:{
        icon:'\ue608',
        name:'首页'
    },
    tab2:{
        icon:'\ue65e',
        name:'阅读'
    },
    tab3:{
        icon:'\ue753',
        name:'音乐'
    },
    tab4:{
        icon:'\ue602',
        name:'设置'
    }
}
class TabbarDemo extends Component {
    constructor(props) {
      super(props);
      Iconfont({name:'iconfont',url:'//at.alicdn.com/t/font_mjt7b371eyfa8aor.ttf'})
    }
    render() {
        
        return (
            <View style={styles.container}>             
                <Tabbar navTop={false} activeKey={'tab1'}>
                    <Tabbar.Item
                        tabKey="tab1"
                        style={styles.item}
                        render={this.renderItem.bind(this,iconsMap.tab1)}
                        >                        
                    </Tabbar.Item>
                    <Tabbar.Item
                        tabKey="tab2"
                        style={styles.item}
                        render={this.renderItem.bind(this,iconsMap.tab2)}>
                        <AlertDialog></AlertDialog>
                    </Tabbar.Item>
                    <Tabbar.Item
                        tabKey="tab3"
                        style={styles.item}
                        render={this.renderItem.bind(this,iconsMap.tab3)}>
                        <Layout.Grid style={{height:300}}>
                            <Layout.Col style={{backgroundColor:'red'}}><Text>红色</Text></Layout.Col>
                            <Layout.Col><Text>白色</Text></Layout.Col>
                            <Layout.Col><Text>绿色</Text></Layout.Col>
                        </Layout.Grid>
                    </Tabbar.Item>
                    <Tabbar.Item
                        tabKey="tab4"
                        style={styles.item}
                        render={this.renderItem.bind(this,iconsMap.tab4)}>
                        <Text>fgfgfgf</Text>
                    </Tabbar.Item>
                </Tabbar>
            </View>
        );
    }
    componentDidMount(){
        Modal.alert("didMount") 
    }
    renderItem( item, isActive ,key){
        return (<View >
            <View style={styles.tabItemIcon}>
                <Text style={[styles.tabbarIcon,{color:isActive?'orange':'black'}]}>{item.icon}</Text>
            </View>
            
            <Text style={{color:isActive?'orange':'black'}}>
                {item.name}
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
        
    },
    tabItemIcon:{
        fontSize:'35rem',
        marginBottom:'6rem',
        marginTop:'14rem',
        alignItems:'center',
        justifyContent:'center'
    },
    tabbarIcon:{
        fontFamily:'iconfont',

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
