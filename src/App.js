import React from "react";
import "./App.css";
import { PlusOutlined } from "@ant-design/icons";
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
  Input,
  Dropdown,
} from "antd";

import "antd/dist/antd.css";
const data = new Array(40).fill("shu");

function App() {
  const [input, setinput] = React.useState("Untitled-Task-1");
  const [flag, setflag] = React.useState(false);
  const [parameter, setparameter] = React.useState([5, 2]);
  const [inputDisabled, setinputdiabled] = React.useState(true);

  const { TabPane } = Tabs;
  const { SubMenu } = Menu;
  const g = "idsijdiijds";
  React.useEffect(() => {
    setinput(g);
  }, []);

  const menu = (
    <List
      size="small"
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );

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
              <Row>
                <Col span={parameter[0]}>
                  <Input
                    onChange={(event) => setinput(event.target.value)}
                    value={input}
                    placeholder="Basic usage"
                    style={{ cursor: "pointer", display: "inline" }}
                    onPressEnter={() => setinput(input)}
                    onClick={() => {
                      console.log(6);
                      setinputdiabled(false);
                      parameter[0] % 2 === 1
                        ? setparameter([parameter[0] + 3, parameter[1]])
                        : setparameter([5, 2]);
                    }}
                  />{" "}
                </Col>
                <Col span={parameter[1]}>
                  <PlusOutlined />
                </Col>
              </Row>
              <Row>{flag && <Col span={18}>{menu}</Col>}</Row>
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
