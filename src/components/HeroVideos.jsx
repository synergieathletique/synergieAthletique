import { useEffect, useState } from 'react'
import { heroClips } from '../config'

export default function HeroVideos() {
  const [index, setIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(media.matches)
    const onChange = () => setReduceMotion(media.matches)
    media.addEventListener?.('change', onChange)
    return () => media.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) return undefined
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroClips.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [reduceMotion])

  const current = heroClips[index]

  return (
    <div className="hero-media" aria-hidden="true">
      <div className="hero-collage">
        {heroClips.map((clip) => (
          <img key={clip.id} src={clip.poster} alt="" />
        ))}
      </div>
      {!reduceMotion
        ? heroClips.map((clip, clipIndex) => (
            <video
              key={clip.id}
              className={clipIndex === index ? 'is-active' : ''}
              autoPlay
              muted
              loop
              playsInline
              preload={clipIndex === 0 ? 'auto' : 'metadata'}
              poster={clip.poster}
            >
              <source src={clip.src} type="video/mp4" />
            </video>
          ))
        : null}
      <div className="hero-overlay" />
      <p className="hero-sport">{current.label}</p>
    </div>
  )
}
