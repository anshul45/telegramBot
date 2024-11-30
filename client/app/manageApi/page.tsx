import ChangeApiCard from "@/components/ChangeApiCard"
import TitleCard from "@/components/TitleCard"

const page = () => {
  return (
    <div className="flex-[0.9] p-8">
      <TitleCard title="Manage Api" desc="You can manage api keys here."/>
      <div className="mt-10">
        <ChangeApiCard title="Telegram Bot"/>
      </div>

      <div className="mt-10">
      <ChangeApiCard title="Weather"/>
      </div>
    </div>
  )
}

export default page