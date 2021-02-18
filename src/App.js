import "./App.css";
import "antd/dist/antd.css";

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

const { Sider } = Layout;

export default function App() {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  return (
    <>
      <div>
        <div>
          <Row>
            <Col span={6}>
              <Sider
                className="sider-back"
                style={{
                  overflow: "auto",
                  height: "100vh",
                  position: "fixed",
                  left: 0,
                  color: "white",
                }}
              >
                <List
                  header={<div>Header</div>}
                  footer={<div>Footer</div>}
                  bordered
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Sider>
            </Col>

            <Col span={18}>
              <div style={{ height: "100vh", display: "flex" }}>This</div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
