import { PerformanceObserver, performance } from "perf_hooks"

interface Data {
  name: string
  duration: number
}

export const data: Data[] = []

export const observer = new PerformanceObserver(items => {
  const { name, duration } = items.getEntries()[0]

  data.push({
    name,
    duration,
  })

  performance.clearMarks()
})

exports.data = data
