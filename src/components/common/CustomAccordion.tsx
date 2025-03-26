import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  AccordionProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.text.lightGreen,
  color: 'black',
  borderRadius: '8px',
  boxShadow: 'none',
  marginBottom: '16px',
  '&:first-of-type': {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  '&:last-of-type': {
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  '&.Mui-expanded': {
    borderRadius: '8px',
  },
  '&:before': {
    display: 'none',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  padding: '0 16px',
  minHeight: '56px',
  '& .MuiAccordionSummary-content': {
    margin: '12px 0',
    fontWeight: 600,
    fontSize: '18px',
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(() => ({
  padding: '16px',
  fontSize: '16px',
}));

type CustomAccordionProps = AccordionProps & {
  title: string;
  children: React.ReactNode;
};

const CustomAccordion = ({
  title,
  children,
  ...props
}: CustomAccordionProps) => {
  return (
    <StyledAccordion {...props}>
      <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </StyledAccordionSummary>
      <StyledAccordionDetails>{children}</StyledAccordionDetails>
    </StyledAccordion>
  );
};

export default CustomAccordion;
