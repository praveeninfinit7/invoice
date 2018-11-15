import React from "react";
import { Layout, Menu, Icon, Breadcrumb } from "antd";
import "./defaultLayout.css";
import { Link } from "react-router-dom";
// import Form from "../form/index";
import Headers from "../header/header";
import { LayoutProvider } from "react-page-layout";
//import Form from '../form/index'

const SubMenu = Menu.SubMenu;

const { Header, Sider, Content, Footer } = Layout;

class Defaultlayout extends React.Component {
  state = {
    collapsed: false,
    display: false
  };
  diplay = () => {
    this.setState({ display: true });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    console.log(this.props.children);
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          diplay
          collapsed={this.state.collapsed}
          display={this.state.dispaly}
          onCollapse={this.onCollapse}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
        >
          <img
            style={{
              width: 60,
              marginLeft: 13,
              height: 50,
              backgroundColor: "white",
              marginTop: 20
            }}
            src={require("../../image/logo.jpg")}
            alt="logo"
          />
          <span style={{ paddingLeft: 20, color: "white" }}>
            <strong for="collapsible">ADMIN</strong>
          </span>

          <div className="logo" />
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <span>
                <Icon type="dashboard" />
                <Link to="/defaultLayout">Dashboard</Link>
              </span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="file-sync" />
                  <span>Invoice</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <span className="create">
                  <Icon type="form" theme="outlined" />
                  <Link to="/createInvoice/index">Create Invoice</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="3">
                <span>
                  <Icon type="sync" theme="outlined" />
                  <Link to="/updateInvoice/index">Update Invoice</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="4">
                <span>
                  <Icon type="eye" theme="outlined" />
                  <Link to="/viewInvoice/index">View Invoice</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="delete" theme="outlined" />
                Delete Invoice
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Client</span>
                </span>
              }
            >
              <Menu.Item key="6">
                <span>
                  <Icon type="form" theme="outlined" />
                  <Link to="/clientCreateInvoice/index">Create Invoice</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="7">
                <span>
                  <Icon type="sync" theme="outlined" />
                  <Link to="/clientUpdateInvoice/index">Update Invoice</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="8">
                <span>
                  <Icon type="eye" theme="outlined" />
                  <Link to="/clientViewInvoice/index">View Invoice</Link>
                </span>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            {/* <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
              style={{ marginLeft: 20 }}
            /> */}
          </Header>

          <Content style={{ margin: "24px 16px 0" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item />
              <Breadcrumb.Item />
            </Breadcrumb>
            <div
              className="content"
              style={{ padding: 24, background: "#fff" }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            INFINITI 7 ©2018 Created by Infiniti7
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Defaultlayout;
