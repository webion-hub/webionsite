import { Grid, Typography, alpha, Button } from '@mui/material';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import theme from '../Theme';

export default function Home(){
  return (
    <>
      <Grid
        container
        direction="row"
        sx={{width: "100vw", overflow: "hidden"}}
      >
        <Grid 
          item 
          xs={4}
          container
          direction="column"
          justifyContent="center"
          sx={{height: "90vh", paddingLeft: 24}}
        >
          <Typography
            variant="h1"
            color="primary"
          >
            Titolo <br/> principale
          </Typography>
          <Typography
            variant="h5"
            color="secondary"
            sx={{marginTop: 8}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{position: "relative"}}>
          <Box
            sx={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
              zIndex: -1,
            }}
          >
            <Box
              sx={{
                height: "1200px",
                width: "1200px",
                backgroundColor: alpha(theme.palette.primary.dark, 0.1),
                transform:"rotate(45deg)",
                borderRadius: 32,
                boxShadow: "0px 0px 20px 0px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(-45deg) scale(2.2)",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 400 300" width="406" height="306" className="illustration styles_illustrationTablet__1DWOa"><path d="M206.54,126.05s1.64-3.73,3.86-3,4.19,10.46-3.64,9.95Z" fill="#f4a28c"/><rect x="69.19" y="46.92" width="125.95" height="125.95" fill="#24285b"/><rect x="106" y="102.19" width="40.46" height="4.53" fill="#1f4bff"/><rect x="117.6" y="89.58" width="36.17" height="4.53" fill="#5572ee"/><rect x="152.08" y="137.37" width="18.87" height="4.53" fill="#5572ee"/><rect x="133.02" y="124.64" width="18.87" height="4.53" fill="#5572ee"/><rect x="117.6" y="113.13" width="48.21" height="4.53" fill="#1f4bff"/><rect x="90.99" y="113.13" width="18.13" height="4.53" fill="#fff"/><rect x="109.05" y="125.02" width="18.13" height="4.53" fill="#fff"/><rect x="91.87" y="149.3" width="18.13" height="4.53" fill="#fff"/><rect x="79.39" y="102.19" width="18.13" height="4.53" fill="#fff"/><circle cx="77.44" cy="54.55" r="2.13" fill="#fff"/><circle cx="83.78" cy="54.55" r="2.13" fill="#1f4bff"/><circle cx="89.77" cy="54.55" r="2.13" fill="#5572ee"/><rect x="79.39" y="67.76" width="18.13" height="4.53" fill="#fff"/><rect x="90.99" y="79.08" width="18.13" height="4.53" fill="#fff"/><rect x="117.6" y="79.08" width="36.17" height="4.53" fill="#5572ee"/><rect x="90.99" y="89.58" width="18.13" height="4.53" fill="#fff"/><rect x="104.77" y="67.76" width="37.35" height="4.53" fill="#1f4bff"/><rect x="79.9" y="137.37" width="18.13" height="4.53" fill="#fff"/><rect x="105.28" y="137.37" width="37.35" height="4.53" fill="#1f4bff"/><rect x="117.18" y="149.28" width="37.35" height="4.53" fill="#1f4bff"/><rect x="149.93" y="67.76" width="26.52" height="4.53" fill="#1f4bff"/><rect x="237.52" y="46.65" width="60.07" height="41.3" fill="#5572ee"/><path d="M179.43,104.45s-11.63,3.11-6.52,20.19,8.53,43.91-7.1,47.85H199.6l-2.77-43.33Z" opacity="0.08"/><path d="M259.48,75.41a1.41,1.41,0,0,1-.86-.3l-9-7.12a1.35,1.35,0,0,1-.53-1.08,1.41,1.41,0,0,1,.52-1.09l9-7.25a1.39,1.39,0,1,1,1.75,2.17l-7.65,6.15,7.64,6a1.39,1.39,0,0,1-.87,2.48Z" fill="#fff"/><polygon points="192.82 142.91 188.25 167.49 204.91 167.49 201.96 142.91 192.82 142.91" fill="#f4a28c"/><path d="M275.79,75.41a1.39,1.39,0,0,1-.86-2.48l7.63-6-7.64-6.15a1.39,1.39,0,1,1,1.74-2.17l9,7.25a1.38,1.38,0,0,1,0,2.17l-9,7.12A1.41,1.41,0,0,1,275.79,75.41Z" fill="#fff"/><path d="M263.86,75.41a1.47,1.47,0,0,1-.58-.12,1.4,1.4,0,0,1-.69-1.85l6.57-14.36a1.39,1.39,0,1,1,2.52,1.15L265.12,74.6A1.38,1.38,0,0,1,263.86,75.41Z" fill="#fff"/><path d="M186.83,121.11s-3.53,25.42,8.45,27.7,13.62-27.7,13.62-27.7,1.93-9.17-4.7-15.13S183.77,105.94,186.83,121.11Z" fill="#f4a28c"/><path d="M186.57,126.05l-1.23-3.36a58.65,58.65,0,0,0-3.16-7.12c-2.13-4.06-5.19-12.17.94-17,8.42-6.64,11.23,1.8,16.59-4.46s12.77,2.16,13.79,5.48,8.17,5.62,5.87,12.51S217,126.2,208.76,125s-17.13-7.81-17.13-7.81S189.26,120.85,186.57,126.05Z" fill="#5572ee"/><circle cx="192.01" cy="131.36" r="4.57" fill="#fff"/><circle cx="202.08" cy="131.76" r="4.57" fill="#fff"/><path d="M149.93,254.57S114.74,174,188.25,167.49h16.66s70.46,10.15,35.4,85.38Z" fill="#1f4bff"/><polygon points="164.42 206.01 152.08 206.01 161.51 242.83 159.37 254.57 175.46 254.06 179.51 220.1 164.42 206.01" opacity="0.08"/><path d="M186.57,126.05s-1.64-3.73-3.86-3-3.42,11,4.42,10.51Z" fill="#f4a28c"/><polygon points="172.46 240.9 162.31 196.84 232.35 196.84 220.96 244.36 219.97 253.77 174.31 253.77 172.46 240.9" fill="#5572ee"/><circle cx="197.95" cy="217.72" r="6.07" fill="#fff"/><rect x="239.8" y="113.13" width="102.64" height="59.36" fill="#e6e6e6"/><circle cx="257.33" cy="132.01" r="5.96" fill="#24285b"/><circle cx="257.33" cy="152.77" r="5.96" fill="#1f4bff"/><rect x="271.12" y="127.94" width="53.78" height="7.25" fill="#c9c9c9"/><rect x="271.12" y="148.93" width="53.78" height="7.25" fill="#c9c9c9"/><path d="M192,147.37s5,3,9-.24c0,0,.28,7.59-10,5.64Z" opacity="0.08"/></svg>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Paper
        square
        sx={{
          width: "100vw", 
          height: 400, 
          borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`
        }}
      >	
        <Button variant="outlined" color="secondary">
          Scopri di più
        </Button>
      </Paper> 
    </>
  )
}