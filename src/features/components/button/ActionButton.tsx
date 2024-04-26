import React from 'react';

// Props type definition
type ActionButtonProps = {
  label: string;
  onClick: () => void; // The type for an event handling function receiving no arguments and returning void
  color?: string; // Optional color prop to customize the button color
}

// The ActionButton component with destructured props
const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, color = 'blue' }) => {
  // Button style with dynamic color classes using template literals
  const buttonStyle = `inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-${color}-600 hover:bg-${color}-500 focus:outline-none focus:border-${color}-700 focus:shadow-outline-${color} active:bg-${color}-700 transition ease-in-out duration-150`;

  return (
    <button
      type="button"
      className={buttonStyle}
      onClick={onClick} // The onClick event handler passed down through props
    >
      {label}
    </button>
  );
};

export default ActionButton;
