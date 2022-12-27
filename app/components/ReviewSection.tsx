"use client"
import { nanoid } from "nanoid"
import React from "react"
import { GradientText } from "./Text"
import Review, { ReviewProps } from "./Review"

export default function ReviewSection() {
  return (
    <div className="flex flex-wrap justify-center m-auto transition-all my-28 md:gap-x-6 gap-x-2 gap-y-16 lg:max-w-6xl align-center">
      {reviews.map(({ src, name, message, id }: ReviewProps) => (
        <Review src={src} name={name} message={message} />
      ))}
    </div>
  )
}

const reviews = [
  {
    src: "/assets/yelp/Emily I.jpg",
    name: "Emily I.",
    message:
      "Amazing service. Needed a large patch sewn on my kids' Jujitsu uniform. They did a wonderful job and the price was so low I wish I had more uniforms to sew. Definitely recommend.",
    id: nanoid(),
  },
  {
    src: "/assets/yelp/Aggie M.jpg",
    name: "Aggie M.",
    message:
      "Thank you so much Chin for replacing my son's extremely tired work shirts with fabulous new ones that were identical to his prior ones. Your customer service and as well as the finished product were outstanding. I can't thank you enough...",
    id: nanoid(),
  },
  {
    src: "/assets/yelp/Amber T.jpg",
    name: "Amber T.",
    message:
      "Farwest Uniforms delivered when I was in a rush to get my husbands name badge embroidered. Chin & Tu we're super helpful and accommodating to my request, turning it around in less than 24 hours. The name badge turned out great!",
    id: nanoid(),
  },

  {
    src: "/assets/yelp/Elise V.jpg",
    name: "Elise V.",
    message:
      "His prices are GREAT and you can't beat his turnaround or work. He's made our fanny packs, custom hats, custom t-shirts and tanks, and so much more. If you're looking for customized gear for your team, go with Chin.",
    id: nanoid(),
  },
  {
    src: "/assets/yelp/Kenny K.jpg",
    name: "Kenny K.",
    message:
      "Just picked up my company shirts with the company logo, The owner Chin design my logo and did an awesome job. He was easy to work with and the pricing was very fair. The quality of work was awesome, I would definitely go back for future needs.",
    id: nanoid(),
  },
  {
    src: "/assets/yelp/Haydee P V.jpg",
    name: "Haydee P V.",
    message:
      "High quality embroidery and done the next day! The owner was really nice and the results turned out great!",
  },
]
