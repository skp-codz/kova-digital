export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} Kova Digital. All rights reserved.
      </div>
    </footer>
  );
}
