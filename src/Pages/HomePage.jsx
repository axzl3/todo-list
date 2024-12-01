import { Card } from "../Components";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-row">
        <Card
          cardTitle={"Alexander Edic"}
          cardTitleStyle={"text-4xl"}
          cardStyle={
            "h-100 w-[40rem] m-2 bg-base-300 font-serif"
          }
        >
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed in
            sollicitudin ante, id dapibus elit.
            Mauris et consectetur magna, non
            efficitur dui. Etiam maximus risus in
            urna malesuada viverra. Integer varius
            neque a neque accumsan, quis
            scelerisque tellus ullamcorper.
            Curabitur fringilla lorem id leo
            tristique tincidunt. Nunc ultricies
            ligula sem. Nullam quis fermentum leo.
            Donec ornare consequat libero, at
            gravida metus pellentesque ac. Mauris
            felis elit, eleifend in ligula ut,
            scelerisque imperdiet orci. Cras
            dapibus lorem velit, id laoreet risus
            eleifend eu. Nulla ex turpis, mattis
            in justo nec, aliquet blandit sapien.
            Donec venenatis porta euismod.
          </p>
        </Card>
        <img
          src="/alex-img.jpg"
          alt="alex-img"
          className="h-100 w-80 m-2 rounded-xl shadow-xl"
        />
      </div>
    </>
  );
};

export default HomePage;
