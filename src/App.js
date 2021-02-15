import "./App.css";
import { Menu, Tabs, Card, Col, Row, Layout } from "antd";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
function App() {
  const { TabPane } = Tabs;
  const { SubMenu } = Menu;
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };
  const { Content, Sider } = Layout;
  return (
    <>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Tabs defaultActiveKey="1">
              <TabPane tab="Tab 1" key="1">
                <div className="site-card-wrapper">
                  <Row gutter={16}>
                    <Col span={8}>
                      <Card title="Card title" bordered={false}>
                        <p>Card Content</p>
                        <p>Card Content</p>

                        <p>Card Content</p>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card title="Card title" bordered={false}>
                        <p>Card Content</p>
                        <p>Card Content</p>
                        <p>Card Content</p>{" "}
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card title="Card title" bordered={false}>
                        <p>Card Content</p>
                        <p>Card Content</p>

                        <p>Card Content</p>
                      </Card>
                    </Col>
                  </Row>
                </div>
                ,
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
