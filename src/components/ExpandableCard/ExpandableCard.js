import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cardData from "./data";
import CardContent from "./CardContent";
import ExpandedContent from "./ExpandedContent";
import "./ExpandableCard.css";
import { cardVariants } from "./variants";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/using-framer-motion-for-complex-animations
 */
const ExpandableCard = () => {
  const [isExpanded, setIsExpanded] = useState();

  return (
    <motion.div
      className={`card ${isExpanded ? "expanded" : "initial"}`}
      variants={cardVariants}
      animate={isExpanded ? "active" : "inactive"}
      initial="inactive"
    >
      <div className="content">
        <AnimatePresence initial={false} exitBeforeEnter>
          {!isExpanded ? (
            <CardContent
              data={cardData}
              onClick={setIsExpanded}
              key="rental" // Children of AnimatePresence need a key
            />
          ) : (
            <ExpandedContent
              data={cardData}
              onClick={setIsExpanded}
              key="contentExpanded"
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ExpandableCard;
