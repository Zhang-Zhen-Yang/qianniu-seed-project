'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch } from 'nuke';
import QN from 'QAP-SDK';
import {Provider} from 'rax-redux'
import store from './HomePage/store'

import TabBarDemo from './TabBarPage/tabbar.jsx'

const App = () => (
    <Provider store={store}>
        <TabBarDemo></TabBarDemo>
    </Provider>
)

render(<App />);

export default App;
