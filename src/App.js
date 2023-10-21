import React from 'react';
import ColorPicker from './ColorPicker';
import './Colorpicker.css';
const App = () => {
  const colors = [
    'red','lime','blue','yellow','magenta','cyan','orange','purple','pink','green','tomato','turquoise','brown','orange','steelblue','gold',
  ];
  return (
    <center>
      <div className='layer1'>
        <h1>Color Picker</h1>
        <div className='layer2'>
          <div id="id1">
            <ColorPicker colors={colors}/>
          </div>
        </div>
      </div>
    </center>
  );
};
export default App;