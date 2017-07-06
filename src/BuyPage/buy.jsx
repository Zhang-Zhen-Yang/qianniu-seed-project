'use strict';

import {createElement, Component, render } from 'rax';
import {View, Text, Modal, Number,ScrollView,Image,Switch,Picker,TextInput,Button,TouchableHighlight} from 'nuke';
import QN from 'QAP-SDK';
import {connect} from 'rax-redux'

import Counter from './mods/Counter';
import CardItem from './mods/CardItem';
import FormLine from './mods/FormLine';
import FormSub from './mods/FormSub';
import styles from './styles.css';


class TabbarDemo extends Component {
    constructor(props) {
        super(props);
        super(props);
        this.state = {
            price: 30,
            count: 1,
            express: '',
            huabei: false,
            insurance:[
                {value:'无运费险',key:0},
                {value:'运费险 ¥ 20.00',key:1}
            ],
            insuranceSelectedKey:1,
            expressData:[
               {value:'快递 ¥ 10.00',key:0},
               {value:'EMS ¥ 20.00',key:1}
            ],
            expressSelectedKey:1
        };
    }
    formSub = () => {
        console.log(this.state);
    }
    render() {
        
        return (
        <ScrollView style={styles.container}>
        <View style={styles.userInfoBox}>
            <View style={styles.userInfo}>
                <Text style={styles.userName}>收货人：郑西坡</Text>
                <Text style={styles.userName}>13588888888</Text>
            </View>
            <View><Text style={styles.userAddr}>收货地址：汉东省京州市光明区光明峰街道969号</Text></View>
            <View><Text style={styles.tip}>(收获不便时，可选择免费代收货服务)</Text></View>
            </View>
            <View style={styles.border}>
            <Image source={{uri: 'https://gw.alicdn.com/tfs/TB1dCVBRXXXXXbrXpXXXXXXXXXX-750-12.jpg'}} style={styles.borderPic} resizeMode={'contain'} />
            </View>
            <View style={styles.shop}>
            <View style={styles.shopPicBox}>
                <Image source={{uri: 'https://img.alicdn.com/tfs/TB1j3BaRXXXXXa3XVXXXXXXXXXX-32-32.jpg'}} style={styles.shopPic} resizeMode={'contain'} />
            </View>
            <Text style={styles.shopTitle}>朱然的纵火小铺</Text>
            </View>
            <CardItem
            title={'[现货] 三国志13 日本原版官方正品 扑克牌'}
            pic={'https://gd2.alicdn.com/imgextra/i4/30782564/TB2sNreXzzyQeBjy1zdXXaInpXa_!!30782564.jpg_400x400.jpg'}
            desc={'这里是一段描述'}
            url={'https://www.taobao.com/'}
            price={'¥30.00'}
            commendNum={'x1'} />
            <FormLine>
            <Text>购买数量</Text>
            <Counter
                value={1}
                end={5}
                start={0}
                onChange={(num) => {
                    this.state.count = num;
                }}
                onComplete={(num) => {
                    this.state.count = num;
                }} />
            </FormLine>
            <FormLine>
                <Text>配送方式</Text>
                <TouchableHighlight onPress={()=>{this._expressPick()}}>
                    <View style={[styles.pickerBox,{flexDirection:'row',alignItems:'center'}]}>
                        {/*<Picker
                            selectedValue={'10.00'}
                            onValueChange={(item) => {
                                this.state.express = item;
                            }}
                            style={styles.picker}>
                            <Picker.Item value={'10.00'} label={'快递 ¥ 10.00'} />
                            <Picker.Item value={'20.00'} label={'EMS ¥ 20.00'} />
                        </Picker>*/}
                        <Text>
                            {this.state.expressData[this.state.expressSelectedKey].value}
                        </Text>
                        <Image source={{uri: 'https://gw.alicdn.com/tfs/TB1JxM4QVXXXXc3aXXXXXXXXXXX-26-52.jpg'}} style={styles.pickerPic} resizeMode={'contain'} />
                    </View>
                </TouchableHighlight>
            </FormLine>
            <FormLine>
                <Text>运费险</Text>
                <TouchableHighlight onPress={(e)=>{this._insurancePick()}}>
                <View style={[styles.pickerBox,{flexDirection:'row',alignItems:'center'}]} >
                    {/*<Picker
                        selectedValue={'0.00'}
                        onValueChange={(item) => {
                            this.state.express = item;
                        }}
                        style={styles.picker}>
                        <Picker.Item value={'0.00'} label={'无运费险'} />
                        <Picker.Item value={'10.00'} label={'运费险 ¥ 20.00'} />
                    </Picker>*/}
                    <Text>
                       {this.state.insurance[this.state.insuranceSelectedKey].value}
                    </Text>
                    <Image source={{uri: 'https://gw.alicdn.com/tfs/TB1JxM4QVXXXXc3aXXXXXXXXXXX-26-52.jpg'}} style={styles.pickerPic} resizeMode={'contain'} />
                </View>
                </TouchableHighlight>
            </FormLine>

            <FormLine>
                <Text>运费险投保须知</Text>
                <View><Text>？</Text></View>
            </FormLine>
            <FormLine>
                <Text>买家留言</Text>
                <View>
                    <TextInput
                    style={styles.input}
                    placeholder={'选填：对本次交易的说明'}
                    />
                </View>
            </FormLine>
            <FormSub>
                <Text style={styles.subText}>共1件商品</Text>
                <Text style={styles.subText}>小记：</Text>
                <Text style={styles.price}>¥ 40.00</Text>
            </FormSub>

            <FormLine>
                <View>
                    <Text>花呗分期</Text>
                </View>
                <View>
                <Switch
                    onValueChange={(value) => {
                    this.state.huabei = value;
                    this.setState(this.state);
                    }}
                    value={this.state.huabei} />
                </View>
            </FormLine>

            <FormSub>
                <Text style={styles.subText}>合计</Text>
                <Text style={styles.price}>¥ 40.00</Text>
                <Button style={[styles.btn,styles.btnText]} onPress={this.formSub}>
                    提交订单
                </Button>
            </FormSub>
        </ScrollView>
        );
    }
    componentDidMount(){
        //Modal.alert("didMount") 
    }
    //选择运费险
    _insurancePick(){
        Picker.show({
            title:'请选择运费险',
            dataSource:this.state.insurance,
            selectedKey:[0]},
            (e)=>{
                this.setState({
                    insuranceSelectedKey:e[0].key
                })
            },
            (e)=>{
                Modal.toast(JSON.stringify(e));
            }

        );
    }
    //选择快递
    _expressPick(){
        Picker.show({
            title:'请选择快递',
            dataSource:this.state.expressData,
            selectedKey:[0]},
            (e)=>{
                this.setState({
                    expressSelectedKey:e[0].key
                })
            },
            (e)=>{
                Modal.toast(JSON.stringify(e));
            }

        );
    }
   
}
/*const styles={

}*/

const mapStateToProps = (state,ownProps) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        
    }
}
const TabbarDemoContainer = connect(mapStateToProps,mapDispatchToProps)(TabbarDemo);


export default TabbarDemoContainer;
