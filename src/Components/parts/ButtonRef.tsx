import React, { forwardRef } from "react"

type Props = React.ComponentProps<"button">
//type Props = React.ComponentPropsWithRef<"button">;

export const ButtonRef = forwardRef<HTMLButtonElement, Props>(
  ({ children }, ref) => {
    return <button ref={ref}>{children}</button>
  }
)
