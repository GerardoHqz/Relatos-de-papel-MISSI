import { useEffect, useRef, useState } from 'react'

export function useCountdown(seconds, onComplete) {
  const [timeLeft, setTimeLeft] = useState(seconds)
  const callbackRef = useRef(onComplete)

  useEffect(() => {
    callbackRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    if (seconds <= 0) {
      setTimeLeft(0)
      return
    }

    setTimeLeft(seconds)
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          if (typeof callbackRef.current === 'function') {
            callbackRef.current()
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds])

  return timeLeft
}
