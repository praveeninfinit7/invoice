import React from "react";
import ReactToPrint from "react-to-print";
import { Button } from "antd";
import Invoice from '../viewInvoice/index'


class PrintData extends React.Component {
    render() {
      return (
    <div>


          <ReactToPrint
            trigger={() => <Button>Print</Button>}
            content={() => this.componentRef}
          />
          <Invoice ref={el => (this.componentRef = el)} />
         
    </div>
       
       
      );
    }
  }

export default PrintData;