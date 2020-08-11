import React, { Component } from "react";
import useState from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Spinner, Dropdown, DropdownButton } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { ClearButton, Typeahead } from "react-bootstrap-typeahead";
import completeConcentrationsList from "./ConcentrationsList.js";

import "react-bootstrap-typeahead/css/Typeahead.css";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concentration: "",
      numCredits: 0,
    };
  }

  courseFieldGenerator = () => {
    const creds = this.state.numCredits;
    var retArr = [];
    var i;
    for (i = 0; i < creds; i++) {
      let uniqueID = "form" + i;
      retArr.push(
        <Col>
          <Form.Group controlId={uniqueID}>
            <Form.Label>
              Select the course condition/requirement to earn this credit:
            </Form.Label>
            <Form.Control as="select">
              <option id="reqType1">One or more specific courses</option>
              <option id="reqType2">
                Any course originally from this department (i.e. not
                cross-listed)
              </option>
              <option id="reqType3">
                Any specific level (e.g. 0100, 0400, 1000, etc.) course from
                this department (i.e. not cross-listed)
              </option>
              <option id="reqType4">
                Any course listed by or crosslisted with this department
              </option>
              <option id="reqType5">
                Any specific level (e.g. 0100, 0400, 1000, etc.) course listed
                by or crosslisted with this department
              </option>
              <option id="reqTypeOther">Other</option>
            </Form.Control>
          </Form.Group>
        </Col>
      );
    }
    console.log(retArr);
    return retArr;
  };

  render() {
    return (
      <div>
        <h1 className="App-header">Concentration Requirements Form</h1>
        <Form>
          <Col>
            {"Select your concentration from the list below."}
            <Typeahead
              id="concentration-select"
              options={completeConcentrationsList}
              placeholder="Choose a concentration"
              onChange={(selected) => {
                this.setState({
                  concentration: selected,
                });
              }}
              selected={this.state.concentration}
            />
            {console.log(this.state.concentration)}
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>
                Please input the total number of credits required:
                <Form.Control
                  id="creditsField"
                  // type="credits"
                  placeholder="0"
                  onChange={() =>
                    this.setState(
                      {
                        numCredits: document.getElementById("creditsField")
                          .value,
                      },
                      () => {
                        console.log(
                          "after setting state: ",
                          this.state.numCredits
                        );
                      }
                    )
                  }
                  selected={this.state.numCredits}
                />
              </Form.Label>
            </Form.Group>
          </Col>
          {this.courseFieldGenerator()}
        </Form>
      </div>
    );
  }
}

export default App;
