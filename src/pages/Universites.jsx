import CardUniversites from "../components/universitesComponents/CardUniversites";

const mapss = ["a", "b", "c", "d", "e", "f", "g", "h", "i",];
const Universites = () => {
  return (
    <div>
      <div
        className="h-[240px] w-full "
        style={{
          backgroundImage: "url(./image/bnr16.png)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-end text-white md:mx-auto md:container pb-8">
          <h2 className=" font-bold text-[50px]">Universites</h2>
          <p className="text-sm font-medium">Tüm Üniversiteleri Kontrol Edebilirsiniz</p>
        </div>
      </div>
{mapss.map((map, i) =>( <CardUniversites {...map} key={i} />))}
 
  </div>
  );
};

export default Universites;
