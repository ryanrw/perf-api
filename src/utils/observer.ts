import { PerformanceObserver, performance } from "perf_hooks"
import { sendResultToDatabase } from "./firebase"

export const observer = new PerformanceObserver(async items => {
  const { duration } = items.getEntries()[0]

  console.log(`duration: ${duration}`)

  await sendResultToDatabase("micro-getallpost", { name, duration })

  performance.clearMarks()
})
