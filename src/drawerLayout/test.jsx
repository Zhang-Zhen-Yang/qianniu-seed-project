/*
 * @Author: zhangzhenyang
 * @Date: 2017-11-10 16:23:23
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2017-11-10 16:59:51
 */
/*
  组件名 DrawerLayout 抽屉组件
  属性  duration  打开，关闭的时间，默认为200ms
  属性 gestureDisabled 是否反持手势左边右划打开，向左划关闭,默认为false,支持手势
  属性 drawerWidth   打开的内容宽度 默认为500
  属性 drawerTriggerWidth 手势触动的宽度 默认为20
  属性 renderNavigationView 内容区，返回值是一个组件
  方法 open 打开
  方法 close 关闭
  事件 opened 打开完成
  事件 closed 关闭完成
*/


'use strict';

import { createElement, Component } from '$wbRax';
import { View, Modal, Image, Touchable, Button } from '$wbNuke';
import DrawerLayout from './drawerLayout/drawerLayout.jsx';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'drawerLayout',
    };
  }
  componentDidMount() {
    // this.props.init(this.progressDialog);
    // this.drawerLayout.
  }
  _navigationView() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.8)' }}>
        <Touchable onPress={() => { this.imgClick(); }}>
          <Image source={{ uri: 'https://p1.ssl.qhmsg.com/dr/220__/t010902106db62393f6.png' }} autoFit />
        </Touchable>
        <View style={{ flex: 1 }} />
        <Button type="primary" rect block onPress={() => { this._close(); }}>关闭</Button>
      </View>
    );
  }
  imgClick() {
    Modal.alert(this.state.name);
  }
  // 打开
  _open() {
    this.DrawerLayout.open();
  }
  // 关闭
  _close() {
    this.DrawerLayout.close();
  }
  render() {
    return (
      <DrawerLayout
        ref={ref => { this.DrawerLayout = ref; }}
        duration={200}
        gestureDisabled={false}
        drawerWidth={500}
        drawerTriggerWidth={20}
        renderNavigationView={() => this._navigationView()}
        opened={() => { Modal.toast('打开完成'); }}
        closed={() => { Modal.toast('关闭完成'); }}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Button onPress={() => { this._open(); }}>OPEN</Button>
        <Button onPress={() => { this._close(); }}>CLOSE</Button>
        <Image source={{ uri: 'https://p1.ssl.qhmsg.com/dr/220__/t015f80e3a498f8e748.png' }} autoFit />
        <Image source={{ uri: 'https://p1.ssl.qhmsg.com/dr/220__/t010dfeb5527eb9bdad.png' }} autoFit />
      </DrawerLayout>
    );
  }
}

export default Recommend;
