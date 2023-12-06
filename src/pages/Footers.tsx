import FooterWithColumns from "../ui/footers/FooterWithColumns";

const Footers = () => {
  return (
    <>
      <h1 className="text-4xl">Footers</h1>
      <ul className="flex gap-8 w-full flex-wrap ">
        <li className="w-full">
          <FooterWithColumns />
        </li>
      </ul>
    </>
  );
};

export default Footers;
