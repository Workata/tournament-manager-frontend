import React, {useState, useEffect} from "react";
import CategoryFilter from '../components/CategoryFilter';

// * material UI
import { Box } from "@mui/material";

export default function Standings() {
  const [standings, setStandings] = useState([])

  // * helpers for SVG drawing
  const standingStrokeWidth = 3;
  const separatorStrokeWidth = 1;
  const standingYAxisStart = 40;
  const standingYAxisInterval = 15;
  const fullNameFontSize = 20;
  const standingNumberFontSize = 30;
  const standingNumberMaringTop = 5;
  const standingColor = "rgb(0,0,0)";

  useEffect(() => {
    // TODO fetch standings every time the category has been changed in select
    setStandings(['Jan Kowalski', 'Piotr Pawlikowski',
     'Adrian Piotrkowski', 'Szymon Kozłowski']);
  }, []);

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
      >
        <svg height="100%" width="100%">

          {/* First place */}
          <text
            fill="black"
            fontSize={fullNameFontSize}
            x="38%"
            y={`${standingYAxisStart-2}%`}
            style={{textAnchor: "middle"}}
          >
            {standings[0]}
          </text>
          <line
            x1="28%"
            y1={`${standingYAxisStart}%`}
            x2="48%"
            y2={`${standingYAxisStart}%`}
            style={{stroke: standingColor, strokeWidth: `${standingStrokeWidth}px`}}
          />
          <text
            fill="black"
            fontSize={standingNumberFontSize}
            x="38%"
            y={`${standingYAxisStart+standingNumberMaringTop}%`}
            style={{textAnchor: "middle"}}
          >
            |
          </text>

          {/* Left separator */}
          <line
            x1="26%"
            y1={`${standingYAxisStart}%`}
            x2="26%"
            y2={`${standingYAxisStart + standingYAxisInterval}%`}
            style={{stroke: standingColor, strokeWidth: `${separatorStrokeWidth}px`}}
          />

          {/* Second place */}
          <text
            fill="black"
            fontSize={fullNameFontSize}
            x="14%"
            y={`${standingYAxisStart+standingYAxisInterval-2}%`}
            style={{textAnchor: "middle"}}
          >
            {standings[1]}
          </text>
          <line
            x1="4%"
            y1={`${standingYAxisStart+standingYAxisInterval}%`}
            x2="24%"
            y2={`${standingYAxisStart+standingYAxisInterval}%`}
            style={{stroke: standingColor, strokeWidth: `${standingStrokeWidth}px`}}
          />
          <text
            fill="black"
            fontSize={standingNumberFontSize}
            x="14%"
            y={`${standingYAxisStart+standingYAxisInterval+standingNumberMaringTop}%`}
            style={{textAnchor: "middle"}}
          >
            | |
          </text>

          {/* Right separator */}
          <line
            x1="50%"
            y1={`${standingYAxisStart}%`}
            x2="50%"
            y2={`${standingYAxisStart + 2*standingYAxisInterval}%`}
            style={{stroke: standingColor, strokeWidth: `${separatorStrokeWidth}px`}}
          />

          {/* Third place - 1*/}
          <text
            fill="black"
            fontSize={fullNameFontSize}
            x="62%"
            y={`${standingYAxisStart+2*standingYAxisInterval-2}%`}
            style={{textAnchor: "middle"}}
          >
            {standings[2]}
          </text>
          <line
            x1="52%"
            y1={`${standingYAxisStart+2*standingYAxisInterval}%`}
            x2="72%"
            y2={`${standingYAxisStart+2*standingYAxisInterval}%`}
            style={{stroke: standingColor, strokeWidth: `${standingStrokeWidth}px`}}
          />
          <text
            fill="black"
            fontSize={standingNumberFontSize}
            x="62%"
            y={`${standingYAxisStart+2*standingYAxisInterval+standingNumberMaringTop}%`}
            style={{textAnchor: "middle"}}
          >
            | | |
          </text>

          {/* Third place - 2*/}
          <text
            fill="black"
            fontSize={fullNameFontSize}
            x="86%"
            y={`${standingYAxisStart+2*standingYAxisInterval-2}%`}
            style={{textAnchor: "middle"}}
          >
            {standings[3]}
          </text>
          <line
            x1="76%"
            y1={`${standingYAxisStart+2*standingYAxisInterval}%`}
            x2="96%"
            y2={`${standingYAxisStart+2*standingYAxisInterval}%`}
            style={{stroke: standingColor, strokeWidth: `${standingStrokeWidth}px`}}
          />
          <text
            fill="black"
            fontSize={standingNumberFontSize}
            x="86%"
            y={`${standingYAxisStart+2*standingYAxisInterval+standingNumberMaringTop}%`}
            style={{textAnchor: "middle"}}
          >
            | | |
          </text>

        </svg>
      </Box>
    </>
  );
}