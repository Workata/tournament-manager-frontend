import React, {useState, useEffect} from "react";
import CategoryFilter from '../components/CategoryFilter';
import "../css/standings.css";

// * material UI
import {
  Box,
  Typography
 } from "@mui/material";

// * services
import { getTree } from "../services/treeService";

export default function Standings() {
  const [standings, setStandings] = useState([]);
  const [choosenCategoryId, setChoosenCategoryId] = useState();

  const fullNameFontSize = 20;
  const standingNumberFontSize = 35;

  const extractStandingsFromTree = (tree) => {
    var firstPlace = tree.name;
    if (firstPlace ===  "TBA") return ["TBA", "TBA", "TBA", "TBA"];
    var secondPlace;
    var thirdPlace1;
    var thirdPlace2;

    if(firstPlace === tree.children[0].name) {
      secondPlace = tree.children[1].name;

      if(tree.children[1].children[0].name == secondPlace) thirdPlace1 = tree.children[1].children[1].name;
      else thirdPlace1 = tree.children[1].children[0].name;

      if(tree.children[0].children[0].name == firstPlace) thirdPlace2 = tree.children[0].children[1].name;
      else thirdPlace2 = tree.children[0].children[0].name;
    }
    else {
      secondPlace = tree.children[0].name;

      if(tree.children[1].children[0].name == firstPlace) thirdPlace1 = tree.children[1].children[1].name;
      else thirdPlace1 = tree.children[1].children[0].name;

      if(tree.children[0].children[0].name == secondPlace) thirdPlace2 = tree.children[0].children[1].name;
      else thirdPlace2 = tree.children[0].children[0].name;
    }


    return [firstPlace, secondPlace, thirdPlace1, thirdPlace2]
  }

  useEffect(() => {
    // TODO fetch standings every time the category has been changed in select
    if(choosenCategoryId) { // if not null
      getTree(choosenCategoryId, (res) => {
        var tree = res.data.structure;
        // * standings -> [1st place, 2nd place, 3rd place, 3rd place]
        setStandings(extractStandingsFromTree(tree));
      }, (err) => {
        console.log(err);
      });
    }
  }, [choosenCategoryId]);

  return (
    <>
      <Box sx={{marginBottom: '20px'}}>
        <CategoryFilter setChoosenCategoryId = {setChoosenCategoryId}/>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "90%",
          boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
          backgroundColor: "primary.main",
          fontSize: `${fullNameFontSize}px`,
          textAlign: 'center'
        }}
      >
        {!choosenCategoryId ? (
          <Typography
            variant="h3"
            sx={{
              verticalAlign: 'middle',
              display: 'inline-block',
              lineHeight: '60vh'
            }}
          >
            Please select a category!
          </Typography>
          ) : (
            <>
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
            </>
          )}
      </Box>
    </>
  );
}