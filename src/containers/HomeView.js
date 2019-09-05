import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Monitors from '../components/monitor/Monitors';
import { fetchMonitors } from '../actions/monitorActions';
import { getMonitors, getMonitorsLoading } from '../selectors/monitorSelectors';

class HomeView extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    monitors: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { monitors, loading } = this.props;
    if(loading) return <h1>LOADING</h1>;

    return <Monitors monitors={monitors} />;
  }
}

const mapStateToProps = state => ({
  monitors: getMonitors(state),
  loading: getMonitorsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchMonitors());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);

