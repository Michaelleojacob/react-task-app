import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      value: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.removeLi = this.removeLi.bind(this);
  }

  handleInput(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const submittedTask = this.state.value;
    this.setState({ value: '' });
    const newArr = [...this.state.arr];
    newArr.push(submittedTask);
    this.setState({ arr: newArr });
  }
  removeLi(todoItem) {
    this.setState({ arr: this.state.arr.filter((item) => item !== todoItem) });
  }

  render() {
    return (
      <div>
        <form id="form" onSubmit={this.handleSubmit}>
          <input
            type={'text'}
            onChange={this.handleInput}
            value={this.state.value}
          ></input>
          <button>submit</button>
        </form>
        <div>
          <ul>
            {this.state.arr.map((item) => {
              return (
                <li key={item} onClick={() => this.removeLi(item)}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Overview;
