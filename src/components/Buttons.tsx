"use client";

export function BackToBlogsButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => (window.location.href = "/blogs")}
      className={className}
    >
      Back to Blogs
    </button>
  );
}
