import { forwardRef, InputHTMLAttributes } from 'react';
import '../../../assets/sass/components/inputs/Input.scss';

// Extending standard input attributes to include custom props
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string; // name is required for associating label and input
  type: string; // type is required to define input type like text, password etc.
  labelText?: string; // Optional label text
  value?: string | number; // Value can be a string or number
  className?: string; // Optional additional CSS classes
  placeholder?: string; // Optional placeholder text
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Handler for change event
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void; // Handler for click event
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void; // Handler for focus event
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; // Handler for blur event
  style?: React.CSSProperties; // Optional inline styles
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  id,
  name,
  type,
  labelText,
  value,
  className,
  placeholder,
  handleChange,
  onClick,
  onFocus,
  onBlur,
  style,
  ...rest
}, ref) => (
  <div className="form-row">
    {labelText && (
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
    )}
    <input
      ref={ref}
      id={id}
      name={name}
      type={type}
      value={value}
      className={`form-input ${className}`}
      placeholder={placeholder}
      onChange={handleChange}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style}
      autoComplete="off"
      {...rest}
    />
  </div>
));

export default Input;
