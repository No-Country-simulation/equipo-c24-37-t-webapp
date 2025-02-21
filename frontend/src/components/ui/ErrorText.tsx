import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ErrorTextProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children?: ReactNode;
}

export default function ErrorText({
  className,
  children,
  ...props
}: Readonly<ErrorTextProps>) {
  return (
    <p className={cn('animate-fade-down mt-2 text-xs text-destructive', className)} role="alert"
       aria-live="polite" {...props}>
      {children}
    </p>
  );
}