import { openSans } from '@/app/fonts'
import Aside from '@/app/components/Aside'

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
      'Contactez-nous pour en savoir plus sur nos services en psychologie, nutrition, hypnothérapie, et drainage lymphatique. Notre équipe dédiée à Sceaux est prête à vous accompagner vers le bien-être.',
  }
}

const ContactPage = () => {
  return (
    <>
      <h1 className={`mb-5 text-3xl font-semibold ${openSans.className}`}>Contactez-nous - Sceaux Équilibre</h1>
      <div className="c-wysiwyg">
        <p>
          Sceaux Équilibre se spécialise dans plusieurs domaines essentiels pour le bien-être et la santé mentale,
          notamment la psychologie, qui aide à comprendre et à améliorer le comportement et le bien-être émotionnel,
          la psychomotricité, qui vise à développer l'harmonie entre le corps et l'esprit, ainsi que la relaxation,
          une méthode efficace pour réduire le stress et favoriser la sérénité.
        </p>
        <h2>Nous trouver :</h2>
        <p>63 rue Houdan, Sceaux 92330</p>
        <h2>Nos horaires</h2>
        <table className="table-auto border-collapse border border-slate-400 mb-5">
          <thead>
            <tr>
              <th className="border border-slate-400 px-4 py-2">Jour</th>
              <th className="border border-slate-400 px-4 py-2">Horaires</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-400 px-4 py-2">Lundi</td>
              <td className="border border-slate-400 px-4 py-2">8h00 à 21h00</td>
            </tr>
            <tr>
              <td className="border border-slate-400 px-4 py-2">Mardi</td>
              <td className="border border-slate-400 px-4 py-2">8h00 à 21h00</td>
            </tr>
            <tr>
              <td className="border border-slate-400 px-4 py-2">Mercredi</td>
              <td className="border border-slate-400 px-4 py-2">8h00 à 21h00</td>
            </tr>
            <tr>
              <td className="border border-slate-400 px-4 py-2">Jeudi</td>
              <td className="border border-slate-400 px-4 py-2">8h00 à 21h00</td>
            </tr>
            <tr>
              <td className="border border-slate-400 px-4 py-2">Vendredi</td>
              <td className="border border-slate-400 px-4 py-2">8h00 à 21h00</td>
            </tr>
            <tr>
              <td className="border border-slate-400 px-4 py-2">Samedi</td>
              <td className="border border-slate-400 px-4 py-2">8h00 à 21h00</td>
            </tr>
            <tr>
              <td className="border border-slate-400 px-4 py-2">Dimanche</td>
              <td className="border border-slate-400 px-4 py-2">Fermé</td>
            </tr>
          </tbody>
        </table>

        <p>
          Nous sommes là pour vous accompagner dans votre parcours de santé mentale et physique. Que vous cherchiez à
          améliorer votre alimentation, à explorer les bénéfices de l&apos;hypnothérapie, à bénéficier d&apos;un
          soutien psychologique, ou à vous intéresser au drainage lymphatique, notre équipe est à votre écoute pour
          vous proposer un accompagnement personnalisé. Pour toute demande d&apos;information, prise de rendez-vous,
          ou question sur nos services, vous pouvez nous contacter directement via les coordonnées ci-dessus ou en
          utilisant le formulaire de contact disponible sur notre site.
        </p>
        <p>
          Sceaux Équilibre est votre partenaire de confiance à Sceaux pour un accompagnement professionnel dans les
          domaines de la psychologie, la nutrition, l&apos;hypnothérapie, et le drainage lymphatique. Nous sommes
          dédiés à votre bien-être et nous nous engageons à vous fournir un soutien adapté à vos besoins. Nous
          espérons avoir l&apos;opportunité de vous accompagner dans votre démarche de bien-être.
        </p>
      </div>
    </>
  )
}

export default ContactPage
