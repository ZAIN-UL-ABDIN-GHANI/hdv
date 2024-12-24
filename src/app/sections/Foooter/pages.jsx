export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-12">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <h1 className="text-xl font-bold tracking-wide">v_hd</h1>
            <p className="text-gray-400">
              Take the <span className="font-bold underline">space</span> seriously.
            </p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>Viktória Rétfalvi</p>
              <p>hi@vhd.hu</p>
              <p>+36 999 999 999</p>
            </div>
          </div>

          {/* About Links */}
          <div className="space-y-2">
            <p className="hover:text-gray-400">_ About me</p>
            <p className="hover:text-gray-400">_ Styles</p>
            <p className="hover:text-gray-400">_ Portfolio</p>
            <p className="hover:text-gray-400">_ Blog</p>
          </div>

          {/* Services Links */}
          <div className="space-y-2">
            <p className="hover:text-gray-400">_ Services</p>
            <p className="hover:text-gray-400">_ Home interior</p>
            <p className="hover:text-gray-400">_ Office design</p>
            <p className="hover:text-gray-400">_ Cafe interior</p>
          </div>

          {/* Products Links */}
          <div className="space-y-2">
            <p className="hover:text-gray-400">_ Products</p>
            <p className="hover:text-gray-400">_ Lights</p>
            <p className="hover:text-gray-400">_ Decoration</p>
            <p className="hover:text-gray-400">_ Textiles</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            {/* Copyright */}
            <p className="text-center md:text-left mb-4 md:mb-0">
              VIKTÓRIA RÉTFALVI © 2025 ALL RIGHTS RESERVED.
            </p>
            
            {/* Terms Links */}
            <div className="flex space-x-8">
              <a href="#" className="hover:text-gray-400">_ Terms and Conditions</a>
              <a href="#" className="hover:text-gray-400">_ Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">_ Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
