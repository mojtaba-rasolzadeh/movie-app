import { useState } from "react";
import { Box, IconButton, Modal } from "@mui/material";
import { ManageSearchRounded } from "@mui/icons-material";

import { SearchInputOutlined } from "../../constant/SearchInputs";
import { teal } from "@mui/material/colors";

const SearchButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton sx={{color:teal[500]}} onClick={handleOpen}>
        <ManageSearchRounded fontSize="large" />
      </IconButton>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        sx={{
          backgroundColor: "rgba(26, 32, 39, 0.7)",
          backdropFilter: "blur(4px)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "90%",
            p: 4,
          }}
        >
          <SearchInputOutlined handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};
export default SearchButton;
