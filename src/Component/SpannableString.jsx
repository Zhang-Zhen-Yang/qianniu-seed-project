/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-07-01 23:14:03 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-07-02 00:15:14
 */
import { View, Text, Modal } from 'nuke';
import {createElement, Component,render} from 'rax';
class SpannableString extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.style,styles.spannbaleWrap]}>
                {this.pretreament(this.props.text)}
            </View>
        );
    }
    componentDidMount(){
        //Modal.alert('alertDialog');
    }
    pretreament=(text)=>{
        let textMap = [];
        text.split('').forEach((item,index)=>{
            textMap[index]={
                text:item,
                style:[this.props.style]
            }
        });
        this.props.opts.forEach((item,index)=>{
            let { start, end, style } = item;
            for(let i = start;i<end;i++){
                textMap[i].style.push(style);
            }
        })
       
        return textMap.map((item)=>{
            return <Text style={item.style}>{item.text}</Text>
        })
    }

}
var styles = {
    spannbaleWrap:{
        flexDirection:'row',
        flexWrap:'wrap'
    }
};
export default SpannableString

