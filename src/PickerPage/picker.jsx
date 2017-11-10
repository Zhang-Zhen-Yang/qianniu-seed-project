'use strict';

import {createElement, Component, render } from 'rax';
import {View, Text, Modal, NumberPicker, Button, Picker, TimePicker, ActionSheet } from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'
import R from '../Util/R'


class TabbarDemo extends Component {
    constructor(props) {
      super(props);
      this.state={
          NumberPickerValue:10,
          defaultPicker:{key:1,value:'one'},
          timepicker:'2017/06/29'
      }
    }
    render() {
        
        return (
            <View style={[R.style.column,{justifyContent:'flex-start',padding:R.dimen.wide}]}>
                <View style={[R.style.row,{padding:R.dimen.wide}]}>
                    <NumberPicker disabled min={1} max={1000} defaultValue={2}  step={3}/>
                    <Text>disabled</Text>
                </View>
                <View style={[R.style.row,{padding:R.dimen.wide}]}>
                    <NumberPicker  min={1} max={1000} defaultValue={2}  step={3}/>
                    <Text>不受控</Text>
                </View>
                <View style={[R.style.row,{padding:R.dimen.wide}]}>
                   <NumberPicker  min={1} max={1000} value={this.state.NumberPickerValue} onChange={(val)=>{this.changeHandle(val)}} step={3}/> 
                   <Text>受控，通过 redux 改变值</Text>
                </View>

                <View style={[R.style.row,{padding:R.dimen.wide}]}>
                  <Button type="primary" onPress={()=>{this._pickerClick()}}>picker</Button>
                   <Text>key:{this.state.defaultPicker.key},value:{this.state.defaultPicker.value}</Text>
                </View>
                <View style={[R.style.row,{padding:R.dimen.wide}]}>
                  <Button type="primary" onPress={()=>{this._timePickerClick()}}>timepicker</Button>
                   <Text>{this.state.timepicker}</Text>
                </View>

                <View style={[R.style.row,{padding:R.dimen.wide}]}>
                  <Button type="primary" onPress={()=>{this._actionSheetSelect()}}>ActionSheet</Button>
                   <Text>{this.state.timepicker}</Text>
                </View>

            </View>
        );
    }
    componentDidMount(){
        //Modal.alert("didMount") 
    }
    changeHandle(val){
        this.setState({
            NumberPickerValue:val
        });
    }
    _pickerClick(){
        Picker.show({
            title:'请选择',
            dataSource:[
                {key:1,value:'one'},
                {key:2,value:'two'},
                {key:3,value:'three'},
                {key:4,value:'four'},
                {key:5,value:'five'},
                {key:6,value:'six'},
                {key:7,value:'seven'},
                {key:8,value:'eight'}
            ],
            selectedKey:[this.state.defaultPicker.key]
        },(e)=>{
            Modal.toast('您点击了'+JSON.stringify(e));
            this.setState({defaultPicker:e[0]});
        },()=>{
            Modal.toast('您点击了取消');
        },()=>{
            Modal.toast('picker显示出来了');
        },()=>{
            Modal.toast('点击取消后触发的事件');
        });
    }
    _timePickerClick(){
        TimePicker.show({
            title:'请选择日期',
            type:'date',//date,time,datetime
            default:this.state.timepicker
        },(e)=>{
            Modal.toast(e);
            this.setState({timepicker:e});
        },(e)=>{
            Modal.toast(JSON.stringify(e));
        },()=>{
            Modal.toast('打开了');
        },()=>{
            Modal.toast();
        });
    }
    _actionSheetSelect(){
        ActionSheet.show({
            options: ['拨打电话','发送短信','删除订单','取消'],
            cancelButtonIndex: 3,
            destructiveButtonIndex: 2,
            title:'ActionSheet Title'
        },(e)=>{
            Modal.toast(JSON.stringify(e));
        },()=>{
            Modal.toast('打开了');
        },()=>{

        })
    }
   
}

const styles = {
    
};
const mapStateToProps = (state,ownProps) => {
    return {
        counter:state.counter,
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        add:()=>{
            alert('ddd');
           dispatch({type:'ADD'}) 
        },
    }
}
const TabbarDemoContainer = connect(mapStateToProps,mapDispatchToProps)(TabbarDemo);


export default TabbarDemoContainer;
