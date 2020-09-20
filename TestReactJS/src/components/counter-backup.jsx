import React, { Component } from "react";

export default class Counter extends Component {
  //State --optional
  state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200", //random image
  };
  //note : props (properties) bisa didefine ketika componen ini dipanggil, defaultnya null

  styles = {
    fontSize: "25px",
    fontWeight: "bold",
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  //note : pola = () => digunakan untuk bind evendHandler agar tidak perlu membuat contructor bind
  //() adalah tempat untuk mengisi parameter seperti biasa
  //untuk mengubah state digunakan kondisi this.setState();

  //Render
  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {this.props.counter.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  //Note : onClick={this.props.onDelete} -> without param
  //() => this.props.onDelete(this.props.id) -> with param

  //Function
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  //Function
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}
