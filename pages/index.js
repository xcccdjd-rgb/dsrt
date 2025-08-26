// pages/index.js
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>DSRT - Digital Smart Revise Technology</title>
        <meta name="description" content="Bantu belajar lebih cerdas dengan AI" />
      </Head>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all ${scrollY > 50 ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">DSRT</div>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Features</a>
              <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</a>
              <a href="/login" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition">Login</a>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
                {menuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-2 pt-2 pb-4 space-y-1 bg-white dark:bg-gray-900 shadow-md">
            <a href="#features" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">Features</a>
            <a href="#about" className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">About</a>
            <a href="/login" className="block px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500 transition">Login</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 to-purple-500 overflow-hidden dark:from-gray-800 dark:to-gray-900">
        {/* Animated shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-bounceSlow -top-16 -left-16"></div>
          <div className="absolute w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-bounceSlow -bottom-16 -right-16"></div>
        </div>
        <h1 className="relative text-5xl sm:text-6xl font-bold text-white mb-4 fade-up">Digital Smart Revise Technology</h1>
        <p className="relative text-lg sm:text-xl text-white mb-8 fade-up delay-200 max-w-xl">Bantu belajar lebih cerdas dengan teknologi AI modern</p>
        <a href="/register" className="relative px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition fade-up delay-400">Cobalah Sekarang</a>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 fade-up">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="AI Image Generator" description="Buat gambar cepat dari deskripsi teks." color="bg-gradient-to-br from-purple-400 to-indigo-400"/>
          <FeatureCard title="Smart Revision" description="Merevisi catatan dan materi belajar secara cerdas." color="bg-gradient-to-br from-indigo-400 to-purple-500"/>
          <FeatureCard title="Cloud Sync" description="Data tersimpan aman, bisa diakses dari mana saja." color="bg-gradient-to-br from-purple-500 to-indigo-600"/>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 fade-up">Tentang DSRT</h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg sm:text-xl fade-up delay-200">
          DSRT hadir untuk membantu proses belajar-mengajar lebih efisien. Dengan teknologi AI modern, semua catatan dan revisi menjadi lebih cepat dan cerdas.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 DSRT. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 1s forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  )
}

function FeatureCard({ title, description, color }) {
  return (
    <div className={`p-6 rounded-xl shadow-2xl text-white transform transition hover:scale-105 hover:shadow-purple-400 ${color}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  )
}
