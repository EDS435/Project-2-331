import React from 'react';
import { connect } from 'react-redux';
import { addCharacter } from '../actions';

class AddPlayer extends React.Component {

    state = { name: '', initiative: '' }

    onFormSubmit = (event) => {
        const { name, initiative } = this.state;
        const { characterType } = this.props;

        event.preventDefault();
        this.props.addCharacter(name, initiative, characterType);
        this.setState({ name: '', initiative: '' });
    }

    render() {
        const { name, initiative } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}
                  style={{ padding: '0 12px 12px' }}>

                <div className="form-group">
                    <label>Name of Task</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={event => this.setState({ name: event.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label>Priority</label>
                    <input
                        type="text"
                        className="form-control"
                        name="initiative"
                        value={initiative}
                        onChange={event => this.setState({ initiative: event.target.value })}
                    />
                </div>

                <input type="submit" className="btn btn-success" value="Add Task" />

            </form>
        );
    }
}

export default connect(null, { addCharacter })(AddPlayer);