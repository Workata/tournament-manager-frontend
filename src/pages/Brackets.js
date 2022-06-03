import React, { useEffect } from "react";
import Tree from "react-d3-tree";
import { useCallback, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";

// * material UI
import { Box, Typography } from "@mui/material";

// * services
import { getTree } from "../services/treeService";
import { setDuelWinner } from "../services/duelService";
import ConfirmationDialog from "../components/ConfirmationDialog";

const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const [dimensions, setDimensions] = useState();

  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setDimensions({ width, height });
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);

  return [dimensions, translate, containerRef];
};

export default function Brackets() {
  const [dimensions, translate, containerRef] = useCenteredTree();
  const [choosenCategoryId, setChoosenCategoryId] = useState();
  const [treeStructure, setTreeStructure] = useState();
  const [isWinnerSet, setIsWinnerSet] = useState(false);
  const [winner, setWinner] = useState(0);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  // * Tree settings
  const rectWidth = 180;
  const rectHeight = 35;
  const textStroke = 0.5;
  const textRectHorizontallMargin = 5;
  const textRectVerticallMargin = 5; // ! depends from the font size

  // eslint-disable-next-line no-unused-vars
  const setDuelWinnerAfterConfirm = () => {
    setDuelWinner(
      winner.participant_id,
      (res) => {
        console.log(res);
        setIsWinnerSet(true);
      },
      (err) => console.log(err)
    );
  };

  // Here we're using `renderCustomNodeElement` to represent each node
  // as an SVG `rect` instead of the default `circle`.
  // eslint-disable-next-line no-unused-vars
  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g
      onClick={() => {
        setWinner(nodeDatum);
        console.log(nodeDatum);
        if (nodeDatum.participant_id !== 0) {
          setIsConfirmationOpen(true);
        }
      }}
    >
      <rect
        width={rectWidth}
        height={rectHeight}
        x={(rectWidth / 2) * -1} // ?
        y={(rectHeight / 2) * -1} // ok
        fill="white"
      />

      <text
        fill="black"
        strokeWidth={textStroke}
        x={(rectWidth / 2) * -1 + textRectHorizontallMargin} // ok
        y={rectHeight / 2 - rectHeight / 2 + textRectVerticallMargin} // ok
      >
        {nodeDatum.name}
      </text>
    </g>
  );

  const fetchTree = () => {
    getTree(
      choosenCategoryId,
      (res) => {
        setTreeStructure(res.data.structure);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    console.log(choosenCategoryId);
    if (choosenCategoryId) {
      // if not null
      fetchTree();
    }
  }, [choosenCategoryId]);

  useEffect(() => {
    if (choosenCategoryId) {
      // if not null
      fetchTree();
    }
    setIsWinnerSet(false);
  }, [isWinnerSet]);

  return (
    <>
      <Box sx={{ marginBottom: "20px" }}>
        <CategoryFilter setChoosenCategoryId={setChoosenCategoryId} />
        <ConfirmationDialog
          setOpen={setIsConfirmationOpen}
          open={isConfirmationOpen}
          dialogTitle={`Are you sure that ${winner.name} should be the winner of this duel?`}
          dialogMessege=""
          confirmAction={setDuelWinnerAfterConfirm}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "90%",
          boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
          backgroundColor: "primary.main",
          textAlign: "center",
        }}
        ref={containerRef}
      >
        {/* props docs: https://bkrem.github.io/react-d3-tree/docs/interfaces/_tree_types_.treeprops.html */}
        {!choosenCategoryId ? (
          <Typography
            variant="h3"
            sx={{
              verticalAlign: "middle",
              display: "inline-block",
              lineHeight: "60vh",
            }}
          >
            Please select a category!
          </Typography>
        ) : (
          treeStructure && (
            <Tree
              data={treeStructure}
              renderCustomNodeElement={renderRectSvgNode}
              dimensions={dimensions}
              translate={translate}
              orientation="horizontal"
              depthFactor={-200} // negative value to invert tree direction
              pathFunc="step"
              separation={{ nonSiblings: 1, siblings: 0.5 }}
              zoomable={true}
            />
          )
        )}
      </Box>
    </>
  );
}
