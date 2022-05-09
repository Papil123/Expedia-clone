import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function NativePickers() {
  return (
    <Stack component="form" noValidate spacing={3}>
        <div style={{display:"flex",gap:"15px",marginRight:"-30px",marginLeft:"155px"}} >
      <TextField
        id="date"
        label="Check-in"
        type="date"
        defaultValue="2022-05-09"
        sx={{ width: 160 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="Check-out"
        type="date"
        defaultValue="2022-05-09"
        sx={{ width: 160,marginRight:"15px",height:"20px"}}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </div>

    </Stack>
  );
}
