import { Collapse } from "antd";
const { Panel } = Collapse;

export type ItemProps = {
  id: string;
  question: string;
  answer: string;
  isTaken?: boolean;
};

type AccordionProps = {
  items: ItemProps[];
  onChange?: (el: string | string[] | "") => void;
  defaultActiveKey?: string | string[];
};

const Accordion = ({
  items,
  onChange,
  defaultActiveKey = ["1"],
}: AccordionProps) => {
  return (
    <Collapse defaultActiveKey={defaultActiveKey} onChange={onChange}>
      {items?.map((item) => {
        return (
          <Panel header={item?.question} key={item?.id}>
            {item?.answer}
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default Accordion;
