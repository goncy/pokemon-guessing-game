import React from "react";

interface Props {
  value: string;
  onChange: (value: Props["value"]) => void;
}

const TextField: React.FC<Props> = ({value, onChange}) => {
  return (
    <div className="nes-field">
      <input
        className="nes-input"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default TextField;
