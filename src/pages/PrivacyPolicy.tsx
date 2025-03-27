import { Box, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        px: 12,
        py: 8,
        '@media (max-width: 1280px)': {
          px: 8,
          py: 6,
        },
        '@media (max-width: 768px)': {
          px: 6,
          py: 5,
        },
        '@media (max-width: 640px)': {
          px: 2,
          py: 3,
        },
      }}
    >
      <Typography
        sx={{
          mb: 3,
          fontWeight: 700,
          fontSize: '36px',
          '@media (max-width: 768px)': {
            fontSize: '28px',
          },
        }}
      >
        Privacy Policy
      </Typography>

      <Typography sx={{ mb: 3 }}>
        This Privacy Policy outlines how EjuQuest collects, uses, and protects
        your personal information. By using our platform, you agree to the terms
        outlined below.
      </Typography>

      <Typography variant='h5' sx={{ mt: 4, mb: 2 }}>
        Information We Collect
      </Typography>
      <Typography sx={{ mb: 2 }}>
        We may collect personal information such as your name, email address,
        and other details you provide during registration or use of the
        platform.
      </Typography>

      <Typography variant='h5' sx={{ mt: 4, mb: 2 }}>
        How We Use Your Information
      </Typography>
      <Typography sx={{ mb: 2 }}>
        The information collected is used to improve our services, personalize
        your experience, and communicate updates or important notices. We do not
        sell or share your data with third parties without your consent.
      </Typography>

      <Typography variant='h5' sx={{ mt: 4, mb: 2 }}>
        Data Security
      </Typography>
      <Typography sx={{ mb: 2 }}>
        We implement appropriate technical and organizational measures to
        protect your personal information from unauthorized access, loss, or
        misuse.
      </Typography>

      <Typography variant='h5' sx={{ mt: 4, mb: 2 }}>
        Your Rights
      </Typography>
      <Typography sx={{ mb: 2 }}>
        You have the right to access, update, or delete your personal
        information at any time. To do so, please contact us at
        support@ejuquest.com.
      </Typography>

      <Typography variant='h5' sx={{ mt: 4, mb: 2 }}>
        Changes to This Policy
      </Typography>
      <Typography sx={{ mb: 2 }}>
        We reserve the right to modify this Privacy Policy at any time. All
        changes will be reflected on this page with an updated "Last updated"
        date.
      </Typography>

      <Typography sx={{ mt: 4, fontSize: '14px', color: 'gray' }}>
        Last updated: March 27, 2025
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
