import React from 'React';

class Test extends 'React.Component'
{
    render(){
        return (
            <div className="form-row">
                  <label htmlFor="code" className="control-label">Insert code</label>
                  <input type="text" className="form-control" name="code">
            </div>
            <div className="form-row">
                <button type="submit" className="btn" >Send</button>
            </div>
        );
    }
}

export default Test;
