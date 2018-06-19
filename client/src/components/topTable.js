import React, { Component} from 'react';
import './topTable.css';
import { VictoryBar } from 'victory';
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
        <div className="tableContainer">
          <h1>Dashboard</h1>
          <table className="table">
          <thead>
            <tr>
              <th>METRIC</th>
              <th>PRODUCT</th>
              <th>PCT_UPLIFT</th>
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
        </div>
    );
  }

}

export default TopTable;