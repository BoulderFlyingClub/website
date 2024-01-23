import '../App.css';

function About() {
    return (
        <div id="ui-container" className="h-auto min-h-screen grid justify-center items-center">
        <header className="fill w-full bg-white shadow-md px-4 py-2">
        <nav>
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
          </div><main>
      {/* <h1 className="text-2xl font-bold">Memberships</h1> */}
      </main>
      
      </div>
    )
}
export default About;  