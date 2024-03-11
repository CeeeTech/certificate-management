
import React from 'react';
import { 
  IconButton, 
  Typography, 
  Grid, 
  Table, 
  Box, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody, 
  Button,
  Paper,
  Container,
  InputBase,
  Divider,
} from '@mui/material';

import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

import { alpha, styled } from '@mui/material/styles';
import { gridSpacing } from 'store/constant';
import RevenueCard from 'ui-component/cards/RevenueCard';

import MainCard from 'ui-component/cards/MainCard';
import AddIcon from '@mui/icons-material/Add';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';

import SignalCellularAltTwoToneIcon from '@mui/icons-material/SignalCellularAltTwoTone';

import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';

//import { Typography, TextField, InputAdornment } from '@mui/material';

//import { Search as SearchIcon } from '@mui/icons-material';
import { styled as myStyled } from '@mui/material/styles'; // Import with alias

import { styled as mysysstyle } from '@mui/system';

// const HeaderPaper = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   color: theme.palette.primary.contrastText,
//   padding: theme.spacing(3),
//   borderRadius: theme.shape.borderRadius,
//   marginBottom: theme.spacing(3),
// }));

const StudentBoxPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  backgroundColor: '#F5F5F5',
}));

const StudentItemBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#E0E0E0',
  marginBottom: theme.spacing(2),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
}));

const SearchBoxPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#F5F5F5',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#C0C0C0',
  color: theme.palette.common.black,
}));

function SamplePage() {
  return (
    <Container maxWidth="lg">
    <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <HeaderPaper>
            <Typography variant="h1" gutterBottom>
              Welcome Miller
            </Typography>
            <Typography variant="body1">
              <b>Use this portal to refer potential students to us, we will pay you a Student fee if the student registers with us!</b>
            </Typography>
          </HeaderPaper> */}
     </Grid>     
    <Grid container spacing={2}>
  <Grid item xs={12} md={4}>
    <ActionButton variant="contained" fullWidth>
      Register A New Student
    </ActionButton>
  </Grid>
  <Grid item xs={12} md={4}>
    <ActionButton variant="contained" fullWidth style={{ backgroundColor: '#DCC030' }}>
    Create A New Batch
    </ActionButton>
  </Grid>
  <Grid item xs={12} md={4}>
  <ActionButton variant="contained" fullWidth>
      Create A New Course
    </ActionButton>
  </Grid>
</Grid>
        <Grid item xs={12}>
          <StudentBoxPaper>
            <Typography variant="h6">Student Overview</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <StudentItemBox>
                  <Typography variant="subtitle1">Registrations</Typography>
                  <Typography variant="h4">1</Typography>
                </StudentItemBox>
              </Grid>
              <Grid item xs={12} md={3}>
                <StudentItemBox>
                  <Typography variant="subtitle1">Potential Earnings (LKR)</Typography>
                  <Typography variant="h4">0</Typography>
                </StudentItemBox>
              </Grid>
              <Grid item xs={12} md={3}>
                <StudentItemBox>
                  <Typography variant="subtitle1">Paid (LKR)</Typography>
                  <Typography variant="h4">2000</Typography>
                </StudentItemBox>
              </Grid>
              <Grid item xs={12} md={3}>
                <StudentItemBox>
                  <Typography variant="subtitle1">To Be Paid (LKR)</Typography>
                  <Typography variant="h4">0</Typography>
                </StudentItemBox>
              </Grid>
              <Grid item xs={12} md={3}>
                <StudentItemBox>
                  <Typography variant="subtitle1">Students</Typography>
                  <Typography variant="h4">0</Typography>
                </StudentItemBox>
              </Grid>
            </Grid>
          </StudentBoxPaper>
        </Grid>
        <Grid item xs={12}>
          <SearchBoxPaper>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                <SearchIcon />
              </Grid>
              <Grid item xs={11}>
                <InputBase
                  placeholder="Search for Students"
                  inputProps={{ 'aria-label': 'search Students' }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </SearchBoxPaper>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Students</StyledTableCell>
                  <StyledTableCell>Course Name</StyledTableCell>
                  <StyledTableCell>Mobile Number</StyledTableCell>
                  <StyledTableCell>Earnings/Potential Earnings (LKR)</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Steav</TableCell>
                  <TableCell>Access</TableCell>
                  <TableCell>0445548964</TableCell>
                  <TableCell>20000</TableCell>
                  <TableCell>Processing</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Miller</TableCell>
                  <TableCell>Access</TableCell>
                  <TableCell>0414188964</TableCell>
                  <TableCell>20000</TableCell>
                  <TableCell>Processing</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SamplePage;

