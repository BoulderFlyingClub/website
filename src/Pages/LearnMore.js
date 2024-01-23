import '../App.css';

function LearnMore() {
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
      <main>
      {/* <h1 className="text-2xl font-bold">Memberships</h1> */}
      </main>
      
      </div>
    )
}
export default LearnMore;  