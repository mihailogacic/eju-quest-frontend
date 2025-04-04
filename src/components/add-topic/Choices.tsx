import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomInput from '../common/CustomInput';
import CustomSwitch from '../common/CustomSwitch';
import CustomButton from '../common/CustomButton';
import { useSubmitLesson } from '../../hooks/lessons-hook';
import { toast } from 'react-toastify';

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

type ChoicesProps = {
  questions: {
    question: string;
    options: {
      option: string;
      text: string;
    }[];
    answer: string;
  }[];
  lessonInfo: {
    title: string;
    age_level: number;
    lesson_length: 'short' | 'medium' | 'long';
  };
  isGenerated: boolean;
  onClearAll: () => void;
  image?: File | null;
  content: { heading: string; text: string }[];
};

const Choices = ({
  questions,
  lessonInfo,
  isGenerated,
  onClearAll,
  image,
  content,
}: ChoicesProps) => {
  const { mutate: submitLesson, isPending } = useSubmitLesson();

  const defaultState = Array(4)
    .fill(null)
    .map(() => ({
      question: '',
      options: Array(4).fill(''),
      answerIndex: null as number | null,
    }));

  const [formData, setFormData] = useState(defaultState);

  useEffect(() => {
    if (questions.length > 0) {
      const updated = questions.map((q) => ({
        question: q.question,
        options: q.options.map((opt) => opt.text),
        answerIndex: q.options.findIndex((opt) => opt.option === q.answer),
      }));

      setFormData((prev) => prev.map((_, i) => updated[i] || prev[i]));
    }
  }, [questions]);

  const handleInputChange =
    (qIdx: number, optIdx?: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => {
        const updated = [...prev];
        if (optIdx !== undefined) {
          updated[qIdx].options[optIdx] = e.target.value;
        } else {
          updated[qIdx].question = e.target.value;
        }
        return updated;
      });
    };

  const handleSwitchChange = (qIdx: number, selectedIdx: number) => {
    setFormData((prev) => {
      const updated = [...prev];
      updated[qIdx].answerIndex = selectedIdx;
      return updated;
    });
  };

  const handleSubmit = () => {
    const isFormValid = formData.every((q) => {
      const hasQuestion = q.question.trim() !== '';
      const allOptionsFilled = q.options.every((opt) => opt.trim() !== '');
      const hasAnswer = q.answerIndex !== null;
      return hasQuestion && allOptionsFilled && hasAnswer;
    });

    const isHeaderValid =
      typeof lessonInfo.title === 'string' &&
      lessonInfo.title.trim() !== '' &&
      lessonInfo.age_level >= 4 &&
      lessonInfo.age_level <= 18 &&
      ['short', 'medium', 'long'].includes(
        lessonInfo.lesson_length.toLowerCase()
      );

    if (!isHeaderValid) {
      toast.error(
        'Please fill in topic title, valid age level (4-18), and select lesson length.'
      );
      return;
    }

    if (!isFormValid) {
      toast.error(
        'Please fill in all questions, options and select the correct answer.'
      );
      return;
    }

    const formattedQuestions = formData.map((q) => ({
      question: q.question,
      options: q.options.map((text, i) => ({
        option: String.fromCharCode(65 + i),
        text,
      })),
      answer: String.fromCharCode(65 + (q.answerIndex ?? 0)),
    }));

    const payload = {
      title: lessonInfo.title,
      age_level: lessonInfo.age_level,
      lesson_length: lessonInfo.lesson_length,
      questions: formattedQuestions,
      content,
      image,
    };

    submitLesson(payload);
  };

  const handleClear = () => {
    setFormData(defaultState);
    onClearAll();
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
        {formData.map((q, questionIndex) => (
          <Box key={questionIndex} sx={questionWrapperStyle}>
            <Box>
              <Box component='label' sx={labelStyle}>
                Question {questionIndex + 1}
              </Box>
              <CustomInput
                autoComplete='off'
                value={q.question}
                onChange={handleInputChange(questionIndex)}
                sx={inputStyle}
              />
              <Typography sx={underInputStyle}>
                Write question {questionIndex + 1}
              </Typography>
            </Box>

            {q.options.map((optText, optionIndex) => (
              <Box key={optionIndex}>
                <Box component='label' sx={labelStyle}>
                  Option {optionIndex + 1}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CustomInput
                    autoComplete='off'
                    value={optText}
                    onChange={handleInputChange(questionIndex, optionIndex)}
                    sx={inputStyle}
                  />
                  <CustomSwitch
                    checked={q.answerIndex === optionIndex}
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
          onClick={handleClear}
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
          onClick={handleSubmit}
          disabled={!isGenerated || isPending}
          sx={{
            backgroundColor: 'black',
            color: 'white',
            width: '100%',
            maxWidth: '240px',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
            '&:disabled': {
              color: 'white',
              opacity: 0.6,
            },
            '@media (max-width: 640px)': {
              maxWidth: '100%',
            },
          }}
        >
          {isPending ? 'Adding...' : 'Add Topic'}
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Choices;
