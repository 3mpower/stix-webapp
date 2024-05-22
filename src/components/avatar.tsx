import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserAvatar = () => {
  return (
    <Avatar className="border-2 border-white">
      <AvatarImage src="https://github.com/shadcn.png" />
      {/* <AvatarFallback>Profile</AvatarFallback> */}
    </Avatar>
  )
}

export default UserAvatar
