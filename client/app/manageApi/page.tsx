import ChangeApiCard from "@/components/ChangeApiCard"
import TitleCard from "@/components/TitleCard"
import { fetchApiKey } from "@/utils/api"

const page = async() => {
  const botapiKey = await fetchApiKey('BOT');
  const weatheraoikey = await fetchApiKey('WEATHER');
  return (
    <div className="flex-[0.9] p-8">
      <TitleCard title="Manage Api" desc="You can manage api keys here."/>
      <div className="mt-10">
        <ChangeApiCard title="Telegram Bot" apiKey={botapiKey}/>
      </div>

      <div className="mt-10">
      <ChangeApiCard title="Weather" apiKey={weatheraoikey}/>
      </div>
    </div>
  )
}

export default page