import { Form,  message } from "antd";
import './viewInvoice.css'
//import './Sign.css'
import React from "react";
import { Row, Col } from "antd";
import Defaultlayout from "../defaultLayout/defaultLayout";
import Email from '../email/index';
import PrintData from '../print/index';
import { Layout, Menu, Icon, Breadcrumb } from "antd";

const FormItem = Form.Item;
const { Header, Sider, Content, Footer } = Layout;

class Invoice extends React.Component {
  state = {
    localData: ""
    
  };


  handleMenuClick(e) {
    message.info("Click on menu item.");
  }

   

  render() {
  console.log('===>Data', this.state.apiData)
    return (
      <Defaultlayout>
      <Header style={{ background: "#fff", padding: 0 }}>
        <Email />
      </Header>
       <div style={{paddingLeft:'95%'}}>
      </div>
        <Form className="invoiceData">
        
          <div className="invoice-box">
          <h3><strong style={{paddingLeft:10}}>INVOICE</strong></h3>
            <table cellpadding="0" cellspacing="0">
        
              {/* <h2><strong>INVOICE</strong></h2> */}
              <tr className="top">
                <td colspan="2">
                  <table>
                    <tr>
                    <td className='dataSpan'>
                        Invoice #: 180 <br />Created: 08 Aug 2018<br />Due: 14 Aug,
                        2018
                     </td>
                      <td className="title" style={{paddingTop:0}}>
                        <img className='image' src={require('../../image/logo.jpg')} />
                      </td>
                     
                    </tr>
                  </table>
                </td>
              </tr>

              <tr className="information">
                <td colspan="2">
                  <table style={{textAlign:"left"}}>
                    <tr >
                      <td style={{paddingBottom: 0}}>
                        <strong>From:</strong>
                       <td>example@<br />infiniti7@gmail.com<br />#42, 6th main<br /> jp nagar 8th phase<br/>bangalore</td>
                        </td>
                       

                      <td className='viewTo'>
                        <strong>For:</strong>
                        <br />
                        <td>example@<br />infiniti7@gmail.com<br />#42, 6th main<br /> jp nagar 8th phase<br/>bangalore</td>
                      </td>
                      
                      <tr>

                      <td>
                     
                        <br />
                      </td>
                      </tr>
                    </tr>
                    <tr>
                    <td style={{paddingBottom: 50}}>
                        
                       <td><label>Client Id:18</label><br />
                       <label>Invoice Number:180</label><br />
                       <label>DATE:08 Aug 2018</label><br />
                       <label>Terms:6 Days</label><br />
                       <label>Due:14 Aug 2018</label><br />
                       </td>
                        </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr className="heading">
                <td>Payment Method</td>

                <td>Check #</td>
              </tr>

              <tr className="details">
                <td>Check</td>

                <td />
              </tr>

              <tr className="heading">
                <td>Item</td>

                <td>Price</td>
              </tr>

              <tr className="item">
                <td>Website design</td>

                <td>$</td>
              </tr>

              <tr className="item">
                <td>Hosting (3 months)</td>

                <td>$</td>
              </tr>

              <tr className="item last">
                <td>Domain name (1 year)</td>

                <td>$</td>
              </tr>

              <tr className="total">
                <td />

                <td>Total: $</td>
              </tr>
            </table>
          </div>
          <div />
  
         <div>
       

              
         </div>
        </Form>
       
      </Defaultlayout>

      
    );
  }
}



export default Invoice;
