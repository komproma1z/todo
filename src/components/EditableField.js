import React, { PureComponent } from 'react';

class EditableField extends PureComponent {

    state = {
      isEditing: false,
    };

    renderButton = () => {
      const { isEditing } = this.state;
      return (
        <>
          {isEditing
            ? <button onClick={() => this.setState({isEditing: false})}>Done</button>
            : <button onClick={() => this.setState({isEditing: true})}>Edit</button>
          }
        </>
      )
    }

    renderField = () => {
      const { isEditing } = this.state;
      const { title, onChangeText } = this.props;
      return (
        <>
          {isEditing
            ? <input value={title} onChange={(e) => onChangeText(e.target.value)}></input>
            : <span>{title}</span>
          }
        </>
      )
    }

    render() {
      return (
        <span>{this.renderField()} {this.renderButton()}</span>
      )
    }
  }

export default EditableField;
