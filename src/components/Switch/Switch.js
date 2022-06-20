import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SwitchWrapper = styled.div`
width: 50px;
height: 30px;
border-radius: 20px;
cursor: pointer;
display: flex;
background: #111;
justify-content: 'flex-start';
${({ active }) =>
  active &&
  `
background: #f90566;
justify-content: flex-end;
`}
`;

const SwitchHandle = styled(motion.div)`
background: #fff;
width: 30px;
height: 30px;
border-radius: 50%;
`;

// Simpler version of the Switch motion component using layout animation
const Switch = () => {
  const [active, setActive] = React.useState(false);

  return (
    <SwitchWrapper
      active={active}
      onClick={() => setActive((prev) => !prev)}
    >
      <SwitchHandle layout />
    </SwitchWrapper>
  );
};

export default Switch;
