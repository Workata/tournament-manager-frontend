import React from "react";
import Tree from "react-d3-tree";
import competitors from "../data/competitors.json";
import { useCallback, useState } from "react";
import CategoryFilter from '../components/CategoryFilter';

// * material UI
import { Box } from "@mui/material";

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

const rectWidth = 130;

// Here we're using `renderCustomNodeElement` to represent each node
// as an SVG `rect` instead of the default `circle`.
const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>

    <rect width={rectWidth} height="30" x={rectWidth-180} y="-10" onClick={toggleNode} fill="white"/>

    <text fill="black" strokeWidth="1" x={rectWidth-170} y="10">
      {nodeDatum.name}
    </text>

    {/* Additonal info */}
    {nodeDatum.attributes?.department && (
      <text fill="black" x="20" y="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}

  </g>
);

export default function Brackets() {

  const [dimensions, translate, containerRef] = useCenteredTree();

  return (
    <>
      <Box sx={{marginBottom: '20px'}}>
        <CategoryFilter/>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "90%",
          boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
          backgroundColor: "primary.main"
        }}
        ref={containerRef}
      >
        {/* props docs: https://bkrem.github.io/react-d3-tree/docs/interfaces/_tree_types_.treeprops.html */}
        <Tree
          data={competitors}
          renderCustomNodeElement={renderRectSvgNode}

          dimensions={dimensions}
          translate={translate}

          orientation="horizontal"
          depthFactor={-200}  // negative value to invert tree direction
          pathFunc="step"
          separation= { { nonSiblings: 1, siblings: 0.5 } }
          zoomable={true}
        />
      </Box>
    </>
  );
}
