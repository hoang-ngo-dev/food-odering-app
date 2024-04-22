import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex-col gap-4">
          <p>Lorem ipum </p>
          <p>Lorem ipum </p>
          <p>Lorem ipum </p>

        </div>

      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={'Don\'t hesitate'} mainHeader={'Contact us'} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46783123123">+46 783 123 123</a>
        </div>

      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved
      </footer>
    </>
  );
}
