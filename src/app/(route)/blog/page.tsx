import Description from '@/app/components/Description'
import Title from '@/app/components/Title'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <Title title="Blog" />
      <Description description="Blog Description" />
    </div>
  )
}
