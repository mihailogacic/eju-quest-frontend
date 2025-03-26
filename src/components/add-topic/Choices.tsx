import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomInput from '../common/CustomInput';
import CustomSwitch from '../common/CustomSwitch';
import CustomButton from '../common/CustomButton';

const questionWrapperStyle = {
  minWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: 3,

  '@media (max-width: 900px)': {
    width: '80vw',
  },
  '@media (max-width: 640px)': {
    width: '90vw',
  },
  '@media (max-width: 440px)': {
    minWidth: '90vw',
  },
};

const inputStyle = {
  backgroundColor: 'white',
  border: '1px solid hsla(0, 0%, 0%, 0.1)',
  '& .MuiInputBase-input': {
    color: 'black',
  },
  mt: '2px',
};

const labelStyle = {
  fontSize: '14px',
  fontWeight: 500,
};

const underInputStyle = {
  color: 'hsla(0, 0%, 0%, 0.5)',
  fontWeight: 400,
  fontSize: '12px',
  mt: '4px',
};

const Choices = () => {
  const [answers, setAnswers] = useState<(number | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  const handleSwitchChange = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = optionIndex;
      return newAnswers;
    });
  };

  return (
    <Box component='form'>
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: '40px',
            fontWeight: 700,
            '@media (max-width: 768px)': {
              fontSize: '32px',
            },
          }}
        >
          Add Multiple-Choice Questions
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
          Add Multiple-Choice Questions
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          rowGap: 12,
          columnGap: 16,
          justifySelf: 'center',
          my: 6,

          '@media (max-width: 1280px)': {
            rowGap: 8,
            columnGap: 12,
          },
          '@media (max-width: 1080px)': {
            rowGap: 4,
            columnGap: 8,
          },
          '@media (max-width: 900px)': {
            gridTemplateColumns: 'repeat(1, 1fr)',
          },
        }}
      >
        {[0, 1, 2, 3].map((questionIndex) => (
          <Box key={questionIndex} sx={questionWrapperStyle}>
            <Box>
              <Box component='label' sx={labelStyle}>
                Question {questionIndex + 1}
              </Box>
              <CustomInput sx={inputStyle} />
              <Typography sx={underInputStyle}>
                Write question {questionIndex + 1}
              </Typography>
            </Box>

            {[0, 1, 2, 3].map((optionIndex) => (
              <Box key={optionIndex}>
                <Box component='label' sx={labelStyle}>
                  Option {optionIndex + 1}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CustomInput sx={inputStyle} />
                  <CustomSwitch
                    checked={answers[questionIndex] === optionIndex}
                    onChange={() =>
                      handleSwitchChange(questionIndex, optionIndex)
                    }
                  />
                </Box>
                <Typography sx={underInputStyle}>
                  Write option {optionIndex + 1}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          mt: 10,
          '@media (max-width: 640px)': { gap: 1 },
        }}
      >
        <CustomButton
          sx={{
            border: '1px solid black',
            width: '100%',
            maxWidth: '240px',
            '@media (max-width: 640px)': {
              maxWidth: '100%',
            },
          }}
        >
          Clear
        </CustomButton>

        <CustomButton
          sx={{
            backgroundColor: 'black',
            color: 'white',
            width: '100%',
            maxWidth: '240px',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
            '@media (max-width: 640px)': {
              maxWidth: '100%',
            },
          }}
        >
          Add Topic
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Choices;
