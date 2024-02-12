import { openSans } from '@/app/fonts'

const ContactPage = () => {
  return (
    <section className="md:w-1/2">
      <h1
        className={`c-card__title text-3xl font-semibold ${openSans.className}`}
      >
        Nous contacter
      </h1>
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
            className="bg-atlantis-500 hover:bg-atlantis-600 my-5 ml-auto block rounded p-3 text-center text-white transition-colors ease-out"
          >
            Envoyer
          </button>
        </p>
      </form>
    </section>
  )
}

export default ContactPage
