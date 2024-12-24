export default function BlogSection() {
  return (
    <section className="bg-gray-100 py-24 flex flex-col items-center">
      {/* Dots */}
      <div className="flex space-x-4">
        <span className="h-2 w-2 rounded-full bg-black"></span>
        <span className="h-2 w-2 rounded-full bg-black"></span>
        <span className="h-2 w-2 rounded-full bg-black"></span>
      </div>

      {/* Footer Text */}
      <div className="mt-8 text-center text-xs text-gray-600 tracking-wide">
        VIKTÓRIA RÉTFALVI © 2025 ALL RIGHTS RESERVED.
      </div>
    </section>
  );
}
