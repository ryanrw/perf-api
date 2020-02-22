import { PerformanceObserver, performance } from "perf_hooks"
import { Data } from "data"
import { sendResultToDatabase } from "./firebase"

export const data: Data[] = []

export function clearData() {
  data.splice(0, data.length)
}

export const observer = new PerformanceObserver(async items => {
  const { name, duration } = items.getEntries()[0]

  console.log(`duration: ${duration}`)

  await sendResultToDatabase("micro-getallpost", { name, duration })

  performance.clearMarks()
})
