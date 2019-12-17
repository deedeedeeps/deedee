import React, { Component } from "react";
// import renderToStaticXML from "react-xml";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      loading: true,
      photo:
        "https://cdn.shopify.com/s/files/1/0614/0993/products/3oz_1024x1024.jpg?v=1475243326"
    };
  }

  async componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
    // const url = "https://uvdata.arpansa.gov.au/xml/uvvalues.xml";
    // const response = await fetch(url);
    // const data = await response.text();
    // console.log(data);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="App">
        <h2>the clock is ticking</h2>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        {this.state.loading ? <h2>loading...</h2> : <h2>uv.</h2>}
        <img src={this.state.photo} alt="pretzel" width={200} />
      </div>
    );
  }
}

export default HomePage;

// https://uvdata.arpansa.gov.au/xml/uvvalues.xml
