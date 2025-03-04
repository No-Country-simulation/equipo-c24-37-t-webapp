import * as React from "react"

import {cn} from "@/utils/cn"
import {cva, VariantProps} from "class-variance-authority";

const inputVariants = cva('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', {
    variants: {
        variant: {
            default: 'border border-input bg-transparent text-sm shadow-sm',
            invalid: 'border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/30',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, type, variant, ...props}, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    inputVariants({variant}),
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export {Input}
