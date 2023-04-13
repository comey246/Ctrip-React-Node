import React from 'react';
import {connect} from "react-redux";
import { updateCollapse } from "@/redux/menu/action";
import  './index.css'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import {Layout} from 'antd';

const { Header } = Layout;
const Index = (props) => {
    const { isCollapse, updateCollapse } = props;
    return (
        <div >
            {React.createElement(
                isCollapse ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                    className: "trigger",
                    onClick: () => updateCollapse(!isCollapse),
                }
            )}
        </div>
    );
};
const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(Index);
