export default function BigTitle({ text }: any) {
  return (
    <div>
      <h1 className="text-4xl tracking-loose text-gray-900 md:text-5xl lg:text-6xl font-display md:leading-tight dark:text-white">
        {text}
      </h1>
    </div>
  )
}