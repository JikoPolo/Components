import FooterWithColumns from "../ui/footers/FooterWithColumns";
import FooterWithCatchphrase from "../ui/footers/FooterWithCatchphrase";

const Footers = () => {
  return (
    <>
      <h1 className="text-4xl">Footers</h1>
      <ul className="flex gap-12 w-full flex-wrap ">
        <li className="w-full">
          <FooterWithColumns />
        </li>
        <li className="w-full">
          <FooterWithCatchphrase />
        </li>
      </ul>
    </>
  );
};

export default Footers;
