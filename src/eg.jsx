import "./App.css";
import { Menu, Tabs, Card, Col, Row, Layout } from "antd";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
function App() {
  const { TabPane } = Tabs;
  return (
    <>
      <div>
        <Layout.Sider width={200} className="site-layout-background">
          <Menu mode="inline" style={{ width: 256 }}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </Menu>
        </Layout.Sider>
        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={8}>
                    <Card title="Card title" bordered={false}>
                      Card content
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Card title" bordered={false}>
                      Card content
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Card title" bordered={false}>
                      Card content
                    </Card>
                  </Col>
                </Row>
              </div>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default App;
