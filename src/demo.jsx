
/** @jsx createElement */
import { View, Text, RefreshControl, Touchable, Icon, Image, Button, ListView, Modal } from 'nuke';
import {createElement, Component,render} from 'rax';
import BizPage from 'nuke-biz-page';
let originalData = [
    {key: 'b0',text:'所有类别',icon:'//img.alicdn.com/tfs/TB1W.9QPVXXXXbBXVXXXXXXXXXX-36-36.png'},
    {key: 'b1',text:'所有类别',icon:'//img.alicdn.com/tfs/TB1W.9QPVXXXXbBXVXXXXXXXXXX-36-36.png'},
    {key: 'b2',text:'所有类别',icon:'//img.alicdn.com/tfs/TB1W.9QPVXXXXbBXVXXXXXXXXXX-36-36.png'},
    {key: 'b3',text:'所有类别',icon:'//img.alicdn.com/tfs/TB1W.9QPVXXXXbBXVXXXXXXXXXX-36-36.png'},
    {key: 'b4',text:'所有类别',icon:'//img.alicdn.com/tfs/TB1W.9QPVXXXXbBXVXXXXXXXXXX-36-36.png'},
    {key: 'b5',text:'所有类别',icon:'//img.alicdn.com/tfs/TB1W.9QPVXXXXbBXVXXXXXXXXXX-36-36.png'}
]
class ListViewDemo extends Component {
    constructor() {
        super();
        this.state = {
            list1:{
                data: [...originalData],
                isRefreshing: false,
                showLoading:true,
                refreshText: '↓ 下拉刷新',
            },
            list2:{
                data: [...originalData],
                isRefreshing: false,
                showLoading:true,
                refreshText: '↓ 下拉刷新',
            }
        };
        this.index = 0;
        this.index2 = 0;

    }
    setListState(list,data){
        let newState = Object.assign(this.state[list],data);
        this.setState(newState);
    }

    linkTo(item,e) {
        console.log(e);
    }
    renderInner(length , item, index){
        const wrapStyle = index === length - 1 ? [styles.cellItem,styles.cellItemLast] : styles.cellInner;
        return (
            <Touchable style={wrapStyle} onPress={this.linkTo.bind(this,item)}>
            {
                item.icon ? <Image style={styles.icon} source={{uri:item.icon}}></Image> : null
            }
                <Text style={styles.itemTextList}>{item.text}</Text>
            {
                item.sub ? <Text style={styles.sub}>{item.sub}</Text> : null
            }
            {
                item.arrow ? <Icon name="arrowRight" style={styles.arrow}></Icon> : null
            }
        </Touchable>
        );

    }
    renderItem(length , item, index){

        if(index == length - 1){
            return this.renderInner(length, item, index);
        }else{
            return (<View style={styles.cellItem}>
                {this.renderInner(length, item, index)}
            </View>
            );
        }
    }
  

  
    headerList2=()=>{
        return <RefreshControl style={styles.refresh} refreshing={this.state.list2.isRefreshing} onRefresh={this.handleRefreshList2.bind(this)}><Text style={styles.loadingText}>{this.state.list2.refreshText}</Text></RefreshControl>;
    }
    footerList2=()=>{
        return this.state.list2.showLoading ?
        <View style={[styles.loading]}><Text style={styles.loadingText}>加载中...</Text></View>
        :null
    }
    handleRefreshList2=()=>{
        var self = this;
        self.setListState('list2',{
          isRefreshing: true,
          refreshText: '加载中',
        });
        setTimeout(() => {
            self.index2 = 0;
            self.setListState('list2',{
                isRefreshing: false,
                data: [...originalData],
                refreshText: '↓ 下拉刷新',
            });

        }, 1000);
    }
    handleLoadMoreList2=()=> {
        var self = this;
        if (self.index2 == 1) {
            setTimeout(function() {

                // 这里进行异步操作 但数据没有新增（或减少）
                self.setListState('list2',{ showLoading : false })
                Modal.toast('没有更多了');
            }, 1000);
        }else{
            setTimeout(function() {
                //数据增加一次
                self.state.list2.data.push({key: 'c100',text:'新数据cc',icon:'//img.alicdn.com/tfs/TB1W.9QPVXXXXbBXVXXXXXXXXXX-36-36.png'});
                self.setListState('list2',self.state.list2);

                self.index2 ++;
            }, 1000);

        }

    }
    headerList2=()=>{
        return <RefreshControl style={styles.refresh} refreshing={this.state.list2.isRefreshing} onRefresh={this.handleRefreshList2}><Text style={styles.loadingText}>{this.state.list2.refreshText}</Text></RefreshControl>;
    }
    footerList2=()=>{
        return this.state.list2.showLoading ?
        <View style={[styles.loading]}><Text style={styles.loadingText}>加载中...</Text></View>
        :null
    }
    scroll=()=>{
        this.refs.list2.scrollTo({ x : 0 ,y : 20 })
    }
    reset = ()=>{
        this.refs.list2.resetLoadmore();
        Modal.toast('reset loadmore success');
    }
    render(){
        return (
            <View>
                
                <ListView ref="list2"
                    renderHeader={this.headerList2}
                    renderFooter={this.footerList2}
                    renderRow={this.myrenderItem.bind(this,this.state.list2.data.length)}
                    dataSource={this.state.list2.data}
                    style={styles.listContainer}
                    onEndReached={this.handleLoadMoreList2}
                />
                <Button.Group style={{marginTop:'30rem'}}>
                    <Button type="primary" onPress={this.scroll}>滑动到20rem 位置</Button>
                    <Button type="primary" onPress={this.reset}>reset loadMore</Button>
                </Button.Group>
          </View>
        )
    }
    myrenderItem(){
        return 'asdfghjklmnbvcxzasddffghjklmnbbvcxzaadsdffghhjj'.split('').map((item)=>{
            return (<View style={{width:'750rem'}}>
                <Text>
                {item}
            </Text>
            </View>)
        })
    }

}
const styles = {
    listContainer:{
        height:'300rem',
        marginTop:'40rem'
    },
    cellItem:{
        backgroundColor:"#ffffff",
        [`backgroundColor:active`]:'#f2f3f7',
        height:"96rem",
        paddingLeft:"30rem",

    },
    cellInner:{
        flex:1,
        borderBottomWidth:"2rem",
        borderBottomStyle:"solid",
        borderBottomColor:"#e6e7eb",
        alignItems:"center",
        flexDirection:"row"
    },
    cellItemLast:{
        backgroundColor:"#ffffff",
        height:"96rem",
        borderBottomWidth:"2rem",
        borderBottomStyle:"solid",
        borderBottomColor:"#e6e7eb",
        paddingLeft:"30rem",
        alignItems:"center",
        flexDirection:"row"
    },
    icon:{
        color:'#c7c7cc',
        width:'72rem',
        height:'72rem',
        marginRight:'26rem',
        //position:'absolute',
        //top:'34rem',
        //right:'24rem' 
    },
    itemTextList:{
        fontSize:"32rem",
        color:"#5F646E"
    },
    refresh:{
        height:"80rem",
        width:"750rem",

        backgroundColor:"#cccccc",
        justifyContent:"center",
        alignItems:"center"
    },
    loading:{
        height:"80rem",
        display:"flex",
        width:"750rem",
        flexDirection:"row",
        backgroundColor:"#cccccc",
        alignItems:"center",
        justifyContent:"center"
    },
    loadingText:{
        color:"#666666"
    }
}

render(<ListViewDemo/>);

