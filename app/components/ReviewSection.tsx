"use client"
import { nanoid } from "nanoid"
import React from "react"
import GradientText from "./GradientText"
import Review, { ReviewProps } from "./Review"

export default function ReviewSection() {
  return (
    <div className="flex transition-all flex-wrap md:gap-x-6 gap-x-2 gap-y-16 justify-center lg:max-w-6xl m-auto align-center">
      {reviews.map(({ src, name, message, id }: ReviewProps) => (
        <Review src={src} name={name} message={message} />
      ))}
    </div>
  )
}

const reviews = [
  {
    src: "/assets/buddha.jpg",
    name: "Emily I.",
    message:
      "Amazing service. Needed a large patch sewn on my kids' Jujitsu uniform. They did a wonderful job and the price was so low I wish I had more uniforms to sew. Definitely recommend.",
    id: nanoid(),
  },
  {
    src: "/assets/buddha.jpg",
    name: "Emily I.",
    message:
      "Amazing service. Needed a large patch sewn on my kids' Jujitsu uniform. They did a wonderful job and the price was so low I wish I had more uniforms to sew. Definitely recommend.",
    id: nanoid(),
  },
  {
    src: "/assets/buddha.jpg",
    name: "Emily I.",
    message:
      "Amazing service. Needed a large patch sewn on my kids' Jujitsu uniform. They did a wonderful job and the price was so low I wish I had more uniforms to sew. Definitely recommend.",
    id: nanoid(),
  },
  {
    src: "/assets/buddha.jpg",
    name: "Emily I.",
    message:
      "Amazing service. Needed a large patch sewn on my kids' Jujitsu uniform. They did a wonderful job and the price was so low I wish I had more uniforms to sew. Definitely recommend.",
  },
  {
    src: "/assets/buddha.jpg",
    name: "Emily I.",
    message:
      "Amazing service. Needed a large patch sewn on my kids' Jujitsu uniform. They did a wonderful job and the price was so low I wish I had more uniforms to sew. Definitely recommend.",
    id: nanoid(),
  },
  {
    src: "/assets/buddha.jpg",
    name: "Emily I.",
    message:
      "Amazing service. Needed a large patch sewn on my kids' Jujitsu uniform. They did a wonderful job and the price was so low I wish I had more uniforms to sew. Definitely recommend.",
    id: nanoid(),
  },
]
