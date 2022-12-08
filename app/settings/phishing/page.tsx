import ChannelSelect from "../ChannelSelect";

export default function Home() {
  return (
    <div>
      <h1 className="mb-2 text-2xl text-white">Phishing Detection</h1>
      <p className="mb-8 text-white/50">
        Shield auto-deletes any phishing links posted in your server to protect
        your community.
      </p>
      <div className="grid w-full grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <p className="text-white">Phishing Reports Channel</p>
          <ChannelSelect />
        </div>
        <div className="flex flex-col">
          <p className="text-6xl font-medium text-primary">24</p>
          <p className="text-white">Phishing links blocked all-time</p>
        </div>
      </div>
    </div>
  );
}
