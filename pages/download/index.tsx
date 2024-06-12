// pages/download.tsx
import React from 'react';
import {Button, Container, Stack, Typography} from '@mui/material';
import useTranslation from "next-translate/useTranslation";

const Download = () => {
  const {t} = useTranslation('common');

  return (
    <Stack style={{
      padding: '50px',
      textAlign: 'center',
      minHeight: "450px",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Typography variant="h4" fontWeight={"600"} component="h1" gutterBottom color={"#F74E53"}>
        {t('Download Readki')}
      </Typography>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="center" marginTop={5}>
        <Button
          variant="contained"
          size="large"
          href="https://play.google.com/store/apps/details?id=com.readki"
          sx={{
            boxShadow: "none",
            backgroundColor: "white",
            color: "#F74E53",
            border: "2px solid",
            borderRadius: "30px",
            borderColor: "#F74E53",
            "&:hover": {
              backgroundColor: "white",
              color: "#F74E53",
              border: "2px solid",
              borderRadius: "30px",
              borderColor: "#F74E53"
            }
          }}
        >
          {t('download_android')}
        </Button>
        <Button
          variant="contained"
          size="large"
          href="https://apps.apple.com/tr/app/readki-stories-for-kids/id6450896373"
          sx={{
            boxShadow: "none",
            backgroundColor: "white",
            color: "#F74E53",
            border: "2px solid",
            borderRadius: "30px",
            borderColor: "#F74E53",
            "&:hover": {
              backgroundColor: "white",
              color: "#F74E53",
              border: "2px solid",
              borderRadius: "30px",
              borderColor: "#F74E53"
            }
          }}
        >
          {t('download_ios')}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Download;
