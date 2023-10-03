import icon from '../../../../../img/icons/ship.png';
import banner from '../../../../../img/ServicesDetailsPage/ship.jpg';

export default function SeaTransport() {
  return (
    <div className="mb-[100px]">
      <div
        className="w-full h-[509px]"
        style={{ background: `url(${banner})` }}
      ></div>
      <div className="flex justify-start items-center gap-5 mt-10 mb-6 ">
        <div className="w-[50px] h-[54px]">
          <img src={icon} alt="icon" />
        </div>
        <h3 className=" font-rubik font-semibold text-4xl text-heading-color">
          Sea Transport Services
        </h3>
      </div>
      <p className=" font-krab font-medium text-base text-paragraph-color mb-5">
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
        explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione
        voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum,
        quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </p>
      <p className=" font-krab font-medium text-base text-paragraph-color">
        Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse,
        quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo
        voluptas nulla pariatur? At vero eos et accusamus et iusto odio
        dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
        atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati
        cupiditate non provident, similique sunt in culpa, qui officia deserunt
        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
        facilis est et expedita distinctio.
      </p>
    </div>
  );
}
