import { openSans } from '@/app/fonts'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/contact',
    },
    openGraph: {
      title: 'Contactez-nous',
      url: '/contact',
      images: '',
    },
    title: 'Contactez-nous',
    description:
      'Contactez-nous pour toute question ou demande de rendez-vous. Nous vous répondrons dans les plus brefs délais.',
  }
}

const ContactPage = () => {
  return (
    <section>
      <h1 className={`mb-5 text-3xl font-semibold ${openSans.className}`}>
        Contactez-nous - Sceaux Équilibre
      </h1>
      <div className="grid gap-10 md:grid-cols-2">
        <section className="c-wysiwyg">
          <p>
            Sceaux Équilibre est un espace dédié à votre équilibre et bien-être,
            situé à Sceaux. Notre équipe se compose de professionnels
            spécialisés dans divers domaines de la santé et du bien-être,
            notamment en psychologie, nutrition, hypnothérapie, et drainage
            lymphatique.
          </p>
          <h2>Nous trouver :</h2>
          <p>63 rue Houdan, Sceaux 92330</p>
          <h2>Nos horaires</h2>
          <p>Lundi à Samedi : 8h00 à 20h00 Dimanche : Fermé</p>

          <p>
            Nous sommes là pour vous accompagner dans votre parcours de santé
            mentale et physique. Que vous cherchiez à améliorer votre
            alimentation, à explorer les bénéfices de l&apos;hypnothérapie, à
            bénéficier d&apos;un soutien psychologique, ou à vous intéresser au
            drainage lymphatique, notre équipe est à votre écoute pour vous
            proposer un accompagnement personnalisé. Pour toute demande
            d&apos;information, prise de rendez-vous, ou question sur nos
            services, vous pouvez nous contacter directement via les coordonnées
            ci-dessus ou en utilisant le formulaire de contact disponible sur
            notre site.
          </p>
          <p>
            Sceaux Équilibre est votre partenaire de confiance à Sceaux pour un
            accompagnement professionnel dans les domaines de la psychologie, la
            nutrition, l&apos;hypnothérapie, et le drainage lymphatique. Nous
            sommes dédiés à votre bien-être et nous nous engageons à vous
            fournir un soutien adapté à vos besoins. Nous espérons avoir
            l&apos;opportunité de vous accompagner dans votre démarche de
            bien-être.
          </p>
        </section>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col gap-5 bg-sazerac-50 p-10 shadow-md"
        >
          <p>
            <label className="flex flex-col gap-1">
              Nom{' '}
              <input
                type="text"
                name="name"
                placeholder="Jean Dupond"
                className="flex-1 rounded border p-1"
              />
            </label>
          </p>
          <p>
            <label className="flex flex-col gap-1">
              Email{' '}
              <input
                type="email"
                name="email"
                placeholder="vous@domain.com"
                className="flex-1 rounded border p-1"
              />
            </label>
          </p>
          <p>
            <label className="flex flex-col gap-1">
              Téléphone{' '}
              <input
                type="tel"
                name="phone"
                placeholder="xx xx xx xx"
                className="flex-1 rounded border p-1"
              />
            </label>
          </p>
          <p>
            <label className="flex flex-col gap-1">
              Votre message{' '}
              <textarea
                placeholder="votre message"
                className="flex-1 rounded border p-1"
                rows={6}
              />
            </label>
          </p>
          <p>
            <button
              type="submit"
              className="c-btn-cta"
            >
              Envoyer
            </button>
          </p>
        </form>
      </div>
    </section>
  )
}

export default ContactPage
