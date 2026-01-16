export default function PanelSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-6">
      {/* Header Skeleton */}
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-gray-300" />
        <div className="h-6 w-48 rounded bg-gray-300" />
      </div>

      {/* Content Skeleton - Cards */}
      <div className="flex flex-col gap-5">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex w-full items-center justify-between gap-5 rounded-xl bg-gray-200 p-5"
          >
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-md bg-gray-300" />
              <div className="flex flex-col gap-2">
                <div className="h-4 w-40 rounded bg-gray-300" />
                <div className="h-4 w-32 rounded bg-gray-300" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-4 w-24 rounded bg-gray-300" />
              <div className="h-4 w-28 rounded bg-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
