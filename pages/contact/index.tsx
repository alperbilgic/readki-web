// pages/contact.tsx
import React from 'react';
import {Container, Stack, Typography} from '@mui/material';
import useTranslation from "next-translate/useTranslation";

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <Container maxWidth="md" style={{ padding: '50px', minHeight: "450px" }}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('contact_us')}
        </Typography>
        <Typography variant="body1">
          <strong>{t('phone')}: </strong> +90(850) 840 11 39
        </Typography>
        <Typography variant="body1">
          <strong>{t('whatsapp')}: </strong> +90(850) 840 11 39
        </Typography>
        <Typography variant="body1">
          <strong>{t('working_hours')}: </strong> Haftanın 7 Günü: 09:00 - 18:00
        </Typography>
        <Typography variant="body1">
          <strong>{t('email')}: </strong> info@kidolog.com
        </Typography>
        <Typography variant="body1">
          <strong>{t('company_title')}: </strong> Eba Garaj Anonim Şirketi
        </Typography>
        <Typography variant="body1">
          <strong>{t('responsible_person')}: </strong> Av. Yiğit Çavuşoğlu | Çavuşoğlu-Dündar-Mekereci Hukuk Bürosu
        </Typography>
        <Typography variant="body1">
          <strong>{t('address')}: </strong> Yukarı Bahçelievler Mahallesi Aşkaabat Caddesi No:12/6 Çankaya/ANKARA
        </Typography>
      </Stack>
    </Container>
  );
};

export default Contact;
