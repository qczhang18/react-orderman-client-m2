/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// Component imports
import SuccessButton from '../../common/buttons/SuccessButton';


/**
 * @class LoginForm represents
 * @description The form to authenticate Users (system admins)
 * Contains two inputs and a link
 *   input of type "email"
 *   input of type "password"
 *   Link from "react-router-dom" that routes to the "/" route for the SignupForm
 *
 */
export default class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="panel panel-default">
        <div className="container-fluid">
          <form onSubmit={handleSubmit}>
            <div className="spacer" />
            <h3>System Admin <b>Log in</b></h3>
            <div className="spacer" />
            <div className="col-md-10 col-md-offset-1">
              <div className="form-group">
                <input
                  autoComplete="off"
                  className="form-control"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="form-group">
                <input
                  autoComplete="off"
                  className="form-control"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="spacer" />
              <SuccessButton
                block
                title="Log in"
              />
              <div className="spacer" />
            </div>
          </form>
        </div>
        <div className="container-fluid">
          <h4>
            <Link to="/">
              {"I don't have an account yet"}
            </Link>
          </h4>
        </div>
        <div className="spacer" />
      </div>
    );
  }
}


LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


LoginForm.defaultProps = {};
