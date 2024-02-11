import '../App.css';
import ContactPage from './ContactPage';

function Contact() {
    return (
        <div id="ui-container" className="h-auto min-h-screen grid justify-left items-center">
        <header className="fill w-full fixed  w-full z-20 top-0 start-0 bg-white shadow-md px-4 py-2">
        <nav class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-2xl font-bold">Boulder Flying Club</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:bg-gray-200 px-2 py-1 rounded">Home</a></li>
            <li><a href="membership" className="hover:bg-gray-200 px-2 py-1 rounded">Memberships</a></li>
            <li><a href="contact" className="hover:bg-gray-200 px-2 py-1 rounded">Contact</a></li>
            {/* <li><a href="about" className="hover:bg-gray-200 px-2 py-1 rounded">About</a></li> */}
          </ul>
        </nav>
      </header>
      <main>
    <ContactPage />
      {/* <h1 className="text-2xl font-bold">Memberships</h1> */}
      </main>
      
      </div>
    )
}
export default Contact;  
