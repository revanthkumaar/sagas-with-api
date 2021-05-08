import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    <button onClick={() => this.props.dispatch(fetchDog())}>Show Dog </button>
    {
      this.props.loading
      ? <p> Loading</p>
      : this.props.error ? <p>Error occurred</p> : <p><img src={this.props.url}</p>
    }
  }
}