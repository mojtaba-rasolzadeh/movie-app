import _ from "lodash";
import { Box, Link, Typography } from "@mui/material";

const FactorsOfProduction = ({ crew, job }) => {
  
  crew.map(item => {
    // if(item.job === job){
      console.log(`jobId : ${item.id}`)
    // }
    let find = crew.filter(user => user.id !== item.id);
    console.log(find)
  })

  return (
    <>
      {crew.map(
        (user, index) =>
          user.job === job && (
            <Box key={index} sx={{ display: "inline-block" }}>
              <Link href={user.id} underline="none">
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "800",
                    color: "#fff",
                    "&:hover": { color: "text.secondary" },
                  }}
                >
                  {user.name}
                </Typography>
              </Link>
              <Typography variant="body2">{user.job}</Typography>
            </Box>
          )
      )}
    </>
  );
};
export default FactorsOfProduction;
// {crew.map(
//   (user, index) =>
//     user.job === job && (
//       <Box key={index} sx={{ display: "inline-block" }}>
//         <Link href={user.id} underline="none">
//           <Typography
//             variant="subtitle1"
//             sx={{
//               fontWeight: "800",
//               color: "#fff",
//               "&:hover": { color: "text.secondary" },
//             }}
//           >
//             {user.name}
//           </Typography>
//         </Link>
//         <Typography variant="body2">{user.job}</Typography>
//       </Box>
//     )
// )}