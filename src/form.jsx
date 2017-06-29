'use strict';

import {createElement, Component, render} from 'rax';
import {View, Text, Modal, Image, Button, Switch } from 'nuke';
import QN from 'QAP-SDK';
import {Provider} from 'rax-redux'
import store from './FormPage/store'

import FormPage from './FormPage/form.jsx'

const App = () => (
    <Provider store={store}>
        <FormPage></FormPage>
    </Provider>
)

render(<App />);

export default App;
