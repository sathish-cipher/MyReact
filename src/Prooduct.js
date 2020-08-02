import React, { Component } from "react";

class Prooduct extends Component {
  constructor() {
    super();
    this.state = {
      topicBox: null,
      list: [],
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    var l = event.target.elements.topicBox.value;
    this.setState({
      list: [...this.state.list, l],
    });
    event.target.reset();
    console.log(this.state.list);
  };

  render() {
    return (
      <div className="container-sm">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="topicBox"
            placeholder="Enter topic here..."
          />

          <button className="badge-primary" type="submit">
            Publish
          </button>
        </form>
        <table className>
          <th>Todos</th>
          {this.state.list.map((e) => (
            <tr className="alert alert-primary" key={e.index}>
              {e}
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Prooduct;
