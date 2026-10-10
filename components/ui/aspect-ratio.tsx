import { cn } from "cn"

function AspectRatio({
  ratio,
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "style"> & { ratio: number }) {
  const ratios = [
    { value: 1, className: "aspect-square" },
    { value: 4 / 3, className: "aspect-4/3" },
    { value: 3 / 2, className: "aspect-3/2" },
    { value: 16 / 9, className: "aspect-video" },
    { value: 9 / 16, className: "aspect-9/16" },
    { value: 21 / 9, className: "aspect-21/9" },
  ]
  const aspectClass = ratios.find(({ value }) => Math.abs(value - ratio) < 0.0001)?.className

  if (!aspectClass) {
    throw new Error("AspectRatio supports 1:1, 4:3, 3:2, 16:9, 9:16, and 21:9 ratios")
  }

  return (
    <div
      data-slot="aspect-ratio"
      className={cn("relative", aspectClass, className)}
      {...props}
    />
  )
}

export { AspectRatio }
