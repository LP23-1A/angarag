'use client'
// import { Pinecone, Searchicon } from "./Logo";
// // import { Visibility, VisibilityOff } from "@mui/icons-material";
// import {Box, Button, FormControl,IconButton,InputAdornment,InputLabel, OutlinedInput,Stack,TextField, Autocomplete,} from "@mui/material";

// export default function HeaderLogin() {
//   return (

//     <Stack sx={{display: "flex"}}>
//       <Stack>
//         <Box sx={{display: "flex", justifyContent:"center", alignItems:"center"}}>
//           <Pinecone/>
//           <Button sx={{color: "#000000"}}>НҮҮР</Button>
//           <Button sx={{color: "#000000"}}>ХООЛНЫ ЦЭС</Button>
//           <Button sx={{color: "#000000"}}>ХҮРГЭЛТИЙН БҮС</Button>
//         </Box>
//         <Box>
//           <Searchicon/>
//           <Autocomplete sx={{width:"260px", height: "40px", padding: "8px 16px"}}
//         freeSolo
//         id="free-solo-2-demo"
//         disableClearable
//         options={top100Films.map((option) => option.title)}
//         renderInput={(params) => (
//           <TextField sx={{width: "196px", height: "24px"}}
//             {...params}
//             label="Хайх"
//             InputProps={{
//               ...params.InputProps,
//               type: 'search',
//             }}
//           />
//         )}
//       />
//         </Box>
//       </Stack>
//     </Stack>



//   //   <Stack sx={{width: "448px",padding: "32px", display: "flex",gap: "48px",flexDirection: "column",}} >
//   //   <Box display={"flex"} justifyContent={"center"} fontSize={"28px"}>
//   //     Нэвтрэх
//   //   </Box>
//   //   <Stack sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//   //     <Stack sx={{ flex: "" }}>
//   //       <Box fontSize={"14px"}>Имэйл</Box>
//   //       <TextField sx={{ border: "1px solid gray", "&:focus": "none" }} id="filled-multiline-flexible" label="Имэйл хаягаа оруулна уу" multiline maxRows={4} variant="filled"/>
//   //     </Stack>
//   //     <Stack sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
//   //       <Box fontSize={"14px"}>Нууц Үг</Box>

        
//   //       <FormControl sx={{ width: "38ch", bgcolor: "#F7F7F8", borderRadius: "1ch", border: "none", }} variant="outlined" >
//   //         <InputLabel htmlFor="outlined-adornment-password">  Нууц үг </InputLabel>
//   //         <OutlinedInput id="outlined-adornment-password"
           
//   //           endAdornment={
//   //             <InputAdornment position="end">
//   //               <IconButton
//   //                 aria-label="toggle password visibility"
      
//   //                 edge="end"
//   //               >
//   //               </IconButton>
//   //             </InputAdornment>
//   //           }
//   //           label="Password"
//   //         />
//   //       </FormControl>
//   //       <Box fontSize={"12px"} display={"flex"} justifyContent={"flex-end"}>
//   //         Нууц үг сэргээх
//   //       </Box>
//   //     </Stack>
//   //   </Stack>
//   //   <Stack sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
//   //     <Button disabled sx={{paddingX: "16px", paddingY: "8px", borderRadius: "5px", cursor: "pointer",}} variant="contained" color="success" >
//   //       Нэвтрэх
//   //     </Button>
//   //     <Box display={"flex"} justifyContent={"center"}>
//   //       Эсвэл
//   //     </Box>
//   //     <Button
//   //       sx={{
//   //         color: "black",
//   //         border: "1px solid green",
//   //         paddingX: "16px",
//   //         paddingY: "8px",
//   //       }}
//   //       variant="outlined"
//   //       size="small"

//   //     >
//   //       Бүртгүүлэх
//   //     </Button>
//   //   </Stack>
//   // </Stack>
//   );
// }


// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },]

'use client'
import { Box, Button, Stack, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import logo from "../../../public/img/Logo.jpg";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import PersonIcon from "@mui/icons-material/Person";
import { useContext } from "react";
// import { FoodContext } from "./Context";
import { useRouter } from "next/navigation";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = ({ onClick, onChange, value, orderClick }: any) => {
  // const cart = useContext(FoodContext);
  const router = useRouter() 
  return (
    <Stack
      className="px-[240px] py-3"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      paddingTop="14px"
      spacing={2}
    >
      <Box className="flex gap-6">
        <img className="w-10" src={logo.src} />
        <Box className="flex gap-2">
          <Button
          onClick={()=>router.push('/')}
            size="medium"
            sx={{ color: "black", ":hover": { color: "#18BA51" } }}
          >
            НҮҮР
          </Button>
          <Button
          onClick={()=>router.push('/menu')}

            size="medium"
            sx={{ color: "black", ":hover": { color: "#18BA51" } }}
          >
            {" "}
            Хоолны цэс
          </Button>
          <Button
            size="medium"
            sx={{ color: "black", ":hover": { color: "#18BA51" } }}
          >
            Хүргэлтийн бүс
          </Button>
        </Box>
      </Box>
      <Box className="flex gap-2">
        <Box className="border-[1px] rounded-lg">
          <Search>
            <SearchIconWrapper>
              {/* <SearchIcon /> */}
            </SearchIconWrapper>
            <StyledInputBase
              value={value}
              onChange={onChange}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        <Button
          onClick={orderClick}
          size="medium"
          sx={{ color: "black", ":hover": { color: "#18BA51" } }}
          className="flex"
        >
          {/* <ShoppingBasketIcon /> */}
          <Typography>Сагс</Typography>
        </Button>
        <Button
          onClick={onClick}
          size="medium"
          sx={{ color: "black", ":hover": { color: "#18BA51" } }}
          className="flex"
        >
          {/* <PersonIcon /> */}
          <Typography>Хэрэглэгч</Typography>
        </Button>
      </Box>
    </Stack>
  );
};
export default Navbar;