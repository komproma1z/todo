import React, { PureComponent } from 'react';

import Typography from '@material-ui/core/Typography';

class TaskAddingField extends PureComponent {
    render() {

        const { inputValue, handleChange, handleSubmit } = this.props;

        return (
            <>
                <Typography variant="h5">TODO app</Typography>
                <form style={{margin: '10px 0'}} onSubmit={handleSubmit}>
                    <input type="text" value={inputValue} onChange={e => handleChange(e)}></input>
                    <input type="submit" value="Add task"></input>
                </form>
            </>
        );
    }
}

export default TaskAddingField;
