import React, { Component } from "react";

export default class testTags extends Component {
  //State --optional
  state = {
    count: 0,
    tags: ["tags1", "tags2", "tags3"],
  };

  //this method created to if else condition
  renderTags() {
    if (this.state.tags.length === 0) return "there is not tags!";

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //Render
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
  //note : di js ketika if dua kondisi menggunakan && dan keduanya true maka
  //condition kedua dijadikan sebagai output
}
