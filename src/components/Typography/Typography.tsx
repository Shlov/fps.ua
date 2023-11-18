import styles from './Typography.module.scss';

const variantsMapping = {
  heading1: 'h1',
  heading2: 'h2',
  subheading1: 'h2',
  subheading2: 'h3',
  subheadingT: 'h3',
  subheading3: 'h4',
  subheadingN: 'p',
  button: 'span',
  bodyXL: 'p',
  bodyA: 'p',
  bodyB: 'p',
  bodyC: 'p',
  bodyD: 'p',
  bodyXLHeavy: 'p',
  bodyL: 'p',
  bodyRegular: 'p',
  bodyM: 'p',
  bodyS: 'p',
  bodyS2: 'p',
} as const;

interface Props {
  variant?: keyof typeof variantsMapping;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

const Typography: React.FC<Props> = ({
  variant,
  color,
  children,
  className,
  ...props
}) => {
  const Component = variant ? variantsMapping[variant] : 'p';

  const textClassName = `${
    variant ? styles[`typography--variant-${variant}`] : ''
  } ${className || ''}`;

  return (
    <Component className={textClassName} {...props} style={{ color: color }}>
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

export default Typography;
