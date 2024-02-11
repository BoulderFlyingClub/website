import '../App.css';
const people = [
  {
    name: 'Umar Haroon',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Umar Haroon',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Umar Haroon',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Umar Haroon',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Umar Haroon',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Umar Haroon',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Umar Haroon',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Umar Haroon',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Umar Haroon',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Umar Haroon',
    role: '',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
   
  // More people...
]
function About() {
    return (
        <div id="ui-container" className="h-auto min-h-screen grid justify-center items-center">
        <header className="fill w-full fixed  w-full z-20 top-0 start-0 bg-white shadow-md px-4 py-2">
        <nav class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-2xl font-bold">Boulder Flying Club</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:bg-gray-200 px-2 py-1 rounded">Home</a></li>
            <li><a href="membership" className="hover:bg-gray-200 px-2 py-1 rounded">Memberships</a></li>
            <li><a href="contact" className="hover:bg-gray-200 px-2 py-1 rounded">Contact</a></li>
            <li><a href="about" className="hover:bg-gray-200 px-2 py-1 rounded">About</a></li>
          </ul>
        </nav>
      </header>
       <div className="flex justify-center items-center"></div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
           <p>We're a new flying club that's founded in 2024. Our aim is to make flying more accessible by making flying cheaper, having more availability, and modernizing planes to make aviation safer</p>
  <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Board</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
          suspendisse.
        </p>
      </div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        {people.map((person) => (
          <li key={person.name}>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" alt="" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
          </div><main>
      {/* <h1 className="text-2xl font-bold">Memberships</h1> */}
      </main>
      
      </div>
    )
}
export default About;  