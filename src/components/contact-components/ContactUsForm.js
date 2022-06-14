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
import GapUtils from "../../lib/GapUtils";
import { useTranslation } from "react-i18next";

export default function ContactUsForm() {
  const { t } = useTranslation() 

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
      value: true,
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
      sx={{
        ...GapUtils.gap(1, 'column'),
        maxWidth: 460,
        position: 'relative',
        '&::after': {
          content: "'Work in progress...'",
          textAlign: 'center',
          fontSize: '32px',
          marginTop: '-8px',
          marginLeft: '-16px',
          width: 'calc(100% + 32px)',
          height: 'calc(100% + 16px)',
          backdropFilter: 'blur(4px)',
          zIndex: 1,
          position: 'absolute'
        },
      }}
    >
      <Typography
        variant="body2"
        color="textSecondary"
      >
        {t('contact-us-description')}
      </Typography>
      <Divider></Divider>
      <TextField
        formcontrolname="name"
        type="text"
        required
        variant="outlined"
        color="primary"
        label={t('name-and-surname')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <PersonRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        formcontrolname="company"
        type="text"
        variant="outlined"
        color="primary"
        label={t('company')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <BusinessRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        formcontrolname="telephone"
        type="tel"
        variant="outlined"
        color="primary"
        label={t('phone-number')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <LocalPhoneRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        formcontrolname="email"
        type="email"
        required
        variant="outlined"
        color="primary"
        label={t('email')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <EmailRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        formcontrolname="message"
        type="text"
        required
        label={t('message')}
        multiline
        rows={4}
        variant="outlined"
        color="primary"
      />
      <PrivacyCheckBox
        formcontrolname="privacy"
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
          {t('send')}
        </Button>
      </Grid>
    </FormGroup>

  )
}