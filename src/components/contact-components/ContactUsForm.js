import { Button, Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import React from "react";
import useForm from "../../hooks/useForm";
import Validators from "../../lib/Validators";
import FormGroup from "../FormGroup";
import PrivacyCheckBox from "../PrivacyCheckBox";

export default function ContactUsForm() {
  const form = useForm({
    name: {
      value: '',
      validators: [Validators.required],
    },
    company: {
      value: '',
    },
    telephone: {
      value: '',
      validators: [Validators.isATelephoneNumber],
    },
    email: {
      value: '',
      validators: [Validators.required, Validators.isAnEmail],
    },
    message: {
      value: '',
      validators: [Validators.required],
    },
    privacy: {
      value: false,
      validators: [Validators.required],
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    form.validate()
  }

  return (
    <FormGroup
      form={form}
      onSubmit={handleSubmit}
      container
      direction="column"
      gap={1}
      sx={{
        maxWidth: 460,
      }}
    >
      <Typography
        variant="body2"
        color="textSecondary"
      >
        Contattaci per una qualsiasi domanda o per ricevere un preventivo gratuito.
      </Typography>
      <Divider></Divider>
      <TextField
        formControlName="name"
        type="text"
        required
        variant="outlined"
        color="primary"
        label="Nome e cognome"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <PersonRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        formControlName="company"
        type="text"
        variant="outlined"
        color="primary"
        label="Azienda"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <BusinessRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        formControlName="telephone"
        type="tel"
        variant="outlined"
        color="primary"
        label="Numero di telefono"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <LocalPhoneRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        formControlName="email"
        type="email"
        required
        variant="outlined"
        color="primary"
        label="Email"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <EmailRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        formControlName="message"
        type="text"
        required
        label="Messaggio"
        multiline
        rows={4}
        variant="outlined"
        color="primary"
      />
      <PrivacyCheckBox
        formControlName="privacy"
      />
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        sx={{
          marginTop: 1,
          marginBottom: 2,
        }}
      >
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendRoundedIcon/>}
        >
          Invia
        </Button>
      </Grid>
    </FormGroup>

  )
}