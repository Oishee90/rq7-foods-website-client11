import hero from "../../assets/flame-grilled-meat-cooking-flames-generative-ai-removebg-preview.png"

const Hero = () => {
    return (
        <div>
                  <div className="hero h-[500px]  mb-10 bg-[#0C0C0C]">
  <div className="hero-content h-full flex-col lg:flex-row-reverse text-white mb-5">
    <img src={hero} className="w-[50%] h-full rounded-lg shadow-2xl " />
    <div className="mb-5">
      <h1 className="text-2xl md:text-5xl font-bold">Today's <span className="text-[#FFA62F]">Astackin</span> Day</h1>
      <p className="py-6 text-base md:text-xl">Join us in celebrating Astackin Day, a special day dedicated to delicious, stackable treats! Enjoy a variety of gourmet pancakes, waffles, and layered desserts, all made with the freshest ingredients and creative flair.

      </p>
      <div><button className="btn bg-[#FFA62F] hover:bg-[#ff8d36] border-none p-4">Order Now</button></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;