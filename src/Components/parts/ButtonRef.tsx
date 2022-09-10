import React, { forwardRef } from "react"
import clsx from "clsx"

type Props = React.ComponentProps<"button"> & {
  customClass: string
}
//type Props = React.ComponentPropsWithRef<"button">;

const className =
  "p-3 text-center border border-gray-100 rounded-md shadow-md shadow-gray-200"

export const ButtonRef = forwardRef<HTMLButtonElement, Props>(
  ({ children, customClass, ...rest }, ref) => {
    return (
      <button ref={ref} className={clsx(customClass, className)} {...rest}>
        {children}
      </button>
    )
  }
)
