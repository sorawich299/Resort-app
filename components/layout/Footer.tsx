export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container py-8 text-sm text-neutral-600 m-auto">
        © {new Date().getFullYear()} MyResort
      </div>
    </footer>
  );
}
