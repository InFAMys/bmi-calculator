import React from "react";
import './Bmi.css';

class Bmi extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 'Masukkan Berat Badan dalam KG dan Tinggi Badan dalam CM',
      weight: 0,
      height: 0
    }
  }

  weight = (event) => {
    this.setState({weight: event.target.value});
  }

  height = (event) => {
    this.setState({height: event.target.value});
  }
  proc = () => {
    let weight = this.state.weight;
    let height = this.state.height;
    let bmi = Math.round(weight / ((height / 100) ** 2));

    if (bmi < 18.5) {
      this.setState({result: 'Underweight'})
    } else if (bmi >= 18.5 && bmi < 25) {
      this.setState({result: 'Normal Weight'})
    } else if (bmi >= 25 && bmi < 30) {
      this.setState({result: 'Overweight'})
    } else if (bmi > 30) {
      this.setState({result: 'Obesity'})
    } else {
      this.setState({result: 'Error, Masukkan Berat dan Tinggi Badan Dahulu!'})
    }
    this.setState({bmi: bmi});
  }

  render() {
    return (<center>
      <div className="card bg-dark text-light">
        <div className="card-header">
          <h3>Body Mass Index</h3>
        </div>
        <div className="card-body">
          <table>
            <tr>
              <td>Berat Badan (KG)</td>
              <td><input className="form-control" name="weight" value={this.state.weight} onChange={ev => this.setState({weight: ev.target.value})}/></td>
            </tr>
            <tr>
              <td>Tinggi Badan (CM)</td>
              <td><input className="form-control" name="height" value={this.state.height} onChange={ev => this.setState({height: ev.target.value})}/></td>
            </tr>
          </table>

        </div>
        <div className="card-footer">
          <button href="" className="btn btn-secondary" onClick={this.proc}>Hitung</button>
          <hr/>
          <h4 className="title">Hasil</h4>
          <div class="alert alert-info" role="alert">
            {this.state.result}
            <br/> {this.state.bmi}
          </div>
        </div>
      </div>
    </center>);
  }
}

export default Bmi;
