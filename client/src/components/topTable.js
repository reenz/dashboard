import React, { Component} from 'react';
import Chartkick from "chartkick";
import ReactChartkick, { LineChart, PieChart, BarChart } from 'react-chartkick';
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart);

class TopTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      topTable: []
    }
  }

  componentDidMount() {
    let self = this;
    fetch('top-table')
      .then(res => res.json())
      .then(jsonPayload => {
        self.setState({ topTable: jsonPayload.table })
      });
  }

  render() {
    let data = []
    return (
        <div className="Users container">
          <h1>Users</h1>
          <table className="table">
          <thead>
            <tr>
              <th>topTable METRIC</th>
              <th>topTable PRODUCT</th>
              <th>topTable PCT_UPLIFT</th>
            </tr>
          </thead>
          <tbody>
              {this.state.topTable.map(row =>
                <tr key={row.ID}>
                  <td>{row.METRIC} </td>
                  <td>{row.PRODUCT} </td>
                  <td>{row.PCT_UPLIFT}</td> 
                </tr>
              )}
          </tbody>
          </table>
          <BarChart data={this.state.topTable.map(row => [row.PRODUCT,row.PCT_UPLIFT])} />
        </div>
    );
  }

}

export default TopTable;