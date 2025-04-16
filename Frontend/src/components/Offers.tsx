import offer1 from "../assets/offers/offer-1.webp";
import offer2 from "../assets/offers/offer-2.webp";
import offer3 from "../assets/offers/offer-3.webp";
import offer4 from "../assets/offers/offer-4.webp";
import offer5 from "../assets/offers/offer-5.webp";
import offer6 from "../assets/offers/offer-6.webp";

const OffersImg = [offer1, offer2, offer3, offer4, offer5, offer6];

const Offers = () => {
  return (
    <>
      <div className="h-56 bg-red-500 mx-5 rounded-lg">
        <img className="" src={OffersImg[4]} alt="" />
      </div>
    </>
  );
};

export default Offers;
