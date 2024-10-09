import {cva, VariantProps} from "class-variance-authority";
import React, {HTMLAttributes} from "react";
import {cn} from "@/utils";

type defaultVariants = {
    intent: 'primary',
    size: 'medium'
}

const buttonVariants = cva(
    'py-4 px-4 rounded focus:outline-none transition flex items-center',
    {
        variants: {
            intent: {
                primary: 'bg-blue-500 text-white hover:bg-blue-600',
                secondary: 'bg-gray-300 text-black hover:bg-gray-400',
                danger: 'bg-red-500 text-white hover:bg-red-600',
            },
            size: {
                small: 'text-sm',
                medium: 'text-base',
                large: 'text-lg',
            },
        },
        defaultVariants: {
            intent: 'primary',
            size: 'medium',
        } as defaultVariants
    }
)

interface ButtonProps extends
    HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, intent, size, ...props}, ref) => {
    return(
        <button
            ref={ref}
            className={cn(buttonVariants({intent, size}), className)}
            {...props}
        />
    )
})

Button.displayName = "Button"


export default Button;