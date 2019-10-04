class A extends React.Component {
  render() {
    return (
      <input
        value={this.state.data}
        onChange={(..._args) => {
          let _val =
            _args[0] && _args[0].target instanceof window.Element
              ? _args[0].target.value
              : _args[0];

          this.setState({
            data: _val
          });
        }}/>
    );
  }
}
