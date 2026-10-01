export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <span className="h-10 w-10 rounded-full border-4 border-brand-gray-light border-t-brand-yellow animate-spin" />
        <span className="text-sm font-medium text-brand-gray">Loading…</span>
      </div>
    </div>
  );
}
