'use client'
import { Pinecone, Searchicon } from "./Logo";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {Box, Button, FormControl,IconButton,InputAdornment,InputLabel, OutlinedInput,Stack,TextField, Autocomplete,} from "@mui/material";

export default function HeaderLogin() {
  return (

    <Stack sx={{display: "flex"}}>
      <Stack>
        <Box sx={{display: "flex", justifyContent:"center", alignItems:"center"}}>
          <Pinecone/>
          <Button sx={{color: "#000000"}}>НҮҮР</Button>
          <Button sx={{color: "#000000"}}>ХООЛНЫ ЦЭС</Button>
          <Button sx={{color: "#000000"}}>ХҮРГЭЛТИЙН БҮС</Button>
        </Box>
        <Box>
          <Searchicon/>
          <Autocomplete sx={{width:"260px", height: "40px", padding: "8px 16px"}}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField sx={{width: "196px", height: "24px"}}
            {...params}
            label="Хайх"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
        </Box>
      </Stack>
    </Stack>



  //   <Stack sx={{width: "448px",padding: "32px", display: "flex",gap: "48px",flexDirection: "column",}} >
  //   <Box display={"flex"} justifyContent={"center"} fontSize={"28px"}>
  //     Нэвтрэх
  //   </Box>
  //   <Stack sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  //     <Stack sx={{ flex: "" }}>
  //       <Box fontSize={"14px"}>Имэйл</Box>
  //       <TextField sx={{ border: "1px solid gray", "&:focus": "none" }} id="filled-multiline-flexible" label="Имэйл хаягаа оруулна уу" multiline maxRows={4} variant="filled"/>
  //     </Stack>
  //     <Stack sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
  //       <Box fontSize={"14px"}>Нууц Үг</Box>

        
  //       <FormControl sx={{ width: "38ch", bgcolor: "#F7F7F8", borderRadius: "1ch", border: "none", }} variant="outlined" >
  //         <InputLabel htmlFor="outlined-adornment-password">  Нууц үг </InputLabel>
  //         <OutlinedInput id="outlined-adornment-password"
           
  //           endAdornment={
  //             <InputAdornment position="end">
  //               <IconButton
  //                 aria-label="toggle password visibility"
      
  //                 edge="end"
  //               >
  //               </IconButton>
  //             </InputAdornment>
  //           }
  //           label="Password"
  //         />
  //       </FormControl>
  //       <Box fontSize={"12px"} display={"flex"} justifyContent={"flex-end"}>
  //         Нууц үг сэргээх
  //       </Box>
  //     </Stack>
  //   </Stack>
  //   <Stack sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
  //     <Button disabled sx={{paddingX: "16px", paddingY: "8px", borderRadius: "5px", cursor: "pointer",}} variant="contained" color="success" >
  //       Нэвтрэх
  //     </Button>
  //     <Box display={"flex"} justifyContent={"center"}>
  //       Эсвэл
  //     </Box>
  //     <Button
  //       sx={{
  //         color: "black",
  //         border: "1px solid green",
  //         paddingX: "16px",
  //         paddingY: "8px",
  //       }}
  //       variant="outlined"
  //       size="small"

  //     >
  //       Бүртгүүлэх
  //     </Button>
  //   </Stack>
  // </Stack>
  );
}


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },]