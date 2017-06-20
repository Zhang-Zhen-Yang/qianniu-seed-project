'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal} from 'nuke';
import QN from 'QAP-SDK';

class Demo extends Component {
    constructor(props) {
      super(props);

      this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    欢迎使用千牛!
                </Text>
                <Text style={styles.instructions}>
                    编辑src/index.jsx文件，开始QAP之旅，
                </Text>
                <Text style={styles.instructions}>
                    点击手机千牛右上角刷新，
                </Text>
                <Text style={styles.instructions}>
                    或者刷新浏览器立即查看效果
                </Text>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
};

render(<Demo />);

export default Demo;
