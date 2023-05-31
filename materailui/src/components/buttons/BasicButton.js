import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
   <div className='container mt-2 d-flex flex-column justify-content-center align-items-center'>
     <Stack spacing={2} direction="row">
        <h1 className='text text-dark'>Basic button</h1>
      <Button onClick={()=> alert('this is text button')} variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
   </div>
  );
}