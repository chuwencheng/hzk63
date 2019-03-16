import React, { Component } from 'react'
import axios from '../../http'
import './login.css'
import 'antd-mobile/dist/antd-mobile.css'
import { Flex, WhiteSpace, NavBar, List, InputItem, WingBlank, Button, Toast } from 'antd-mobile'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uname: '',
            pwd: ''
        }
    }
    changeValue = (k, v) => {
        // console.log(k, v)
        this.setState({
            [k]: v
        })
    }
    // 登录
    handleLogin = async () => {
        const { history } = this.props
        // console.log(this.state)
        const body = this.state
        const res = await axios.post(`users/login`, body)
        // console.log(res)
        const { data, meta: { msg, status } } = res.data
        if (status === 200) {
            history.push('/')
            // console.log(this.props)
        } else {
            // 提示
            Toast.fail(msg, 1)
        }
    }
    render() {
        return (
            <Flex direction="column">
                <Flex.Item>
                    {/* 标题 */}
                    <WingBlank size="sm">
                        <NavBar mode="dark">登录</NavBar>
                    </WingBlank>
                    <WhiteSpace size="lg" />
                </Flex.Item>
                {/* 表单 */}
                <Flex.Item>
                    <List>
                        <WingBlank size="sm">
                            <InputItem
                                value={this.state.uname}
                                onChange={(v) => { this.changeValue('uname', v) }}
                            >姓名</InputItem>
                            <InputItem
                                value={this.state.pwd}
                                onChange={(v) => { this.changeValue('pwd', v) }}
                            >密码</InputItem>
                        </WingBlank>
                    </List>
                    <WhiteSpace size="lg" />
                    <WingBlank size="sm">
                        <Button onClick={this.handleLogin} type="primary" size="large" >确 定</Button>
                    </WingBlank>
                </Flex.Item>
            </Flex>
        )
    }
}
export default Login
