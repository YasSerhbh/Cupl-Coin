/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ui5csXY1Mg7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function About() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-c-back1" id="about">
        <div className="container grid items-center gap-8 px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl text-white font-bold text-center font-c-primary tracking-tighter sm:text-4xl md:text-5xl">
              About $CUPL
            </h2>
            <p className="text-white text-center font-c-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Cupl is a fun memecoin inspired by our adorable cat duo. We aim to bring excitement to the crypto world with
              a playful twist. Join us as we reach for the moon and create a lively, friendly community around our
              charming coin!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mx-auto">
            <img
              src="/images/5.png"
              width={200}
              height={200}
              alt="Cupl Cat"
              className="rounded-lg object-cover rotate-[-5deg]"
            />
            <img
              src="/images/6.png"
              width={200}
              height={200}
              alt="Cupl Icon"
              className="rounded-lg object-cover rotate-[10deg]"
            />
          </div>
        </div>
      </section>
    )
  }