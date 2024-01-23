import '../App.css';

function Membership() {
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
      <main className="container mx-auto my-8">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4">Memberships</h2>
            <h6>This page is currently under construction while we decide our exact membership structure. Check back soon!</h6>
          </div>
      </main>
      
      </div>
    )
}
export default Membership;  