import client from "../../assets/lifestyle-people-learning-make-sushi.jpg"

const Clients = () => {
    return (
        <div className="mt-7 mb-7 container mx-auto ">
    <div className="my-20">

<div className="font-ubuntu my-8 text-center space-y-6">
  <h1 className="text-2xl lg:text-4xl font-ubuntu font-extrabold">Clients Question</h1>
  <p className="text-base"> Discover the impact of FoodshareHub's services. Hear from our satisfied clients and explore their experiences!</p>

   
    <div>
      <div className="border rounded-lg border-[#1313181A]">
        <div className="hero">
          <div className="hero-content gap-10 flex-col lg:flex-row">
           <div className="relative w-1/2">
            <img className="w-full rounded-lg" src={client} alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg"></div>
           </div>
            <div className="space-y-5 w-1/2">
              <div className="collapse collapse-plus border-b-2 rounded-none border-[#1313181A]">
                <input type="radio" name="my-accordion-3" checked="checked" /> 
                <div className="collapse-title font-raleway text-left text-xl  font-bold">
                Food Donation Process
                </div>
                <div className="collapse-content"> 
                  <p className="font-raleway  text-left"> 
                  At FoodshareHub, donating food is simple and efficient. You can register as a donor on our website, schedule a pickup or drop-off time, and our team will ensure the food reaches those in need promptly and safely.</p>
                </div>
              </div>
              <div className="collapse collapse-plus border-b-2 rounded-none border-[#1313181A]">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title font-raleway text-left text-xl  font-bold">
                Safety and Hygiene Standards
                </div>
                <div className="collapse-content"> 
                  <p className="font-raleway  text-left">
                  FoodshareHub adheres to strict safety and hygiene protocols to ensure all donated food is safe for consumption. Our volunteers are trained in proper food handling, and we regularly inspect and sanitize our facilities and transportation vehicles.</p>
                </div>
              </div>
              <div className="collapse collapse-plus border-b-2 rounded-none border-[#1313181A]">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title font-rakeway text-left text-xl  font-bold">
                Volunteer Opportunities
                </div>
                <div className="collapse-content"> 
                  <p className="font-raleway  text-left">
                  You can volunteer with FoodshareHub by signing up on our website. We have various opportunities, including food sorting, packaging, distribution, and community outreach programs. Join us in making a difference in our community!
              </p>
                </div>
              </div>
  
             

              <div className="collapse collapse-plus border-b-2 rounded-none border-[#1313181A]">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title font-raleway text-left text-xl  font-bold">
                Impact of Donations
                </div>
                <div className="collapse-content"> 
                  <p className="font-raleway  text-left">Your donations help fight hunger and food insecurity in our community. Each contribution ensures that individuals and families in need have access to nutritious meals. Your generosity supports our mission to create a hunger-free community.</p>
                </div>
              </div>
              <div className="collapse collapse-plus border-b-2 rounded-none border-[#1313181A]">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title font-raleway text-left text-xl  font-bold">
                Corporate Partnerships
                </div>
                <div className="collapse-content"> 
                  <p className="font-manrop  text-left">Yes, businesses can partner with FoodshareHub through corporate sponsorships, food drives, and employee volunteer programs. Partnering with us not only supports a good cause but also enhances your company's community involvement and social responsibility effort</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


          </div> 
         
</div>
        </div>
    );
};

export default Clients;