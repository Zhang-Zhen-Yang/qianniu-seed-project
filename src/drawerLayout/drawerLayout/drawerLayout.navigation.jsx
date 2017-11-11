/*
 * @Author: zhangzhenyang
 * @Date: 2017-11-10 16:08:10
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2017-11-10 17:17:27
 */

import { createElement, Component, findDOMNode } from '$wbRax';
import { View, Mask, Swipe, Transition, Dimensions, Touchable } from '$wbNuke';

class Navigation extends Component {
  constructor(props) {
    const ratio = Dimensions.get('window').scale;
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
  // 打开drawerLayout
  open(type) {
    const drawer = findDOMNode(this.refs.mask);
    const translateX = -this.state.left;
    const trans = { transform: `translateX(${translateX})` };
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
      if (type) {
        (typeof this.props[type] === 'function') ? this.props[type]() : null;
      } else {
        this.props.opened&&this.props.opened();
      }
    });
  }
  // 关闭drawerLayout
  close(type) {
    const drawer = findDOMNode(this.refs.mask);
    const translateX = -this.state.left - this.drawerWidth;
    /* console.log(this.drawerWidth);
    console.log(this.state.left);
    console.log('translateX', translateX); */
    const trans = { transform: `translateX(${translateX})` };
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
      if (type) {
        (typeof this.props[type] === 'function') ? this.props[type]() : null;
      } else {
        this.props.closed&&this.props.closed();
      }
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
    console.log(val);
    const distance = val.distance;
    const velocity = val.velocity;
    const nextleft = this.state.start + (distance * this.state.ratio);
    if ((nextleft <= 0) && (nextleft >= -this.drawerWidth)) {
      this.setState({
        left: nextleft,
        start: nextleft,
      });
    }
    setTimeout(() => {
      if (val.direction === 'SWIPE_LEFT') {
        if (Math.abs(velocity) > 0.2) {
          this.close();
        } else if (Math.abs(distance * this.state.ratio) > this.drawerWidth / 4) {
          this.close();
        } else {
          this.open('closeCancel');
        }
      } else if (val.direction === 'SWIPE_RIGHT') {
        if (Math.abs(velocity) > 0.2) {
          this.open();
        } else if (Math.abs(distance * this.state.ratio) > this.drawerWidth / 4) {
          this.open();
        } else {
          this.close('openCancel');
        }
      }
    }, 0);
    // console.log('end---------------------------------end', val);
  }
  _renderBackdrop() {
    if (!this.props.backdropDisabled&&Math.abs(this.state.left) != this.drawerWidth) {
      return (
        <Touchable onPress={() => { this._backdropPress(); }}>
          <Mask
            style={[styles.backdrop, { opacity: ((this.state.left + this.drawerWidth) / this.drawerWidth) * this.props.backdropOpacity }]}
          />
        </Touchable>
      );
    }
    return ('');
  }
  _backdropPress() {
    if (this.props.closeWhenBackdropPress !== false) {
      this.close();
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
        {this._renderBackdrop()}
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
  backdrop: {
    backgroundColor: '#000000',
  },
  mask: {
    // backgroundColor: 'red',
  },
};

export default Navigation;
