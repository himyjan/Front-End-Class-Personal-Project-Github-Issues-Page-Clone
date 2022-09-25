type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: boolean;
  /**
   * What background color to use
   */
  backgroundColor: string;
  /**
   * How large should the button be?
   */
  size: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick: () => void;
};

const sizeStyle = {
  small: 'text-[12px] py-[10px] px-[16px]',
  medium: 'text-[14px] py-[11px] px-[20px]',
  large: 'text-[16px] py-[12px] px-[24px]',
};

const primaryStyle = {
  'storybook-button--primary': 'text-white bg-[#1ea7fd]',
  'storybook-button--secondary':
    'text-[#333] bg-transparent shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]',
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        'sb font-bold border-0 rounded-[3em] cursor-pointer inline-block leading-none',
        sizeStyle[size],
        primaryStyle[mode],
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
