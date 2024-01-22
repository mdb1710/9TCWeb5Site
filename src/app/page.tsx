import Image from 'next/image'

/* Components */

import NavBar from './components/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <h1>90s Teen Culture coming soon</h1>
      <p>Movies, Music, TV, Tech</p>
    </main>
  )
}
