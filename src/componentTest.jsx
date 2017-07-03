'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button } from 'nuke'
import AlertDialog from './Component/AlertDialog.jsx'
import SpannableString from './Component/SpannableString.jsx'
class ComponentTest extends Component {
    constructor(props) {
      super(props);
      this.state={
            SpannableStringOpts:[
                {start:0,end:2,style:{color:'blue'}},
                {start:10,end:20,style:{color:'green',fontSize:'50rem',fontStyle:'italic',textDecoration:'line-through'}},
                {start:20,end:30,style:{color:'yellow',textDecoration:'underline'}},
                {start:30,end:40,style:{color:'gray',textDecoration:'line-through'}}
            ],
            SpannableStringText:'关于电脑浏览器的选择，如果你是微软的Windows系统，想必拿到新电脑的那一刻肯定是想着先去下载个第三方浏览器，然后才是下载各种需要的软件。近日，国外2家数据调查机构NetMarketShare和StatCounter的最新报告显示，谷歌Chrome浏览器市场份额占比仅60%，将其他浏览器远远甩在身后。'

      }
    }
    render() {
        return (
            <View style={styles.container}>
                
                <Button  block={true} onPress={this._alertDialog.bind(this)} style={{fontSize:'40rem',marginTop:10}}>AlertDialog</Button>           
                <Text>SpannableString</Text>
                <SpannableString style={{color:'red',fontSize:'40rem'}}
                    opts={this.state.SpannableStringOpts}
                    text={this.state.SpannableStringText}></SpannableString>
                <AlertDialog ref={(ref)=>{this.alertDialog = ref}}></AlertDialog>
            </View>
        );
    }
    componentDidMount(){
       
    }
    _alertDialog(){
        this.alertDialog.show({
            title:'您好',
            message:'一篇名为《最终我坐着轮椅被推出了首都国际机场》的文章，在网络引发超过10万次点击。文章中，一名在西雅图留学的中国女学生自述，因为好奇，在国外吸食笑气，导致生活及身体机能全面紊乱，最终不得不放弃学业，坐着轮椅回国的经历。',
            positiveButton:{
                text:'ok',
                callback:function(){
                   // Modal.toast('ok');
                }
            },
            negativeButton:{
                text:'cancel',
                callback:function(){
                    //Modal.toast('cancel');
                }
            },
            onShow:function(){
                //Modal.toast('onShow');
            },
            onHide:function(){
                //Modal.toast('onHide');
            },
            onMaskPress:function(){
              //Modal.toast('onMaskPress');  
            }
        })
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
   
};

render(<ComponentTest />);

export default ComponentTest;
