export default function Footer() {
  return (
    <footer className="bg-black py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Luxerra</p>
          <div className="flex gap-8">
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
