import { Icons } from "@/components/icons"

export default async function Page() {
  return (
    <div>
      <div className="flex justify-between bg-red-500">
        <Icons.chevronLeft className="h-6 w-6" />
        <div className="flex">
          <Icons.share className="h-6 w-6" />
          <Icons.close className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}
