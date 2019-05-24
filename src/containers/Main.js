import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { connect } from "react-redux";
import { getListAction } from "../actions/listAction";
import { apiRequest, requestApi } from "../api/requestApi";
import { ACTION_GET_LIST, GET_LIST } from "../actions";

class Main extends Component {

    constructor(props) {
        super(props)


        // this.props.dispatch(getListAction)
        this.props.getList()
    }


    render() {
        const { list } = this.props

        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity>
                    <Text>改变文字按钮 </Text>
                </TouchableOpacity>

                {
                    list.map((item, index) => <Text key={index}>{item.title}</Text>)
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

const mapStateToProps = (state) => {
    const { list } = state
    return {
        list: list.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList: () => requestApi({
            dispatch,
            type: ACTION_GET_LIST,
            url: 'http://jsonplaceholder.typicode.com/posts',
            method: 'get',
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);