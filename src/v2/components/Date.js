import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" className='ml-4'>     
      <Button variant="outlined" style={{color: "#53545C",border: "1px solid #a7a7ab"}}> <CalendarMonthOutlinedIcon /> &nbsp; Filter</Button>
    </Stack>
  );
}
