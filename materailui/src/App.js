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
import RadioButtonsGroup from './components/radios/BasicRadio';
import ErrorRadios from './components/radios/ShowError';
import BasicRating from './components/rating/BasicRating';
import BasicSelect from './components/select/BasicSelect';
import MultipleSelect from './components/select/multiplInput';
import ContinuousSlider from './components/slider/BasicSlider';
import DiscreteSlider from './components/slider/discreteSlider';
import CustomSliderMarks from './components/slider/customMarks';
import VisibleLabelSliderLabel from './components/slider/visibleLabel';
import BasicTextFields from './components/textField/simpleTextField';
import FormPropsTextFields from './components/textField/requiredTextField';
import ColorToggleButton from './components/togglebutton/basicToggle';
import HorizontalLinearStepper from './components/stepper/basicStepper';
import TextMobileStepper from './components/stepper/mobilestepper';
// import SwipeableTextMobileStepper from './components/stepper/carousel';



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
     <div className='container mt-3 radio'>
      <RadioButtonsGroup />
      <ErrorRadios />
     </div>
     <div className='container mt-3 rating'>
      <BasicRating />
     </div>
     <div className='container mt-3 mb-3 select'>
      <h1 className='text text-primary'>Select</h1>
      <BasicSelect />
      <MultipleSelect />
     </div>
     <div className='container mt-3 slider'>
      <h2 className='text text-dark'>Slider</h2>
      <ContinuousSlider />
      <p className='text text'>Descrete slider</p>
      <DiscreteSlider />
      <h2 className='text text-primary'>Custom Slider Marks:</h2>
      <CustomSliderMarks />
      <h2 className='text text-danger'>Visible Label</h2>
      <VisibleLabelSliderLabel />
     </div>
     <div className='container mt-3 text-field'>
      <h2 className='text text-primary'>TextField</h2>
      <BasicTextFields />
      <h3 className='text'>Required text field</h3>
      <FormPropsTextFields />
     </div>
     <div className='container mt-3 togglebutton'>
      <h1 className='text text-primary'>ToggleButton</h1>
      <ColorToggleButton />
     </div>
     <div className='container mt-3 stepper'>
      <HorizontalLinearStepper />
      <TextMobileStepper/>
      {/* <SwipeableTextMobileStepper /> */}
     </div>
    </div>
  );
}

export default App;
