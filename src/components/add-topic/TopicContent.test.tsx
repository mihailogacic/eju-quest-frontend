import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import TopicContent from './TopicContent';

const sections = [
  { heading: 'INTRODUCTION', text: 'Original introduction text.' },
  { heading: 'BODY', text: 'Original body text.' },
];

describe('generated section editing', () => {
  it('displays each section in an editable field', () => {
    render(<TopicContent content={sections} onChange={() => undefined} />);

    expect(screen.getByLabelText('Section 1 content')).toHaveValue(
      'Original introduction text.'
    );
    expect(screen.getByLabelText('Section 2 content')).toHaveValue(
      'Original body text.'
    );
  });

  it('passes edited text to the parent component', () => {
    const onChange = vi.fn();
    render(<TopicContent content={sections} onChange={onChange} />);

    fireEvent.change(screen.getByLabelText('Section 1 content'), {
      target: { value: 'Text edited by the parent.' },
    });

    expect(onChange).toHaveBeenCalledWith(
      0,
      'Text edited by the parent.'
    );
  });
});
