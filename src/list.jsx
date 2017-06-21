'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch } from 'nuke';
import QN from 'QAP-SDK';
import {Provider} from 'rax-redux'
import store from './ListPage/store'

import List from './ListPage/list.jsx'

const App = () => (
    <Provider store={store}>
        <List></List>
    </Provider>
)

render(<App />);

export default App;