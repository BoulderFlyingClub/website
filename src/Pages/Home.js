import cessna1 from '../cody-fitzgerald-O0Tr0mrzXLA-unsplash.jpg'
import boulder from '../braden-collum-TFFaIgbBETs-unsplash.jpg'
import cessna2 from '../nicolas-peyrol-Fpyjqod3M6A-unsplash.jpg'
import '../App.css';

function Home() {
  return (
    <div id="ui-container" className="h-auto min-h-screen grid justify-center items-center">
      <header className="w-full bg-white shadow-md px-4 py-2">
        <nav>
          <h1 className="text-2xl font-bold">Boulder Flying Club</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:bg-gray-200 px-2 py-1 rounded">Home</a></li>
            {/* <li><a href="wb" className="hover:bg-gray-200 px-2 py-1 rounded">Weight and Balance</a></li> */}
            <li><a href="membership" className="hover:bg-gray-200 px-2 py-1 rounded">Memberships</a></li>
            <li><a href="contact" className="hover:bg-gray-200 px-2 py-1 rounded">Contact</a></li>
            <li><a href="about" className="hover:bg-gray-200 px-2 py-1 rounded">About</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto my-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* <div className="flex justify-center items-center"><img src={picsComingSoon}/></div> */}
          <div className="flex justify-center items-center"><img className="w-full h-auto aspect-w-16 aspect-h-9 rounded-lg" src={cessna1} alt="" /></div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to the Boulder Flying Club!</h2>
            {/* <p className="mb-4">Join us in experiencing the joy of flying in the beautiful skies. Our flying club offers a safe and friendly environment for aviation enthusiasts to come together and enjoy the freedom of the skies.</p> */}
            <a href="membership" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Become a member</a>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">About Our Club</h2>
            <p className="mb-4">We are a nonprofit social general aviation flying club dedicated to promoting and supporting general aviation activities. Our club provides a platform for aviation enthusiasts to connect, share experiences, and enhance their flying skills.</p><a href="about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
          </div>
          {/* <div className="flex justify-center items-center"><img src={picsComingSoon}/></div> */}
          <div className="flex justify-center items-center"><img className="w-full h-auto aspect-w-16 aspect-h-9 rounded-lg" src={boulder} alt="" /></div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

        {/* <div className="flex justify-center items-center"><img className="w-full h-auto aspect-w-16 aspect-h-9 rounded-lg" src="https://source.unsplash.com/600x600/?abstract" alt="" /></div> */}
          <div className="flex justify-center items-center"><img className="w-full h-auto aspect-w-16 aspect-h-9 rounded-lg" src={cessna2} alt="" /></div>
          {/* <div className="flex justify-center items-center"><img src={picsComingSoon}/></div> */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="mb-4">Become a part of our enthusiastic community of aviation lovers. Connect with fellow pilots, learn from experienced aviators, and discover new flying opportunities.</p><a href="about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">About us</a>
          </div>
        </section>
      </main>
      <footer className="bg-gray-200 py-4 px-4 text-center">
        <p className="text-gray-600">© 2024 Boulder Flying Club. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
