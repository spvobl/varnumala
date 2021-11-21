import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
export default function ButtonAppBar() {
  return (
      <Box sx={{padding:2}}>
          <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                वर्णमाला
                </Typography>
            </Toolbar>
        </AppBar> 
      </Box> 
      );
}