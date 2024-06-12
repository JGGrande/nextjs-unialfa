"use client"

import { ReactNode, useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {
    LineChartOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    BarsOutlined
} from '@ant-design/icons';
import TokenService from "../../services/token";


interface ILayoutDashboardProps {
    token: string;
    children?: ReactNode;
}

export const LayoutDashboard = ({ children, token }: ILayoutDashboardProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const menuItems = [];

    if(TokenService.havePermission(token,["admin", "colaborador"])){
        menuItems.push({
            key: String(menuItems.length + 1),
            label: 'Dashboard',
            icon: <LineChartOutlined />,
        });
    }

    if(TokenService.havePermission(token, ["admin", "colaborador"])){
        menuItems.push({
            key: String(menuItems.length + 1),
            label: 'Categorias',
            icon: <BarsOutlined />,
        });
    }

    if(TokenService.havePermission(token, ["admin"])){
        menuItems.push({
            key: String(menuItems.length + 1),
            label: 'Usuários',
            icon: <UserOutlined />,
        }); 
    }

    return (
        <>
            <Layout style={{ height: "100vh", width: "100vw" }} >
                <Sider  trigger={null} collapsible collapsed={collapsed}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={[menuItems[0].key]}
                        items={menuItems}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        { children }
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}