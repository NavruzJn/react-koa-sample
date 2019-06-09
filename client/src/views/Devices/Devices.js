import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import deviceData from './DevicesData'

class Devices extends Component {

  render() {

    const device = deviceData.find( device => device.id.toString() === this.props.match.params.id);

    const deviceDetails = device ? Object.entries(device) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                  {
                    deviceDetails.map(([key, value]) => {
                      return (
                        <tr key={key}>
                          <td>{`${key}:`}</td>
                          <td><strong>{value}</strong></td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Devices;
