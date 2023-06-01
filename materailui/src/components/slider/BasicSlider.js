import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';


export default function ContinuousSlider() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
      <Slider onChange={handleChange}  defaultValue={30} aria-label="Disabled slider" />
      </Stack>
     <Button color='error' onClick={()=> console.log(value)} variant='contained'>Click</Button>
    </Box>
  );
}