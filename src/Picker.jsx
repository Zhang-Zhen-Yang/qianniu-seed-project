'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch } from 'nuke';
import QN from 'QAP-SDK';
import {Provider} from 'rax-redux'
import store from './PickerPage/store'

import Home from './PickerPage/picker.jsx'

const App = () => (
    <Provider store={store}>
        <Home></Home>
    </Provider>
)

render(<App />);

export default App;
