/*
 * @Author: zhangzhenyang
 * @Date: 2017-11-10 16:08:10
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2017-11-10 16:51:47
 */

import { createElement, Component, findDOMNode } from '$wbRax';
import { View, Mask, Swipe, Transition } from '$wbNuke';

class Navigation extends Component {
  constructor(props) {
    super(props);
    // console.log('props', props);
    this.drawerWidth = props.drawerWidth;
    this.drawerTriggerWidth = props.drawerTriggerWidth;
    this.duration = props.duration;
    this.gestureDisabled = props.gestureDisabled;
    this.state = {
      ratio: 2,
      start: -this.drawerWidth,
      left: -this.drawerWidth,
    };
  }
  show = () => {
    this.refs.mask.show();
  }
  // 打开drawerLayout
  open() {
    const drawer = findDOMNode(this.refs.mask);
    const trans = { transform: `translateX(${-this.state.left})` };
    Transition(drawer, trans, {
      timingFunction: 'linear',
      delay: 0,
      duration: this.duration,
    }, () => {
      this.setState({
        left: 0,
        start: 0,
      });
      Transition(drawer, { transform: 'translateX(0)' }, {
        delay: 0,
        duration: 0,
      }, () => {
      });
      this.props.opened&&this.props.opened();
    });
  }
  // 关闭drawerLayout
  close() {
    const drawer = findDOMNode(this.refs.mask);
    const trans = { transform: `translateX(${-this.drawerWidth + this.state.left})` };
    Transition(drawer, trans, {
      timingFunction: 'linear',
      delay: 0,
      duration: this.duration,
    }, () => {
      this.setState({
        left: -this.drawerWidth,
        start: -this.drawerWidth,
      });
      Transition(drawer, { transform: 'translateX(0)' }, {
        delay: 0,
        duration: 0,
      }, () => {
      });
      this.props.closed&&this.props.closed();
    });
  }
  // 开始滑动
  _onSwipeBegin(val) {
    if (this.gestureDisabled) { return; }
    // console.log('mask start', val);
  }
  // 滑动中
  _onSwipe(val) {
    if (this.gestureDisabled) { return; }
    // console.log('mask ing', val);
    const distance = val.distance;
    const nextleft = this.state.start + (distance * this.state.ratio);
    if ((nextleft <= 0) && (nextleft >= -this.drawerWidth)) {
      this.setState({
        left: nextleft,
      });
    }
  }
  // 滑动结束
  _onSwipeEnd(val) {
    if (this.gestureDisabled) { return; }
    const distance = val.distance;
    const nextleft = this.state.start + (distance * this.state.ratio);
    if ((nextleft <= 0) && (nextleft >= -this.drawerWidth)) {
      this.setState({
        left: nextleft,
        start: nextleft,
      });
    }
    // console.log('end---------------------------------end', val);
    if (val.direction === 'SWIPE_LEFT') {
      this.close();
    } else {
      this.open();
    }
  }
  render() {
    return (
      <Swipe
        horizontalThreshold={1}
        style={[{ width: (this.drawerWidth + this.drawerTriggerWidth) }]}
        vertical={false}
        onSwipeBegin={(val) => { this._onSwipeBegin(val); }}
        onSwipe={(val) => { this._onSwipe(val); }}
        onSwipeEnd={(val) => { this._onSwipeEnd(val); }}
      >
        <Mask ref="mask" style={[styles.mask, { left: this.state.left, width: (this.drawerWidth + this.drawerTriggerWidth) }]} {...this.props} >
          <View style={[{ width: this.drawerWidth, flex: 1 }]}>
            {this.props.renderNavigationView()}
          </View>
        </Mask>
      </Swipe>
    );
  }
}

const styles = {
  mask: {
  },
};

export default Navigation;
