import React from "react";
import dance from "../../../assets/images/dance";
import walk from "../../../assets/images/walking_bender";
import work from "../../../assets/images/work";
import play from "../../../assets/images/playing";
import relax from "../../../assets/images/relax";
import styled from "styled-components";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import $ from "jquery";
const options = ["Work", "Walk", "Play", "Dance", "Relax"];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "",
    };
  }

  componentDidMount() {
    const fetchRobot = (id) =>
      $.ajax({
        method: "GET",
        url: `/robots/${id}`,
      });
    fetchRobot(1).then((robot) => {
      this.setState({
        status: robot.robot.status,
      });
    });
  }
  _onSelect(value) {
    const editRobot = (robot) =>
      $.ajax({
        method: "Patch",
        url: `/robots/1`,
        data: { robot },
      });
    let robot = {
      status: value.value,
      id: "1",
    };
    editRobot(robot).then((robot) => {
      this.setState({
        status: robot.robot.status,
      });
    });
  }

  getGif() {
    if (!this.state.status) return;
    if (this.state.status === "Walk") return walk;
    if (this.state.status === "Dance") return dance;
    if (this.state.status === "Work") return work;
    if (this.state.status === "Play") return play;
    if (this.state.status === "Relax") return relax;
  }

  render() {
    let currentState = this.state.status;
    let gif = this.getGif();
    if (!currentState) {
      return <p>loading</p>;
    } else {
      return (
        <div>
          <Dropdown
            styles={{
              // Fixes the overlapping problem of the component
              menu: (provided) => ({ ...provided, zIndex: 9999 }),
            }}
            options={options}
            className="dropdown"
            onChange={this._onSelect.bind(this)}
            value={this.state.status}
            placeholder={"Select an option"}
            menuPortalTarget={document.body}
            menuPortalTarget={document.querySelector("body")}
            menuPosition="fixed"
          />
          <img src={gif} className="gif" />;
        </div>
      );
    }
  }
}

export default Home;
