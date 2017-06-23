
/** @jsx createElement */
import { View, Text, ScrollView, Dialog, Button, Modal } from 'nuke';
import {createElement, Component,render} from 'rax';
let App = class NukeDemoIndex extends Component {
    constructor() {
        super();
    }

    showModal = () => {
        this.refs.modal1.show();
    }
    hideModal = () => {
        this.refs.modal1.hide();
    }
    hideModalAndConfirm = () =>{
        console.log('confirm')
        this.refs.modal1.hide();
    }
    onShow = (param) => {
        console.log('modal show', param);
    }

    onHide = (param) => {
        console.log('modal hide', param);
    }
    onMaskPress = (param) => {
        this.refs.modal1.hide();
    }

    render() {
        return (
            <ScrollView style={styles.wrapper}>
                <View style={{height:'2000rem'}}>
                    <Button type="primary" onPress={this.showModal}>点击打开对话框，可以点击遮罩层关闭</Button>
                </View>
                <Dialog ref="modal1" duration={1000} contentStyle={styles.modalStyle} onShow={this.onShow} onHide={this.onHide} onMaskPress={this.onMaskPress}>
                    <View style={styles.body}>
                        <View style={styles.head}><Text style={styles.textHead}>确定吗？</Text></View>
                        <View style={styles.tips}><Text style={styles.text}>此操作不此操作不可逆此操作不可逆此操作不可逆此操作不可逆此操作不可逆此操作不可逆此操作不可逆此操作不可逆此操作不可逆可逆，是否继续</Text></View>
                    </View>
                    <View style={styles.footer}>
                        <Button style={styles.dlgBtn} type="normal" onPress={this.hideModal}>取消</Button>                        
                        <Text style={styles.dlgBtnSeperator}>|</Text>                       
                        <Button style={styles.dlgBtn} type="normal" onPress={this.hideModalAndConfirm}>确定</Button>

                    </View>

                </Dialog>

            </ScrollView>

        );
    }
    componentDidMount(){
        Modal.alert('alertDialog');
    }
}
var styles = {
  wrapper: {
    paddingLeft: '24rem',
    paddingRight: '24rem',
    paddingTop: '24rem',
    backgroundColor:'#f4f4f4'
  },
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
    //borderTopWidth:'8rem',
    // padding:'10rem',
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

