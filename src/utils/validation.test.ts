import { describe, expect, it } from 'vitest';
import { topicDetailsSchema } from './validation';

describe('lesson generation form validation', () => {
  it('accepts a valid topic, age and lesson length', () => {
    const result = topicDetailsSchema.safeParse({
      topic_name: 'Planets',
      age_level: '10',
      lesson_length: 'medium',
    });
    expect(result.success).toBe(true);
  });

  it('rejects an empty topic', () => {
    const result = topicDetailsSchema.safeParse({
      topic_name: '',
      age_level: '10',
      lesson_length: 'short',
    });
    expect(result.success).toBe(false);
  });

  it('rejects an age outside the 4-18 range', () => {
    const result = topicDetailsSchema.safeParse({
      topic_name: 'Planets',
      age_level: '3',
      lesson_length: 'short',
    });
    expect(result.success).toBe(false);
  });

  it('rejects an unsupported lesson length', () => {
    const result = topicDetailsSchema.safeParse({
      topic_name: 'Planets',
      age_level: '10',
      lesson_length: 'very-long',
    });
    expect(result.success).toBe(false);
  });
});
