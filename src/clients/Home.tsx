import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return <>
  {/* Text */}
  <section className="">
  <div className="bg-[url('https://i.imgur.com/jAXaawT.jpg')] h-screen bg-cover bg-center flex justify-items-center items-center">
    <div className="px-10 lg:px-32 xl:px-40">
      <h1 className="text-6xl font-semibold font-serif mb-6">
        <span className="text-red-500">Sale 20% Off</span> <br />
        <span>On Everything</span>
      </h1>
      <p className="text-lg max-w-md">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
      <button className="inline-block mt-10 px-10 py-3 bg-red-500 text-lg text-white font-semibold">Shop Now</button>
    </div>
  </div>
</section>

{/* Text */}
<section className="bg-white pt-10">
	<h1 className="md:text-5xl font-serif font-semibold text-center text-3xl mt-20">Why Shop With Us</h1>
	<p className="w-16 mx-auto mt-4 h-1 w-30 bg-red-500"></p>
	<div className="grid md:grid-cols-3 gap-y-10 px-4 mt-20 gap-x-6 lg:px-40 md:px-">
		<div className="bg-slate-800 flex flex-col items-center py-12 ">
			<div className="mb-4">
				
			</div>
			<h2 className="text-white text-2xl font-semibold mb-2">Fast Delivery</h2>
			<p className="text-white text-lg w-80 text-center">variations of passages of Lorem Ipsum available</p>
		</div>
		<div className="bg-slate-800 flex flex-col items-center py-12 ">
			<div className="mb-4">

				
			</div>
			<h2 className="text-white text-2xl font-semibold mb-2">Free Shiping</h2>
			<p className="text-white text-lg w-80 text-center">variations of passages of Lorem Ipsum available</p>
		</div>
		<div className="bg-slate-800 flex flex-col items-center py-12 ">
			<div className="mb-4">
				
			</div>
			<h2 className="text-white text-2xl font-semibold mb-2">Best Quality</h2>
			<p className="text-white text-lg w-80 text-center">variations of passages of Lorem Ipsum available</p>
		</div>
	</div>
</section>
  
  </>
}

export default Home