import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {FormattedMessage, FormattedRelative} from 'react-intl';

import {apiAddUser} from 'api/actions';


export class UserCreate extends React.Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        apiAddUser: PropTypes.func.isRequired,
    };
}