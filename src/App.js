import "./App.css";
import {
  Menu,
  Tabs,
  Card,
  Col,
  Row,
  Layout,
  PageHeader,
  List,
  Divider,
} from "antd";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
//const data =
const data = new Array(40).fill("shu");

function App() {
  const { TabPane } = Tabs;
  const { SubMenu } = Menu;
  const routes = [
    {
      path: "index",
      breadcrumbName: "First-level Menu",
    },
    {
      path: "first",
      breadcrumbName: "Second-level Menu",
    },
    {
      path: "second",
      breadcrumbName: "Third-level Menu",
    },
  ];

  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };
  const { Content, Sider } = Layout;
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Title"
        breadcrumb={{ routes }}
        subTitle="This is a subtitle"
      />

      <Sider
        width={200}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          theme="light"
        >
          {/* {[
            "akao",
            "a",
            "b",
            "c",
            "shu",
            "jsisjiijs",
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            12,
            34,
            56,
            78,
          ].map((i) => (
            <>
              {" "}
              <Menu.Item key={i}>Option 1</Menu.Item>
            </>
          ))} */}
          <List
            size="small"
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
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
    </>
  );
}

export default App;
