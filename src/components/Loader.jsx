import React, { useState, useEffect } from 'react'
import { useThemeLogo } from './../hooks/useThemeLogo'

export default function Loader({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [progress, setProgress] = useState(0)
  const logo = useThemeLogo()

  useEffect(() => {
    let interval

    const handleLoad = () => {
      // Snap straight to 100 once everything's actually loaded
      clearInterval(interval)
      setProgress(100)

      setTimeout(() => {
        setIsFadingOut(true)
        setTimeout(() => {
          setIsVisible(false)
          onFinish?.()
        }, 500)
      }, 400)
    }

    // Simulate incremental progress while real assets load in the background
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev // hold near the end until actual load fires
        return prev + Math.random() * 8
      })
    }, 150)

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearInterval(interval)
      window.removeEventListener('load', handleLoad)
    }
  }, [onFinish])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-foreground transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6 w-full max-w-xs px-8">
        <img src={logo} alt="Logo" className="w-30" />

        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-1 bg-background/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-background rounded-full transition-all duration-200 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <div className="flex justify-between items-center">
            <span className="font-mono text-xs text-background/50">
              loading
            </span>
            <span className="font-mono text-xs text-background/70 tabular-nums">
              {Math.floor(Math.min(progress, 100))}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}