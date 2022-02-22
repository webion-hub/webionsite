import { Button } from "@mui/material";

export default function ButtonCircled({children, sx, ...props}) {
  return (
    <Button
      {...props}
      sx={{
        ...sx,
        "&:hover::after": {
          width: 100,
          animationDuration: "1.5s",
        },
        "&::after": {
          content: "''",
          position: "absolute",
          aspectRatio: '1',
          width: 200,
          transition: "1s width",
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23ffffff' stroke-opacity='0.2' stroke-width='3' stroke-dasharray='50%25%2c 13%25' stroke-dashoffset='100' stroke-linecap='round'/%3e%3c/svg%3e")`,
          borderRadius: '100px',
          zIndex: -1,
          animation: 'rotation 4s infinite linear',
          "@keyframes rotation": {
            "0%": {
              transform: "rotate(0)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
        },
      }}
    >
      {children}
    </Button>
  )
}