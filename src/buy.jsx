'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch } from 'nuke';
import QN from 'QAP-SDK';
import {Provider} from 'rax-redux'
import store from './BuyPage/store'
import Buy from './BuyPage/buy.jsx'

const App = () => (
    <Provider store={store}>
        <Buy></Buy>
    </Provider>
)

render(<App />);

export default App;
