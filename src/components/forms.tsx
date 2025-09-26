import React from 'react'

type PropsI = {
    Section: string
    Tipe: "text" | "email" | "password" | "number" | "date" | "time" | "datetime-local" | "month" | "week" | "url" | "search" | "tel" | "color" | "range" | "checkbox" | "radio" | "file" | "submit" | "image" | "reset" | "button";
}

export const Input = ({ Section, Tipe}: PropsI) => {
  return (
        <input type={Tipe} placeholder={Section} />
  )
}