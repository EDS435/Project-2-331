import React from 'react';
import { connect } from 'react-redux';

import TeamMember from './teamMember';
import AddPlayer from './AddPlayer';

import { removeCharacter } from '../actions';

class TeamList extends React.Component {

    onRemoveCharacter = (id) => {
        this.props.removeCharacter(id);
    }

    render() {
        const { title, characterType } = this.props;

        const characterArr = this.props[this.props.stateList];
        const characterList = characterArr.map((character, index) => {
            return (
                <TeamMember
                    key={index}
                    index={index}
                    character={character}
                    removeCharacter={this.onRemoveCharacter}
                />
            );
        });
        return (
            <div className="card">
                <h3>{title} List</h3>
                <AddPlayer characterType={characterType} />
                <ul className="list-group">
                    { characterList }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.characters.players,
        enemies: state.characters.enemies,
    };
};

export default connect(mapStateToProps, { removeCharacter })(TeamList);