
/** @jsx createElement */
import { View, Text, ScrollView, Dialog, Button, Modal } from 'nuke';
import {createElement, Component,render} from 'rax';
let App = class NukeDemoIndex extends Component {
    constructor() {
        super();
        this.state={
            title:'title',
            message:'message',
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
        console.log('modal show', param);
        this.state.onShow?this.state.onShow():''
    }

    onHide = (param) => {
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
                    <View style={styles.head}><Text style={styles.textHead}>{this.state.title}</Text></View>
                    <View style={styles.tips}><Text style={styles.text}>{this.state.message}</Text></View>
                </View>
                <View style={styles.footer}>                   
                    {
                        this.state.negativeButton?([
                            <Button key={0} style={styles.dlgBtn} type="normal" onPress={this.hideModal}>{this.state.negativeButton.text}</Button>,
                            <Text key={1} style={styles.dlgBtnSeperator}>|</Text>
                            ]):('')
                    }
                    <Button style={styles.dlgBtn} type="normal" onPress={this.hideModalAndConfirm}>{this.state.positiveButton.text}</Button>

                </View>
            </Dialog>

        );
    }
    componentDidMount(){
        
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
    height: '364rem',
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
    paddingTop:30,
    // justifyContent: 'center',
    borderRadius:'8rem',
    backgroundColor: '#ffffff',
  },
  head:{
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHead:{
    color:'#3d4145',
    fontSize:32,
  },
  tips:{

  },
  text:{
    fontSize:'28rem',
    lines:3,
    [`-webkit-line-clamp`]: 3,
    overflow: 'hidden',
    height:'120rem',
    lineHeight:'40rem',
    color:'#60646e',
    textOverflow:'ellipsis'
  },
  footer: {
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
  }
};
export default App

