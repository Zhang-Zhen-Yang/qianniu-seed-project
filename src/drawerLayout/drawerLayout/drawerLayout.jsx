/*
 * @Author: zhangzhenyang
 * @Date: 2017-11-10 16:07:54
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2017-11-11 15:29:34
 */

'use strict';

import { createElement, Component } from '$wbRax';
import { View } from '$wbNuke';

import Navigation from './drawerLayout.navigation.jsx';

class DrawerLayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0,
    };
  }
  componentDidMount() {
    // this.props.init(this.progressDialog);
    // this.drawerLayout.
  }
  // 打开DrawerLayout
  open() {
    this.drawerLayout.open();
  }
  // 关闭DrawerLayout
  close() {
    this.drawerLayout.close();
  }
  _renderContent() {
    console.log(this.props.children);
    return Array.isArray(this.props.children) ? this.props.children : (this.props.children || []);
  }
  render() {
    return (
      <View style={this.props.style||{}} >
        { this._renderContent() }
        <Navigation
          ref={ref => { this.drawerLayout = ref; }}
          drawerWidth={this.props.drawerWidth}
          drawerTriggerWidth={this.props.drawerTriggerWidth}
          renderNavigationView={() => this.props.renderNavigationView()}
          duration={this.props.duration}
          gestureDisabled={this.props.gestureDisabled}
          opened={this.props.opened}
          closed={this.props.closed}
          backdropDisabled={this.props.backdropDisabled}
          backdropOpacity={this.props.backdropOpacity}
          closeWhenBackdropPress={this.props.closeWhenBackdropPress}
          openCancel={this.props.openCancel}
          closeCancel={this.props.closeCancel}
        />
      </View>
    );
  }
}
export default DrawerLayoutContainer;
