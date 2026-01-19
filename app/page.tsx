export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-zinc-50">
      <h1 className="text-4xl font-bold text-zinc-900 mb-8">Our Services</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-sm border border-zinc-200">
          <h2 className="text-xl font-semibold text-zinc-900">Classic Facial</h2>
          <p className="text-3xl font-bold text-zinc-900 mt-2">$75</p>
          <p className="text-zinc-600 mt-2">Deep cleansing facial treatment</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm border border-zinc-200">
          <h2 className="text-xl font-semibold text-zinc-900">Deluxe Massage</h2>
          <p className="text-3xl font-bold text-zinc-900 mt-2">$120</p>
          <p className="text-zinc-600 mt-2">60-minute relaxation massage</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm border border-zinc-200">
          <h2 className="text-xl font-semibold text-zinc-900">Hair Styling</h2>
          <p className="text-3xl font-bold text-zinc-900 mt-2">$65</p>
          <p className="text-zinc-600 mt-2">Cut and style by expert stylists</p>
        </div>
      </div>
    </main>
  )
}
