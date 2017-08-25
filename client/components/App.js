import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts, // this.props.posts
    comments: state.comments // this.props.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// Connect everything to Main
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
