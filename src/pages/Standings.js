import React, {useState, useEffect} from "react";
import CategoryFilter from '../components/CategoryFilter';
import "../css/standings.css";

// * material UI
import { Box } from "@mui/material";

export default function Standings() {
  const [standings, setStandings] = useState([])

  const fullNameFontSize = 20;
  const standingNumberFontSize = 35;

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
          backgroundColor: "primary.main",
          fontSize: `${fullNameFontSize}px`
        }}
      >
        <div style ={{height: '20px'}}></div>
        {/* First place */}
        <div style ={{margin: '5% auto 0 auto', width: 'fit-content'}}>
          <div className="standing">
              {standings[0]}
          </div>
          <div style = {{textAlign: 'center', fontSize: `${standingNumberFontSize}px`, color:"var(--primary-turquoise)"}}>
            I
          </div>
        </div>

        {/* Second place */}
        <div style ={{margin: '2% auto 0 25%', width: 'fit-content'}}>
          <div className="standing">
              {standings[1]}
          </div>
          <div style = {{textAlign: 'center', fontSize: `${standingNumberFontSize}px`, color:"var(--primary-turquoise)"}}>
            II
          </div>
        </div>

        {/* Third place */}
        <div style ={{margin: '0 15% 0 auto', width: 'fit-content'}}>
          <div style ={{display: 'flex'}}>
            <div className="standing" style ={{margin: '0 5px'}}>
              {standings[2]}
            </div>
            <div className="standing" style ={{margin: '0 5px'}}>
              {standings[3]}
            </div>
          </div>
          <div style = {{textAlign: 'center', margin:'10px', fontSize: `${standingNumberFontSize}px`, color:"var(--primary-turquoise)"}}>
            III
          </div>
        </div>
        
      </Box>
    </>
  );
}