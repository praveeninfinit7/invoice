import React from "react";
import "./updateForm.css";
import {
  Layout,
  Menu,
  Icon,
  Contnet,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  InputNumber
} from "antd";
import { Row, Col } from "antd";

import Defaultlayout from "../defaultLayout/defaultLayout";

const { TextArea } = Input;

const Option = Select.Option;
const FormItem = Form.Item;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const { Header, Content, Sider } = Layout;

class Updateform extends React.Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  handleChange = value => {
    console.log(`selected ${value}`);
  };
  inputNumberChange = value => {
    console.log("changed", value);
  };
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <Defaultlayout
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280
        }}
      >
        <h2>
          <strong style={{ paddingLeft: 50 }}>UPDATE INVOICE</strong>
        </h2>
        <img
          style={{ width: 200, marginLeft: 1300 }}
          src={require("../../image/Logo.png")}
        />

        <Row>
          <Form
            onSubmit={this.handleSubmit}
            className="form"
            style={{ position: "absolute" }}
          >
            <Col span={12}>
              <FormItem>
                <strong {...formItemLayout} style={{ paddingLeft: 100 }}>
                  From
                </strong>
                <FormItem label="Client Id" {...formItemLayout}>
                  <Input
                    style={{ color: "rgba(0,0,0,.25)" }}
                    placeholder="Client Id"
                    type="text"
                  />
                </FormItem>
                <FormItem label="Name" {...formItemLayout}>
                  <Input
                    style={{ color: "rgba(0,0,0,.25)" }}
                    placeholder="Name"
                    type="text"
                  />
                </FormItem>

                <FormItem label="Email" {...formItemLayout}>
                  <Input
                    style={{ color: "rgba(0,0,0,.25)" }}
                    type="text"
                    placeholder="Email"
                  />
                </FormItem>
                <FormItem label="Address" {...formItemLayout}>
                  <Input
                    style={{ color: "rgba(0,0,0,.25)" }}
                    type="text"
                    placeholder="Address"
                  />
                </FormItem>

                <FormItem label="Mobile" {...formItemLayout}>
                  <Input
                    style={{ color: "rgba(0,0,0,.25)" }}
                    type="text"
                    placeholder="Mobile"
                  />
                </FormItem>
                <FormItem label="Business Number" {...formItemLayout}>
                  <Input
                    style={{ color: "rgba(0,0,0,.25)" }}
                    type="text"
                    placeholder="Business Number"
                  />
                </FormItem>
                <FormItem label="Invoice Number" {...formItemLayout}>
                  <Input
                    style={{ color: "rgba(0,0,0,.25)" }}
                    type="text"
                    placeholder="Invoice Number"
                  />
                </FormItem>
                <FormItem label="Date" {...formItemLayout}>
                  <DatePicker onChange={this.onChange} />
                </FormItem>
                <FormItem label="Terms" {...formItemLayout}>
                  <Select
                    defaultValue="None"
                    style={{ width: 300 }}
                    onChange={this.handleChange}
                  >
                    <Option value="None">None</Option>
                    <Option value="NextDay">Next Day</Option>
                    <Option value="DueonRecipet">Due on Recipet</Option>
                    <Option value="nextday">Next Day</Option>
                    <Option value="2days">2 Days</Option>
                    <Option value="3days">3 Days</Option>
                    <Option value="4days">4 Days</Option>
                    <Option value="5days">5 Days</Option>
                    <Option value="6days">6 Days</Option>
                    <Option value="7days">7 Days</Option>
                    <Option value="10days">10 Days</Option>
                    <Option value="14days">14 Days</Option>
                    <Option value="20days">20 Days</Option>
                    <Option value="28days">28 Days</Option>
                    <Option value="36days">36 Days</Option>
                    <Option value="45days">45 Days</Option>
                  </Select>
                </FormItem>
                <FormItem label="Due" {...formItemLayout}>
                  <DatePicker onChange={this.onChange} />
                </FormItem>
              </FormItem>
              <FormItem label="Price" {...formItemLayout}>
                <Input
                  style={{ color: "rgba(0,0,0,.25)" }}
                  type="text"
                  placeholder="Price"
                />
              </FormItem>
              <FormItem label="Quantity" {...formItemLayout}>
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={3}
                  onChange={this.inputNumberChange}
                />
              </FormItem>
              <FormItem label="Amount" {...formItemLayout}>
                <Input
                  style={{ color: "rgba(0,0,0,.25)" }}
                  type="text"
                  placeholder="₹0.00"
                />
              </FormItem>
              <FormItem label="Tax" {...formItemLayout}>
                <Input
                  style={{ color: "rgba(0,0,0,.25)" }}
                  type="text"
                  placeholder="Tax"
                />
              </FormItem>
              <FormItem label="Gst" {...formItemLayout}>
                <Input
                  style={{ color: "rgba(0,0,0,.25)" }}
                  type="text"
                  placeholder="Gst"
                />
              </FormItem>
              <FormItem label="Description" {...formItemLayout}>
              <TextArea autosize={{ minRows: 6, maxRows: 10 }} />
              </FormItem>

              <Button type="primary" style={{ marginLeft: 100 }}>
                Submit
              </Button>
            </Col>
            <Col span={12} className="to">
              <FormItem>
                <strong {...formItemLayout} style={{ paddingLeft: 100 }}>
                  To
                </strong>
                <FormItem label="Name" {...formItemLayout}>
                  <Input placeholder="Name" />
                </FormItem>
                <FormItem label="Email" {...formItemLayout}>
                  <Input
                    style={{ color: "rgba(0,0,0,.25)" }}
                    type="text"
                    placeholder="Email"
                  />
                </FormItem>
                <FormItem label="Address" {...formItemLayout}>
                  <Input
                    style={{ color: "rgba(0,0,0,.25)" }}
                    type="text"
                    placeholder="Address"
                  />
                </FormItem>
                <FormItem label="Mobile" {...formItemLayout}>
                  <Input
                    style={{ color: "rgba(0,0,0,.25)" }}
                    type="text"
                    placeholder="Mobile"
                  />
                </FormItem>
              </FormItem>
            </Col>
          </Form>
          {/* <FormItem style={{ color: 'rgba(0,0,0,.25)', border:1, solid:'black', paddingTop:320}}>
         <hr />
    </FormItem> */}
        </Row>
      </Defaultlayout>
    );
  }
}

export default Updateform;
