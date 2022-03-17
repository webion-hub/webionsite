import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import Paragraph from "../../../components/text-boxes/Paragraph";

export default function Licenses() {

  const [license, setLicense] = React.useState('');

  useEffect(() => {
    fetch('/license.txt').then(r => {
      r.text().then(text => {
        setLicense(text)
      })
    })
  }, [])

  return (
    <Paragraph
      title="Licenze"
    >
      <pre>
        <Typography
          variant="body1"
          color="textSecondary"
          whiteSpace="pre-wrap"
        >
          {license}
        </Typography>
      </pre>
    </Paragraph>
  )
}