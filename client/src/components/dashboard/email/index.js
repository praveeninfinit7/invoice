import React from "react";
import { Modal, Button, Form, Icon, Input, Upload,Row, Col } from "antd";
import './email.css'
const FormItem = Form.Item;
const { TextArea } = Input;
class Email extends React.Component {
  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      
      <div>
        <Modal
          title="Email"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          {/* <p>{ModalText}</p> */}
          <Form>
            <FormItem label="To">
              <Input
                style={{ color: "rgba(0,0,0,.25)" }}
                placeholder="eaxmple@gmail.com"
              />
            </FormItem>
            <FormItem label="Subject">
              <Input
                style={{ color: "rgba(0,0,0,.25)" }}
                placeholder="subject"
              />
            </FormItem>
            
            <FormItem>
              <TextArea autosize={{ minRows: 6, maxRows: 10 }} />
            </FormItem>
            <FormItem>
              <Upload>
                <Button>
                  <Icon type="paper-clip" theme="outlined" />
                </Button>
              </Upload>
            </FormItem>
          </Form>
        </Modal>
        <div className='email'>
        <Row gutter={16}>
          <Col span={8}>
          <Button type="primary" onClick={this.showModal}>
            Email
          </Button>
          </Col>
          <Col span={8}>
          <Button type="primary" onClick={() => window.print()} style={{poistion:'flex'}}>
            Print
          </Button>
          </Col>
        </Row>
         
         
        </div>
      </div>
    );
  }
}

export default Email;
