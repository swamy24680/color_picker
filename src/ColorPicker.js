import React, { Component } from 'react';
import './App.css'; 
class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isColorListVisible: false,
      selectedColor: null,
    };
  }
  toggleColorList = () => {
    this.setState((prevState) => ({
      isColorListVisible: !prevState.isColorListVisible,
    }));
  };
  handleColorClick = (color) => {
    this.setState({
      selectedColor: color,
      isColorListVisible: false,
    });
  };
  render() {
    const { colors } = this.props;
    const { isColorListVisible, selectedColor } = this.state;
    return (
      <div>
        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-square"
                style={{
                    backgroundColor: color,
                    boxShadow: `0px 0px 5px rgba(0, 0, 0, 0.5)`,
                  }}
                onClick={() => this.handleColorClick(color)}
               ></div>
            ))}
          </div>
        )}
        <br></br>
        <button className="button" onClick={this.toggleColorList} style={{backgroundColor:selectedColor}}>
          Pick a color
        </button>
        {selectedColor && (
          <div className="selected-color">
            Selected Color: <span style={{ color: "red" }}>{selectedColor}</span>
          </div>
        )}
      </div>
    );
  }
}
export default ColorPicker;