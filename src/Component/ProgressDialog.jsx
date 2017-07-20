
/** @jsx createElement */
import { View, Text, ScrollView, Dialog, Button, Modal,Transition } from 'nuke';
import {createElement, Component,findDOMNode,render} from 'rax';
let App = class NukeDemoIndex extends Component {
    constructor() {
        super();
        this.state={
            title:'title',
            message:'message',
            active:false,
            positiveButton:{
                text:'确定'
            },
            /*negativeButton:{
                text:'取消'
            }    */             
        }
    }

    showModal = () => {
        this.refs.modal1.show();
    }
    hideModal = () => {
        this.refs.modal1.hide();
        this.state.negativeButton.callback?this.state.negativeButton.callback():''
    }
    hideModalAndConfirm = () =>{
        this.refs.modal1.hide();
        this.state.positiveButton.callback?this.state.positiveButton.callback():''
    }
    onShow = (param) => {
        this.setState({active:true});
        console.log('modal show', param);
        this.state.onShow?this.state.onShow():'';
        const progress = findDOMNode(this.refs.indeterminateProgerss);
        this.beginTransform(progress,1);
    }

    onHide = (param) => {
        this.setState({active:false})
        console.log('modal hide', param);
        this.state.onHide?this.state.onHide():''
    }
    onMaskPress = (param) => {
        this.refs.modal1.hide();
        this.state.onMaskPress?this.state.onMaskPress():''
    }
    show (data){
        this.setState(data)
        this.showModal();
    }
    hide (){
        this.hideModal();
    }

    render() {
        return (
            <Dialog ref="modal1" duration={1000} contentStyle={styles.modalStyle} onShow={this.onShow} onHide={this.onHide} onMaskPress={this.onMaskPress}>
                <View style={styles.body}>
                   
                    <View style={styles.container}>
                        <View style={styles.loadingIcon} ref="indeterminateProgerss"></View>                       
                        <Text style={styles.text}>{this.state.message}</Text>
                    </View>
                </View>
            </Dialog>

        );
    }
    componentDidMount(){
        
    }
    beginTransform(element,count){
        let _this = this,trans = {transform:'rotate('+count*360+'deg)'};

       
        Transition(element, trans, {
            timingFunction: 'linear',
            delay: 0,
            duration: 1000
        }, function() {
            if(_this.state.active){
                console.log(_this.state.active);
                _this.beginTransform(element,++count);
            }
        });
    }
}
var styles = {
    click: {
        height: '100rem',
        lineHeight: '100rem',
        textAlign: 'center',
        borderWidth: '1rem',
        borderStyle: 'solid',
        borderColor: '#ccc'
    },
    modalStyle: {
        width: '578rem',
        height: '204rem',
        borderTopColor:'#3089dc',
        borderTopStyle:'solid',
        borderTopWidth:'8rem',
        padding:'10rem',
        borderRadius:'8rem',
    },
    body: {
        flex:1,
        paddingLeft:40,
        paddingRight:40,
        /*paddingTop:30,*/
        justifyContent: 'center',
        borderRadius:'8rem',
        backgroundColor: '#ffffff',
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
    },
    /*head:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHead:{
        color:'#3d4145',
        fontSize:32,
    },
    tips:{

    },*/
    text:{
        fontSize:'28rem',
        lines:1,
        flex:1,
        [`-webkit-line-clamp`]: 3,
        overflow: 'hidden',
        /*height:'120rem',*/
        /*lineHeight:'40rem',*/
        color:'#60646e',
        textOverflow:'ellipsis'
    },
    /*footer: {
        borderTopColor:'#dddddd',
        flexDirection:'row',
        borderTopStyle:'solid',
        borderTopWidth:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '94rem'
    },
    dlgBtn:{
        flex:1,
        borderWidth:0,
        color:'#3089dc',
        backgroundColor:'transparent'
    },
    dlgBtnSeperator:{
        color:'#dddddd'
    },
    button: {
        width: '300rem',
        height: '60rem',
        borderWidth: '1rem',
        borderStyle: 'solid',
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },*/
    loadingIcon:{
        width:'80rem',
        height:'80rem',
        marginRight:'20rem',
        /*backgroundColor:'red',*/
        borderTopWidth:'8rem',
        borderLeftWidth:'8rem',
        borderBottomWidth:'8rem',
        borderTopColor:'#3089dc',
        borderLeftColor:'#3089dc',
        borderBottomColor:'#3089dc',
        borderTopStyle:'solid',
        borderLeftStyle:'solid',
        borderBottomStyle:'solid',
        borderRadius:'50%',
        borderRightWidth:'8rem',
        borderRightStyle:'solid',
        borderRightColor:'transparent'


    }
};
export default App

