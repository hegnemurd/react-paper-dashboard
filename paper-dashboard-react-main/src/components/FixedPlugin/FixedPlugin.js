/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { connect } from "react-redux";
import setBgAction from "actions/setBgAction";
import setColorAction from "actions/setColorAction";

import { Button } from "reactstrap";

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setBgAction: (payload) => dispatch(setBgAction(payload)),
  setColorAction: (payload) => dispatch(setColorAction(payload)),
});

function FixedPlugin(props) {
  const [classes, setClasses] = React.useState("dropdown show");
  const handleClick = () => {
    if (classes === "dropdown") {
      setClasses("dropdown show");
    } else {
      setClasses("dropdown");
    }
  };
  return (
    <div className="fixed-plugin">
      <div className={classes}>
        <div onClick={handleClick}>
          <i className="fa fa-cog fa-2x" />
        </div>
        <ul className="dropdown-menu show">
          <li className="header-title">SIDEBAR BACKGROUND</li>
          <li className="adjustments-line">
            <div className="badge-colors text-center">
              <span
                className={
                  props.bgState.bgColor === "black"
                    ? "badge filter badge-dark active"
                    : "badge filter badge-dark"
                }
                data-color="black"
                onClick={() => {
                  props.setBgAction("black");
                }}
              />
              <span
                className={
                  props.bgState.bgColor === "white"
                    ? "badge filter badge-light active"
                    : "badge filter badge-light"
                }
                data-color="white"
                onClick={() => {
                  props.setBgAction("white");
                }}
              />
            </div>
          </li>
          <li className="header-title">SIDEBAR ACTIVE COLOR</li>
          <li className="adjustments-line">
            <div className="badge-colors text-center">
              <span
                className={
                  props.activeState.activeColor === "primary"
                    ? "badge filter badge-primary active"
                    : "badge filter badge-primary"
                }
                data-color="primary"
                onClick={() => {
                  props.setColorAction("primary");
                }}
              />
              <span
                className={
                  props.activeState.activeColor === "info"
                    ? "badge filter badge-info active"
                    : "badge filter badge-info"
                }
                data-color="info"
                onClick={() => {
                  props.setColorAction("info");
                }}
              />
              <span
                className={
                  props.activeState.activeColor === "success"
                    ? "badge filter badge-success active"
                    : "badge filter badge-success"
                }
                data-color="success"
                onClick={() => {
                  props.setColorAction("success");
                }}
              />
              <span
                className={
                  props.activeState.activeColor === "warning"
                    ? "badge filter badge-warning active"
                    : "badge filter badge-warning"
                }
                data-color="warning"
                onClick={() => {
                  props.setColorAction("warning");
                }}
              />
              <span
                className={
                  props.activeState.activeColor === "danger"
                    ? "badge filter badge-danger active"
                    : "badge filter badge-danger"
                }
                data-color="danger"
                onClick={() => {
                  props.setColorAction("danger");
                }}
              />
            </div>
          </li>
          <li className="button-container">
            <Button
              href="https://www.creative-tim.com/product/paper-dashboard-react?ref=pdr-fixed-plugin"
              color="primary"
              block
              className="btn-round"
            >
              Download now
            </Button>
          </li>
          <li className="button-container">
            <Button
              href="https://www.creative-tim.com/product/paper-dashboard-react/#/documentation/tutorial?ref=pdr-fixed-plugin"
              color="default"
              block
              className="btn-round"
              outline
            >
              <i className="nc-icon nc-paper" /> Documentation
            </Button>
          </li>
          <li className="header-title">Want more components?</li>
          <li className="button-container">
            <Button
              href="https://www.creative-tim.com/product/paper-dashboard-pro-react?ref=pdr-fixed-plugin"
              color="danger"
              block
              className="btn-round"
              target="_blank"
            >
              Get pro version
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FixedPlugin);
