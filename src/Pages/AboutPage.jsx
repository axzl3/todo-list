import React from "react";
import { Card } from "../Components";

const AboutPage = () => {
  const cardContent = [
    {
      cardTitle: "JOURNEYTECH Inc.",
      cardSubTitle: "Nov 2023 - Nov 2024",
      cardSubTitleStyle: "text-sm",
    },
    {
      cardTitle: "ALN & Co. Inc.",
      cardSubTitle: "Dec 2022 - May 2023",
      cardSubTitleStyle: "text-sm",
      cardBody: [
        "I work as a support and programmer for the clients.",
        "I produced SQL scripts, test and fix bugs, and create new modules for the system as the clients' requests.",
      ],
    },
  ];

  return (
    <>
      <Card
        cardTitle={"Work Experience"}
        cardTitleStyle={"text-3xl"}
        cardStyle={
          "font-serif m-2 bg-base-200 flex h-[35em] w-[80em]"
        }
      >
        <div className="flex flex-row justify-center">
          {cardContent.map((el) => (
            <Card
              key={el.cardTitle}
              cardTitle={el.cardTitle}
              cardTitleStyle={"text-3xl"}
              cardSubTitle={el.cardSubTitle}
              cardSubTitleStyle={
                el.cardSubTitleStyle
              }
              cardStyle={"m-2"}
            >
              <ul>
                {el.cardBody?.map((list, i) => (
                  <>
                    <li
                      key={i}
                      className="list-disc text-md"
                    >
                      {list}
                    </li>
                  </>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Card>
    </>
  );
};

export default AboutPage;
