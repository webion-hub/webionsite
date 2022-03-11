import { Button, Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import React, { useEffect } from "react";
import useForm from "../../hooks/useForm";
import Validators from "../../lib/Validators";

export default function ContactUsForm() {
  const form = useForm()

  useEffect(() => {
    form.setValues({
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
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    form.validate()
  }

  return (
    <Grid
      noValidate
      component="form"
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
        type="text"
        required
        variant="outlined"
        color="primary"
        label="Nome e cognome"
        error={!form.isValid('name')}
        onChange={form.setValue('name')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <PersonRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        type="text"
        variant="outlined"
        color="primary"
        label="Azienda"
        error={!form.isValid('company')}
        onChange={form.setValue('company')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <BusinessRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        type="tel"
        variant="outlined"
        color="primary"
        label="Numero di telefono"
        error={!form.isValid('telephone')}
        onChange={form.setValue('telephone')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <LocalPhoneRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        type="email"
        required
        variant="outlined"
        color="primary"
        label="Email"
        error={!form.isValid('email')}
        onChange={form.setValue('email')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <EmailRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        type="text"
        required
        label="Messaggio"
        error={!form.isValid('message')}
        onChange={form.setValue('message')}
        multiline
        rows={4}
        variant="outlined"
        color="primary"
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
    </Grid>
  )
}