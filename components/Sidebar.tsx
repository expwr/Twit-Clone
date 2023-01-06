import React from 'react'
import SidebarRow from './SidebarRow'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
  } from '@heroicons/react/outline'
  

function Sidebar() {
  return (
    <div>
      <img src="https://links.papareact.com/drq" className="m-3 h-10 w-10" alt='' />
      <SidebarRow Icon={HomeIcon} title="Home"
    </div>
  )
}

export default Sidebar
