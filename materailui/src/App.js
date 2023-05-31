import { IconButton } from '@mui/material';
import './App.css';
import ComboBox from './components/autocomplete/AutoComplete';
import CheckboxesTags from './components/autocomplete/CheckBox';
import CustomizedHook from './components/autocomplete/CustomizedHook';
// import GoogleMaps from './components/autocomplete/GoogleMapPlaces';
import Groupedcomp from './components/autocomplete/Grouped';
import Tags from './components/autocomplete/MultipleValues';
import BasicButtons from './components/buttons/BasicButton';
import ColorButtons from './components/buttons/ColorButton';
import IconButtonColors from './components/buttons/FingerPrint';
import BasicButtonGroup from './components/buttons/ButtonGroup';
import Checkboxes from './components/checkbox/BasicCheckBox';



function App() {
  return (
    <div className="App">
     <div className='container mt-2 autocomplete'>
      <h1 className='text text-success'>AutoComplete Component</h1>
      <ComboBox />
      <Groupedcomp />
      <CustomizedHook />
      {/* <GoogleMaps /> */}
      <Tags />
      <CheckboxesTags />
     </div>
     <div className='container mt-2 buttons'>  
     <h1 className='text text-danger'>Buttons</h1>
      <BasicButtons />
      <ColorButtons/>
     <IconButtonColors />
     <BasicButtonGroup />
     </div>
     <div className='container mt-2 checekbox'>
      <h1 className='text text-primary'>CheckBox:</h1>
      <Checkboxes />
     </div>
    </div>
  );
}

export default App;
