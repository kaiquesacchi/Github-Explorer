import React from 'react'
import * as SC from './styles'

interface iProps {
  children: React.ReactNode
}
export default function FocusBlock({ children }: iProps) {
  return <SC.Container>{children}</SC.Container>
}
