import { openSans } from '@/app/fonts'

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://sceaux-equilibre.fr/'),
    alternates: {
      canonical: '/mentions-legales',
    },
    title: 'Mentions légales',
    description: 'Mentions légales du site sceaux-equilibre.fr',
  }
}

const MentionsLegalesPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className={`mb-5 text-3xl xl:text-4xl ${openSans.className}`}>
        Conditions générales d&apos;utilisation
      </h1>
      <p>En vigueur au 20/10/2023</p>

      <p>
        Les présentes conditions générales d&apos;utilisation (dites « CGU »)
        ont pour objet l&apos;encadrement juridique des modalités de mise à
        disposition du site et des services par SCI Nicolas Devaux et de définir
        les conditions d’accès et d’utilisation des services par «
        l&apos;Utilisateur ».
      </p>

      <p>Les présentes CGU sont accessibles sur le site à la rubrique «CGU».</p>

      <h2 className={`text-xl ${openSans.className}`}>
        Article 1 : Les mentions légales
      </h2>
      <p>
        L’édition et la direction de la publication du site
        <a href="https://sceaux-equilibre.fr/">https://sceaux-equilibre.fr/</a>
        est assurée par Devaux Nicolas.
      </p>
      <p>
        Adresse e-mail :
        <a href="mailto:cont<!-- Comment -->act.nic<!-- comment -->odev@gmail.com">
          contact.nicodev@gmail.com
        </a>
        .
      </p>

      <p>
        L&apos;hébergeur du site{' '}
        <a href="https://sceaux-equilibre.fr/">https://sceaux-equilibre.fr/</a>
        est Netlify
      </p>

      <h2 className={`text-xl ${openSans.className}`}>
        ARTICLE 2 : Accès au site
      </h2>
      <p>
        Le site{' '}
        <a href="https://sceaux-equilibre.fr/">https://sceaux-equilibre.fr/</a>
        permet à l&apos;Utilisateur un accès gratuit aux services suivants :
      </p>
      <ul>
        <li>
          Informations sur les soins proposés au sein du cabinet SCI Nicolas
          Devaux.
        </li>
      </ul>

      <p>
        Le site est accessible gratuitement en tout lieu à tout Utilisateur
        ayant un accès à Internet. Tous les frais supportés par
        l&apos;Utilisateur pour accéder au service (matériel informatique,
        logiciels, connexion Internet, etc.) sont à sa charge.
      </p>

      <h2 className={`text-xl ${openSans.className}`}>
        ARTICLE 3 : Collecte des données
      </h2>
      <p>
        Le site assure à l&apos;Utilisateur une collecte et un traitement
        d&apos;informations personnelles dans le respect de la vie privée
        conformément à la loi n°78-17 du 6 janvier 1978 relative à
        l&apos;informatique, aux fichiers et aux libertés.
      </p>
      <p>
        En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978,
        l&apos;Utilisateur dispose d&apos;un droit d&apos;accès, de
        rectification, de suppression et d&apos;opposition de ses données
        personnelles. L&apos;Utilisateur exerce ce droit via l&apos;envoi
        d&apos;un email à l&apos;adresse mentionnée dans l&apos;article 1.
      </p>

      <h2 className={`text-xl ${openSans.className}`}>
        ARTICLE 4 : Propriété intellectuelle
      </h2>
      <p>
        Les marques, logos, signes ainsi que tous les contenus du site (textes,
        images, son…) font l&apos;objet d&apos;une protection par le Code de la
        propriété intellectuelle et plus particulièrement par le droit
        d&apos;auteur.
      </p>
      <p>
        L&apos;Utilisateur doit solliciter l&apos;autorisation préalable du site
        pour toute reproduction, publication, copie des différents contenus. Il
        s&apos;engage à une utilisation des contenus du site dans un cadre
        strictement privé. Toute utilisation à des fins commerciales et
        publicitaires est strictement interdite.
      </p>
      <p>
        Toute représentation totale ou partielle de ce site par quelque procédé
        que ce soit, sans l’autorisation expresse de l’exploitant du site
        Internet, constituerait une contrefaçon sanctionnée par l’article L
        335-2 et suivants du Code de la propriété intellectuelle.
      </p>
      <p>
        Il est rappelé, conformément à l’article L122-5 du Code de propriété
        intellectuelle, que l’Utilisateur qui reproduit, copie ou publie le
        contenu protégé doit citer l’auteur et sa source.
      </p>

      <h2 className={`text-xl ${openSans.className}`}>
        ARTICLE 5 : Responsabilité
      </h2>
      <p>
        Les sources des informations diffusées sur le site{' '}
        <a href="https://sceaux-equilibre.fr/">https://sceaux-equilibre.fr/</a>
        sont réputées fiables. Toutefois, le site ne garantit pas qu’il soit
        exempt de défauts, d’erreurs ou d’omissions.
      </p>
      <p>
        Les informations communiquées sont présentées à titre indicatif et
        général sans valeur contractuelle. Malgré des mises à jour régulières,
        le site{' '}
        <a href="https://sceaux-equilibre.fr/">https://sceaux-equilibre.fr/</a>
        ne peut être tenu responsable de la modification des dispositions
        administratives et juridiques survenant après la publication. De même,
        le site ne peut être tenue responsable de l’utilisation et de
        l’interprétation de l’information contenue dans ce site.
      </p>
      <p>
        Le site
        <a href="https://sceaux-equilibre.fr/">https://sceaux-equilibre.fr/</a>
        ne peut être tenu pour responsable d’éventuels virus qui pourraient
        infecter l’ordinateur ou tout matériel informatique de l’Internaute,
        suite à une utilisation, à l’accès, ou au téléchargement provenant de ce
        site.
      </p>
      <p>
        La responsabilité du site ne peut être engagée en cas de force majeure
        ou du fait imprévisible et insurmontable d&apos;un tiers.
      </p>

      <h2 className={`text-xl ${openSans.className}`}>
        ARTICLE 6 : Liens hypertextes
      </h2>
      <p>
        Des liens hypertextes peuvent être présents sur le site. L’Utilisateur
        est informé qu’en cliquant sur ces liens, il sortira du site{' '}
        <a href="https://sceaux-equilibre.fr/">https://sceaux-equilibre.fr/</a>.
        Ce dernier n’a pas de contrôle sur les pages web sur lesquelles
        aboutissent ces liens et ne saurait, en aucun cas, être responsable de
        leur contenu.
      </p>

      <h2 className={`text-xl ${openSans.className}`}>ARTICLE 7 : Cookies</h2>
      <p>
        L’Utilisateur est informé que lors de ses visites sur le site, un cookie
        peut s’installer automatiquement sur son logiciel de navigation. Les
        cookies sont de petits fichiers stockés temporairement sur le disque dur
        de l’ordinateur de l’Utilisateur par votre navigateur et qui sont
        nécessaires à l’utilisation du site{' '}
        <a href="https://sceaux-equilibre.fr/">https://sceaux-equilibre.fr/</a>.
        Les cookies ne contiennent pas d’information personnelle et ne peuvent
        pas être utilisés pour identifier quelqu’un. Un cookie contient un
        identifiant unique, généré aléatoirement et donc anonyme. Certains
        cookies expirent à la fin de la visite de l’Utilisateur, d’autres
        restent.
      </p>
      <p>
        L’information contenue dans les cookies est utilisée pour améliorer le
        site, par exemple en :
      </p>
      <ul>
        <li>
          Permettant à un service de reconnaître l’appareil de l’Utilisateur,
          pour qu’il n’ait pas à donner plusieurs fois les mêmes informations,
          par exemple remplir un formulaire ou une enquête.
        </li>
        <li>
          Reconnaissant que l’Utilisateur a déjà donné un nom d’utilisateur et
          un mot de passe, donc il n’a pas besoin de le refaire pour chaque page
          web.
        </li>
        <li>
          Analysant l&apos;utilisation que font les utilisateurs du site afin de
          l&apos;améliorer.
        </li>
      </ul>
      <p>En naviguant sur le site, L’Utilisateur les accepte.</p>
      <p>
        Un cookie ne donne pas accès à l’ordinateur de l’Utilisateur. Les
        cookies sont stockés sur le disque dur de l’Utilisateur, mais ils ne
        peuvent lire aucune autre donnée sur ce disque dur ni lire les fichiers
        créés par d’autres sites.
      </p>

      <p>
        Les Utilisateurs peuvent paramétrer leur navigateur pour refuser
        l’utilisation des cookies.
      </p>

      <h2 className={`text-xl ${openSans.className}`}>
        ARTICLE 8 : Droit applicable et juridiction compétente
      </h2>
      <p>
        La législation française s&apos;applique au présent contrat. En cas
        d&apos;absence de résolution amiable d&apos;un litige né entre les
        parties, les tribunaux français seront seuls compétents pour en
        connaître.
      </p>

      <p>
        Pour tout litige de nature contractuelle portant sur l’exécution du
        contrat, le tribunal compétent sera celui du lieu du domicile du
        défendeur ou, au choix du demandeur, du lieu de livraison effective du
        produit ou du lieu de l’exécution de la prestation de service.
      </p>
    </div>
  )
}

export default MentionsLegalesPage
