import React from 'react'

interface Props {
    Icon: () => {}
    title: string
}

function SidebarRow(props: Props) {
  return (
    <div>
      <Icon />
      <p>{title}</p>
    </div>
  )
}

export default SidebarRow
