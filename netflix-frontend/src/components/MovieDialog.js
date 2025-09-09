import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
  const { open, id } = useSelector((store) => store.movie);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (open) {
      console.log('MovieDialog opened with movie ID:', id);
    }
  }, [open, id]);

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
      sx={{
        ".MuiPaper-root": {
          backgroundColor: "black", // dark background
          p: 0, // remove default padding
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        {/* Responsive 16:9 container */}
        <div className="relative w-full h-0 pb-[56.25%]">
          <div className="absolute top-0 left-0 w-full h-full">
            <VideoBackground movieId={id} bool={true} />
          </div>
        </div>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          variant="outlined"
          onClick={handleClose}
          sx={{ color: "white", borderColor: "white" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
