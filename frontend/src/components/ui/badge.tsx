import * as React from "react"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/utils/cn"

const badgeVariants = cva(
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                outline: "text-foreground",
            },
            priority: {
                bajo: "border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300",
                medio: "border-transparent bg-yellow-200 text-yellow-800 hover:bg-yellow-300",
                alto: "border-transparent bg-orange-200 text-orange-800 hover:bg-orange-300",
                critico: "border-transparent bg-red-200 text-red-800 hover:bg-red-300",
            },
            status: {
                abierto: "border-transparent bg-blue-200 text-blue-800 hover:bg-blue-300",
                en_progreso: "border-transparent bg-indigo-200 text-indigo-800 hover:bg-indigo-300",
                resuelto: "border-transparent bg-green-200 text-green-800 hover:bg-green-300",
                cerrado: "border-transparent bg-gray-300 text-gray-900 hover:bg-gray-400",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export type StatusVariant = BadgeProps['status']
export type PriorityVariant = BadgeProps['priority']
export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {
}

function Badge({className, variant, priority, status, ...props}: BadgeProps) {
    return (
        <div className={cn(badgeVariants({variant,priority, status}), className)} {...props} />
    )
}

export {Badge, badgeVariants}
