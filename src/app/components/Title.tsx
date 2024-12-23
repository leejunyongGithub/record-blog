import React from 'react'

export default function Title({ title }: { title: string }) {
  return (
    <h1 className="text-4xl font-bold">{title}</h1>
  )
}
