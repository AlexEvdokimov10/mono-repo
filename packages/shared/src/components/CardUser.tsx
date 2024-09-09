import React from 'react'

export const CardUser = ({username}:{username?:string}) => {
  return (
    <div>
      username:{username ?? 'user'}
      password 123
    </div>
  )
}

