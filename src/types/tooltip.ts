import { ReactNode } from "react"

export type TooltipProps = {
  children: ReactNode
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}