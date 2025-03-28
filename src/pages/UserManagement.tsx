import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGetUsers } from '../hooks/users-hook';
import { SingleUser } from '../types/users-types';

const UserManagement = () => {
  const { data, isPending, error } = useGetUsers();
  console.log(data);

  const handleDelete = (id: number) => {
    console.log('Delete child with ID:', id);
  };

  if (isPending) {
    return (
      <Box display='flex' justifyContent='center' mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color='error' align='center' mt={5}>
        Error loading users.
      </Typography>
    );
  }

  const children = data?.users?.filter(
    (user: SingleUser) => user.role === 'child'
  );

  return (
    <Box
      sx={{
        px: 12,
        py: 8,
        '@media (max-width: 1280px)': {
          px: 8,
          py: 6,
        },
        '@media (max-width: 768px)': {
          px: 6,
          py: 5,
        },
        '@media (max-width: 640px)': {
          p: 2,
        },
      }}
    >
      <Typography variant='h5' gutterBottom>
        User Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align='right'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {children?.map((child: SingleUser) => (
              <TableRow key={child.id}>
                <TableCell>{child.first_name}</TableCell>
                <TableCell>{child.last_name}</TableCell>
                <TableCell>{child.email}</TableCell>
                <TableCell align='right'>
                  <IconButton
                    color='error'
                    onClick={() => handleDelete(child.id)}
                  >
                    <DeleteIcon sx={{ color: 'black' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {children?.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align='center'>
                  No child users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserManagement;
