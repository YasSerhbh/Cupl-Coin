/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6JbYLdfPjhY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Hero() {
    return (
      <section className="w-full pb-12 md:pb-24 lg:pb-32 test-bg2 max-md:pt-12">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-2">
            <div className="space-y-2">
              <h1 className="text-4xl font-c-primary font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem]">
                Cupl: Paws on the Moon, Eyes on the Stars!
              </h1>
              <p className="max-w-[600px] font-c-secondary text-primary-foreground md:text-xl">
                Join Cupl, the playful memecoin, on an exciting journey to the moon and beyond! With our adorable
                cat-themed branding and community-driven approach, we&apos;re redefining the world of cryptocurrency.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pt-10">
            <div className="flex flex-col">
            <img
              src="/images/1.png"
              width={300}
              height={300}
              alt="Cupl Cat"
              className="aspect-square overflow-hidden rounded-xl object-cover rotate-[5deg]"
            />
            <img
              src="/images/4.png"
              width={300}
              height={300}
              alt="Cupl Cat"
              className="aspect-square overflow-hidden rounded-xl object-cover rotate-[-5deg]"
            />
            </div>
            <div className="grid gap-4">
              <img
                src="/images/2.png"
                width={300}
                height={300}
                alt="Cupl Cat"
                className="aspect-square overflow-hidden rounded-xl object-cover rotate-[-3deg]"
              />
              <img
                src="/images/3.png"
                width={300}
                height={300}
                alt="Cupl Cat"
                className="aspect-square overflow-hidden rounded-xl object-cover rotate-[8deg]"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }