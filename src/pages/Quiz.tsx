import { useState } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
} from '@mui/material';
import CustomRadio from '../components/common/CustomRadio';
import CustomButton from '../components/common/CustomButton';
import CustomAccordion from '../components/common/CustomAccordion';
import Timeout from '../components/quiz/Timeout';

const Quiz = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <Box
        sx={{
          minHeight: 'calc(100vh - 104px)',
          backgroundColor: 'black',
          color: 'white',
          borderTop: '1px solid white',
          px: 12,
          py: 8,
          display: 'flex',
          gap: 8,
          justifyContent: 'space-between',

          '@media (max-width: 1280px)': {
            px: 8,
            py: 6,
          },
          '@media (max-width: 900px)': {
            flexDirection: 'column',
          },
          '@media (max-width: 768px)': {
            px: 6,
            py: 5,
          },
          '@media (max-width: 640px)': {
            minHeight: 'calc(100vh - 90px)',
            px: 2,
          },
        }}
      >
        <Box
          sx={{
            width: '60%',
            '@media (max-width: 900px)': {
              width: '100%',
            },
          }}
        >
          <Typography
            sx={(theme) => ({
              color: theme.palette.text.lightSlate,
              fontSize: '38px',
              fontWeight: 600,
              lineHeight: 1.2,
              '@media (max-width: 768px)': {
                fontSize: '30px',
              },
            })}
          >
            Course: mathematics 201
          </Typography>

          <Box component='hr' sx={{ opacity: 0.3, m: '24px 0 32px 0' }} />

          <Box
            sx={{
              width: '100%',
              border: '1px solid hsla(0, 0%, 100%, 0.3)',
              borderRadius: '8px',
            }}
          >
            <Box
              sx={{
                p: '24px 32px',
                backgroundColor: 'white',
                color: 'black',
                alignItems: 'center',
                borderRadius: '8px 8px 0 0',
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: '24px' }}>
                Question 4
              </Typography>
            </Box>

            <Box sx={{ p: '24px 32px' }}>
              <Typography>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
                <br />
                <br />
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: '100%',
              border: '1px solid hsla(0, 0%, 100%, 0.3)',
              borderRadius: '8px',
              mt: 5,
            }}
          >
            <FormControl sx={{ p: '24px 32px' }}>
              <RadioGroup
                name='quiz-options'
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                {[
                  'Lorem Ipsum is simply dummy text of the printing and typesetting.',
                  'Many desktop publishing packages and web page editors now use Lorem Ipsum.',
                  'If you are going to use a passage of Lorem Ipsum, you need to be sure there.',
                  'If you are going to use a passage of Lorem Ipsum, you need to be sure there.',
                ].map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={String(index)}
                    control={<CustomRadio />}
                    label={
                      <Typography sx={{ color: 'white', fontSize: '16px' }}>
                        {option}
                      </Typography>
                    }
                    sx={{
                      alignItems: 'center',
                      gap: '4px',
                      mb: 1,
                    }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>

          <Box
            sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 3 }}
          >
            <CustomButton
              buttonType='text'
              sx={{
                width: '100%',
                maxWidth: '180px',
                border: '1px solid white',
              }}
            >
              Previous
            </CustomButton>
            <CustomButton sx={{ width: '100%', maxWidth: '180px' }}>
              Next
            </CustomButton>
          </Box>
        </Box>

        <Box
          sx={{
            width: '40%',
            '@media (max-width: 900px)': {
              width: '100%',
            },
          }}
        >
          <Typography
            sx={(theme) => ({
              color: theme.palette.text.lightSlate,
              fontSize: '38px',
              fontWeight: 600,
              lineHeight: 1.2,
              '@media (max-width: 768px)': {
                fontSize: '30px',
              },
            })}
          >
            Completed Questions
          </Typography>

          <Box
            sx={{
              maxWidth: '400px',
              mt: 3,
              '@media (max-width: 900px)': {
                maxWidth: '100%',
              },
            }}
          >
            <CustomAccordion title='Question 1'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, fugit! Illo, tempore aperiam commodi itaque voluptatum
              aliquid, a unde aut molestiae accusantium voluptatem officia
              laborum placeat rerum praesentium mollitia repellat?
            </CustomAccordion>
            <CustomAccordion title='Question 2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, fugit! Illo, tempore aperiam commodi itaque voluptatum
              aliquid, a unde aut molestiae accusantium voluptatem officia
              laborum placeat rerum praesentium mollitia repellat?
            </CustomAccordion>
            <CustomAccordion title='Question 3'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, fugit! Illo, tempore aperiam commodi itaque voluptatum
              aliquid, a unde aut molestiae accusantium voluptatem officia
              laborum placeat rerum praesentium mollitia repellat?
            </CustomAccordion>
          </Box>
        </Box>
      </Box>

      <Timeout />
    </>
  );
};

export default Quiz;
