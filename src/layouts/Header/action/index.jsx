import React, {useState,useEffect} from "react";
import {connect} from "react-redux";
import {setToken,setUsername} from "@/redux/global/action.js";
import {getRole} from "@/api/login.js";
import "./index.less";
import {
    UserOutlined,
} from "@ant-design/icons";
import {Layout, Input, Button, Space, Affix, Dropdown, Avatar, Spin} from "antd";
import {useNavigate} from "react-router-dom";
const onSearch = (value) => console.log(value);
const Index = (props) => {
    const navigator = useNavigate()
    const {username,setToken,setUsername} = props;
    const [loading, setLoading] = useState(false);
    const [role,setRole] = useState('visitor')
    const userData = async ()=>{
        setLoading(true);
        try {
        const res = await getRole();
        const userRole = res.data?res.data:'visitor'
        setRole(userRole)
    } finally {
        setLoading(false);
    }
    }
    useEffect(()=>{
        userData()
    },[])
    const toPath = (path) =>{
        if(path === 'signOut'){
            setToken("");
            setUsername("");
        }
        navigator(path)
    }

    const items = {
        user: [
            {
                key: '1',
                label: (
                    <a onClick={()=>toPath('/home/user/order')}>
                        我的订单
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a onClick={()=>toPath('/home/user/info')}>
                        我的信息
                    </a>
                ),
            },
                {
                    key: '3',
                    label: (
                    <a onClick={()=>toPath('signOut')}>
                        退出
                    </a>
                ),
                }
        ],
        admin:[
            {
                key: '1',
                label: (
                    <a onClick={()=>toPath('/home/user/order')}>
                        我的订单
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a onClick={()=>toPath('/home/admin/order')}>
                        用户订单
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a onClick={()=>toPath('/home/admin/user')}>
                        所有用户
                    </a>
                ),
            },
            {
                key: '4',
                label: (
                    <a onClick={()=>toPath('signOut')}>
                        退出
                    </a>
                ),
            }
        ],
        visitor:[
            {
                key: '1',
                label: (
                    <a onClick={()=>toPath('/login')}>
                        注册
                    </a>
                ),
            }
        ]
    }
    if (role === 'admin'|| role === 'user') {
        return (
            <Spin spinning={loading} tip="Loading...">
                <Dropdown
                    menu={
                        {items: items[role]}
                    }
                    placement="bottomRight"
                >
                    <div className="avatar">
                        <Avatar><UserOutlined/></Avatar>
                        <span className="name">{username}</span>
                    </div>
                </Dropdown>
            </Spin>
        );
    }
    else {
        return (
            <Space className="header-actions">
                <Spin spinning={loading} tip="Loading...">
                    <Dropdown menu={
                        {items: items[role ? role : 'visitor']}
                    } placement="bottom">
                        <Button className="button" type="link" onClick={()=>toPath('/Login')}>登 录</Button>
                    </Dropdown>
                </Spin>
            </Space>
        )
    }
};
const mapStateToProps = (state) => state.global;
const mapDispatchToProps = {setToken,setUsername};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
