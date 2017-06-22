'use strict';

import { createElement, Component, render} from 'rax';
import {View, Text, Modal } from 'nuke';


class ListHeader extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <View style={styles.itemHeader}>             
                <Text>头部</Text>
            </View>
        );
    }
    componentDidMount(){
        
    }
}

const styles = {
    itemHeader: {
        
    },
   
};


export default ListHeader;
