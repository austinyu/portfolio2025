export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center min-h-screen max-w-[50vw] mx-auto">
      {children}
    </div>
  );
}
