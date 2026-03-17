import React from 'react';

interface CustomPromptInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CustomPromptInput({ value, onChange }: CustomPromptInputProps) {
  return (
    <div className="form-group">
      <label className="agent_question">Custom Instructions</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add extra instructions for the report (e.g. 'Always use bullet points for key findings')"
        className="form-control-static"
        rows={3}
        style={{ resize: 'vertical', width: '100%' }}
      />
    </div>
  );
}
