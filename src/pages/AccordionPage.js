import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "44545",
      label: "Can i use react on project",
      content: "You cans use React on any project you want",
    },
    {
      id: "445435",
      label: "Can I use Javascript on a project",
      content: "You can use React on any you want.",
    },
    {
      id: "98525",
      label: "Can I use CSS on a project",
      content: "You can use React on any you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
