export default function FullPanelSkeleton() {
  return (
    <main className="flex items-start justify-center bg-[#f2f2f2] px-4 py-32">
      {/* Logo flotante superior */}
      <div className="relative w-full max-w-6xl">
        <div className="absolute -top-10 left-1/2 z-20 -translate-x-1/6">
          <div className="size-24 animate-pulse rounded-full border-10 border-[#F2F4F7] bg-gray-300" />
        </div>

        {/* Card principal */}
        <section className="mt-6 flex w-full overflow-hidden rounded-3xl bg-white shadow-sm">
          {/* Sidebar Skeleton */}
          <aside className="flex w-64 flex-col justify-between rounded-l-3xl bg-[#64BDEB] py-8">
            <div className="flex flex-col gap-8">
              {/* Logo dentro de sidebar */}
              <div className="flex justify-center">
                <div className="size-20 animate-pulse rounded-full bg-white/30" />
              </div>

              {/* Menú Skeleton */}
              <nav className="mt-4 flex flex-col gap-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center gap-3 px-6 py-3">
                    <div className="h-5 w-5 animate-pulse rounded bg-white/30" />
                    <div className="h-4 w-24 animate-pulse rounded bg-white/30" />
                  </div>
                ))}
              </nav>
            </div>

            {/* Cerrar sesión Skeleton */}
            <div className="mt-8 flex flex-col gap-2 px-6">
              <div className="flex gap-2">
                <div className="h-5 w-5 animate-pulse rounded bg-white/30" />
                <div className="h-4 w-24 animate-pulse rounded bg-white/30" />
              </div>
            </div>
          </aside>

          {/* Contenido Skeleton */}
          <section className="flex-1 rounded-3xl bg-[#F2F4F7] px-10 py-8">
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 animate-pulse rounded-full bg-gray-300" />
                <div className="h-6 w-48 animate-pulse rounded bg-gray-300" />
              </div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-40 animate-pulse rounded bg-gray-300" />
                <div className="h-5 w-5 animate-pulse rounded-full bg-gray-300" />
              </div>
            </header>

            {/* Contenido interno */}
            <div className="mt-6 rounded-2xl p-6">
              <div className="flex animate-pulse flex-col gap-5">
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
          </section>
        </section>
      </div>
    </main>
  );
}
