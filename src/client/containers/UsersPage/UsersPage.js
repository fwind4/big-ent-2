import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {FormattedMessage, FormattedRelative} from 'react-intl';

import {apiGetUsers} from 'api/actions';

import styles from './UsersPage.scss';

export class UsersPage extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.object.isRequired,
    apiGetUsers: PropTypes.func.isRequired,
    usersLastUpdate: PropTypes.number
  };

  static defaultProps = {
    usersLastUpdate: null
  };

  componentDidMount() {
    this.props.apiGetUsers();
    setTimeout(() => this.props.apiGetUsers(), 1500);
  }

  render() {
    const {loading, users, usersLastUpdate} = this.props;

    return (
      <section style={{padding: 20}}>
        <h2>
          <FormattedMessage id="app.users.title" defaultMessage="Users" />
          {usersLastUpdate && (
            <span className={styles.lastUpdate}>
              (updated <FormattedRelative value={usersLastUpdate} />)
            </span>
          )}
        </h2>
        <RaisedButton
          disabled={loading}
          label={<FormattedMessage id="app.users.addUser.button" defaultMessage="Create User" />}
          onClick={() => {
          }}
        />
        <Table multiSelectable>
          <TableHeader>
            <TableRow displayBorder>
              <TableHeaderColumn>Role</TableHeaderColumn>
              <TableHeaderColumn>User Name</TableHeaderColumn>
              <TableHeaderColumn>First Name</TableHeaderColumn>
              <TableHeaderColumn>Last Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover>
            {users.map((data) => (
              <TableRow key={data.id}>
                <TableRowColumn>{data.RoleId}</TableRowColumn>
                <TableRowColumn>{data.userName}</TableRowColumn>
                <TableRowColumn>{data.firstName}</TableRowColumn>
                <TableRowColumn>{data.lastName}</TableRowColumn>
                <TableRowColumn>{data.email}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.api.get('loading'),
    users: state.api.getIn(['data', 'users']),
    usersLastUpdate: state.api.getIn(['lastUpdate', 'users'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiGetUsers() {
      dispatch(apiGetUsers());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
