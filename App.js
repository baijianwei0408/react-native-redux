import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import Main from "./src/containers/Main";
import stores from "./src/stores"


export default class App extends Component {
    render() {
        return (
            <Provider store={stores}>
                <Main/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
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
});
