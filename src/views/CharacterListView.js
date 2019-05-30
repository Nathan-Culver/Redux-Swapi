import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { fetchCharacters } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer }) => {
  const { fetching, characters } = charsReducer;
  return ({
    fetching,
    characters
  })
}

export default connect(
  mapStateToProps,
  {
    fetchCharacters
  }
)(CharacterListView);
