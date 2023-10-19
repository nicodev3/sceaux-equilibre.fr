import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid md:grid-cols-12">
      <section className="flex flex-col gap-5 md:col-start-1 md:col-end-9">
        <header className="mb-12">
          <h1 className="mb-5 text-2xl">(Re)Trouvez votre équilibre</h1>
          <p className="mb-5">
            L&apos;équilibre, qu&apos;il soit physique, mental ou émotionnel,
            est un élément clé de la santé et du bien-être. Dans le contexte
            actuel où les exigences du quotidien sont multiples, maintenir cet
            équilibre peut être un défi.
          </p>
          <p>
            Une prise en charge globale, qui considère la personne dans sa
            totalité, peut s&apos;avérer bénéfique. Cette approche vise à
            intégrer les aspects physiologiques, psychologiques et
            comportementaux de l&apos;individu. Qu&apos;il s&apos;agisse
            d&apos;explorer des thérapies centrées sur l&apos;esprit, de
            bénéficier de conseils nutritionnels adaptés ou de découvrir des
            techniques de pleine conscience, l&apos;objectif est de favoriser
            une harmonie intérieure et extérieure.
          </p>
        </header>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-5 rounded border border-green-light p-5">
            <h2>Psychothérapies</h2>
            <p>
              Il existe de nombreuses formes de psychothérapies, des plus
              traditionnelles comme la psychanalyse, à des approches innovantes
              comme la thérapie par la pleine conscience. Découvrez les{' '}
              <Link
                href="/psychologue-sceaux"
                className="hover:text-cta-dark text-cta underline transition-colors ease-out"
              >
                différentes formes de psychothérapies
              </Link>{' '}
              et trouvez celle qui vous correspond.
            </p>
          </div>
          <div className="flex flex-col gap-5 rounded border border-green-light p-5">
            <h2>Hypnose</h2>
            <p>
              Explorez le pouvoir de l&apos;hypnose, une méthode thérapeutique
              basée sur la modification de l&apos;état de conscience. Loin de
              l&apos;hypnose de spectacle, il s&apos;agit d&apos;une véritable
              approche soignante. Apprenez-en davantage sur les bienfaits de
              l&apos;{' '}
              <Link
                href="/hypnose-sceaux"
                className="hover:text-cta-dark text-cta underline transition-colors ease-out"
              >
                hypnose
              </Link>{' '}
              .
            </p>
          </div>
          <div className="flex flex-col gap-5 rounded border border-green-light p-5">
            <h2>Thérapie par la Pleine Conscience</h2>
            <p>
              Apportez un équilibre à votre vie grâce à la pleine conscience.
              C&apos;est une technique efficace pour gérer le stress,
              l&apos;anxiété et bien d&apos;autres défis quotidiens. Explorez la{' '}
              <Link
                href="/hypnose-sceaux"
                className="hover:text-cta-dark text-cta underline transition-colors ease-out"
              >
                thérapie par la pleine conscience
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-5 rounded border border-green-light p-5">
            <h2>Conseils en Diététique</h2>
            <p>
              Mangez de manière équilibrée et saine avec Lucille Anglard, votre
              diététicienne. Elle saura adapter vos habitudes alimentaires à vos
              besoins spécifiques, vous aidant ainsi à atteindre vos objectifs
              de santé et de bien-être. Découvrez comment une{' '}
              <Link
                href="/dieteticienne-sceaux"
                className="hover:text-cta-dark text-cta underline transition-colors ease-out"
              >
                diététicienne
              </Link>{' '}
              peut vous aider.
            </p>
          </div>
        </div>
      </section>
      <aside className="rounded border border-green p-5 shadow-md md:col-start-10 md:col-end-13">
        <Image
          alt=""
          src="/sceaux-equilibre-home.jpeg"
          width="1000"
          height="1000"
        />
      </aside>
    </main>
  )
}
