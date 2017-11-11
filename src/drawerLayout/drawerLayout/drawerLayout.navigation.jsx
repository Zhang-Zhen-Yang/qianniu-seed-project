/*
 * @Author: zhangzhenyang
 * @Date: 2017-11-10 16:08:10
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2017-11-11 15:35:27
 */

import { createElement, Component, findDOMNode, PropTypes } from '$wbRax';
import { View, Mask, Swipe, Transition, Touchable } from '$wbNuke';

const propTypes = {
  drawerWidth: PropTypes.number,
  drawerTriggerWidth: PropTypes.number,
  renderNavigationView: PropTypes.function,
  duration: PropTypes.number,
  gestureDisabled: PropTypes.boolean,
  opened: PropTypes.function,
  closed: PropTypes.function,
  backdropDisabled: PropTypes.function,
  backdropOpacity: PropTypes.function,
  closeWhenBackdropPress: PropTypes.function,
  openCancel: PropTypes.function,
  closeCancel: PropTypes.function,
};

const defaultProps = {
  drawerWidth: 500,
  drawerTriggerWidth: 20,
  renderNavigationView: () => {},
  duration: 200,
  gestureDisabled: false,
  opened: () => {},
  closed: () => {},
  backdropDisabled: false,
  backdropOpacity: 0.7,
  closeWhenBackdropPress: true,
  openCancel: () => {},
  closeCancel: () => {},
};

class Navigation extends Component {
  constructor(props) {
    // const ratio = Dimensions.get('window').scale;
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
    const drawer = findDOMNode(this.mask);
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
        if (type === 'closeCancel') {
          this.props.closeCancel();
        }
      } else {
        this.props.opened();
      }
    });
  }
  // 关闭drawerLayout
  close(type) {
    const drawer = findDOMNode(this.mask);
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
        if (type === 'openCancel') {
          this.props.openCancel();
        }
      } else {
        this.props.closed();
      }
    });
  }
  // 开始滑动
  _onSwipeBegin() {
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
  // 渲染背景层
  _renderBackdrop() {
    if (!this.props.backdropDisabled && Math.abs(this.state.left) != this.drawerWidth) {
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
  // 点击背景层
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
        <Mask ref={ref => { this.mask = ref; }} style={[styles.mask, { left: this.state.left, width: (this.drawerWidth + this.drawerTriggerWidth) }]} {...this.props} >
          <View style={[{ width: this.drawerWidth, flex: 1 }]}>
            {this.props.renderNavigationView()}
          </View>
        </Mask>
      </Swipe>
    );
  }
}
Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

const styles = {
  backdrop: {
    backgroundColor: '#000000',
  },
  mask: {
    // backgroundColor: 'red',
  },
};

export default Navigation;
