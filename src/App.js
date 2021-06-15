import "./App.css";
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Card, Button } from "react-bootstrap";

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      name: "",
    };
  }

  componentDidMount() {
    this.axxios();
  }
  axxios() {
    const numero = Math.round(Math.random() * 893);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${numero}`).then((res) => {
      const pokemons = res.data.sprites;
      let name = numero;
      if (typeof res.data.forms[0] !== "undefined") {
        this.setState({
          name: res.data.forms[0].name,
          pokemons: res.data.sprites,
        });
      }
    });
  }
  render() {
    return (
      <div className="container ">
        <Card className="text-center cartadiv">
          <Card.Header>Your unique Pokemon is...</Card.Header>
          <Card.Body>
            <Card.Title>
              {this.state.name.charAt(0).toUpperCase() +
                this.state.name.slice(1)}
            </Card.Title>
            <Card.Text>
              <img
                src={this.state.pokemons.front_default}
                className="card-img-top-left imagen"
                alt="img"
              ></img>
            </Card.Text>
            <Button
              variant="primary"
              onClick={this.axxios.bind(this)}
              className="btn btn-primary "
            >
              New <span className="pokemon">Pokemon!</span>
            </Button>
            <a
              className="d-block mt-3"
              href={`https://en.wikipedia.org/wiki/${this.state.name}`}
            >
              More info about {this.state.name} on Wikipedia
            </a>
          </Card.Body>
          <Card.Footer className="text-muted">
            Lucio Colombo @2020. Powered by PokeApi
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
