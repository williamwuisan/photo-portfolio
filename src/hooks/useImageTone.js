import { useEffect, useState } from 'react'

export function useImageTone(src) {
  const [tone, setTone] = useState('light')

  useEffect(() => {
    if (!src) {
      setTone('light')
      return
    }

    let cancelled = false
    const img = new Image()

    img.onload = () => {
      if (cancelled) return
      try {
        const size = 24
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d')
        const sx = img.naturalWidth * 0.2
        const sy = img.naturalHeight * 0.35
        const sw = img.naturalWidth * 0.6
        const sh = img.naturalHeight * 0.3
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size)
        const { data } = ctx.getImageData(0, 0, size, size)
        let total = 0
        for (let i = 0; i < data.length; i += 4) {
          total += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]
        }
        const avg = total / (data.length / 4)
        setTone(avg > 150 ? 'dark' : 'light')
      } catch {
        setTone('light')
      }
    }

    img.onerror = () => setTone('light')
    img.src = src

    return () => {
      cancelled = true
    }
  }, [src])

  return tone
}
