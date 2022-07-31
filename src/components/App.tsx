import imageProject from '../assets/react-typescript-tailwind-vite.png'
const links = [
  {
    label: 'Site Pessoal',
    link: 'https://gilsonpaulo.com.br'
  },

  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/gpsc/'
  },

  {
    label: 'Gitlab',
    link: 'https://gitlab.com/GilsonInfet'
  },

  {
    label: 'Github',
    link: 'https://github.com/Gilson401'
  }
]

function App() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl ">
        <h1 className="h-20 rounded-sm bg-green-900 px-4 text-center text-4xl font-bold text-white sm:px-6 sm:text-5xl sm:tracking-tight lg:px-8 lg:text-6xl">
          Reactjs Typescript Tailwindcss Vite Project
        </h1>
        <div className="text-center">
          <h2 className="mt-3 text-base font-semibold uppercase tracking-wide text-blue-600">
            Hello Typescript!!!!
          </h2>

          <p>This is my first project with typescript. Currently WIP </p>
          <p>
            Here you will find demonstrations of my coding skills with the above
            stacks. <strong> Stay tunned for the next updates</strong>.
          </p>

          <img
            src={imageProject}
            alt="project image"
            className="mx-auto mt-6  w-full shadow-sm md:w-1/2"
          />
          <p className="mt-2 text-xl text-gray-400">Links:</p>

          {links.map((link, index) => (
            <a
              className="mt-2 block rounded-sm bg-green-700 py-2 text-white"
              key={index}
              href={link.link}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
