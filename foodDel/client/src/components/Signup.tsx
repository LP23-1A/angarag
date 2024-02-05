"use client";
import { Pinecone, Searchicon } from "./Logo";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Autocomplete,
} from "@mui/material";

export default function Burtgel() {
  return <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
    <Box>
        <Box sx={{display: "flex", justifyContent:"start", fontSize:"14px", alignItems:"center"}}>Нэр</Box>
        <TextField
          id="filled-multiline-flexible"
          label="Нэрээ оруулна уу"
          multiline
          maxRows={4}
          variant="filled"
        />
    </Box>
    <Box>
        <Box sx={{display: "flex", justifyContent:"start", fontSize:"14px", alignItems:"center"}}>И-мэйл</Box>
        <TextField
          id="filled-multiline-flexible"
          label="И-мэйл хаягаа оруулна уу"
          multiline
          maxRows={4}
          variant="filled"
        />
    </Box>
    <Box>
        <Box sx={{display: "flex", justifyContent:"start", fontSize:"14px", alignItems:"center"}}>Хаяг</Box>
        <TextField
          id="filled-multiline-flexible"
          label="Та хаягаа оруулна уу"
          multiline
          maxRows={4}
          variant="filled"
        />
    </Box>
  </Stack>;
}
