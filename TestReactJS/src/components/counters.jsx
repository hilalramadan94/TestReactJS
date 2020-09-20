import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //state dan handler dipindahkan ke parent component App.js

  render() {
    const { onDelete, onReset, onIncrement, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id} //key is internal id for react
            // value={counter.value} //this props encapsulation to one object counter itself
            // id={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          ></Counter>
        ))}
      </div>
    );
  }
  //<h4> di dalam Counter "<h4>Title ID-{counter.id}</h4>" diperlakukan sebagai children element, bisa dipanggil di bagian componentnya
  //atau bisa ditulis juga dengan menyimpannya di prop id={counter.id} dan dipanggil dengan this.props.id
}

export default Counters;
