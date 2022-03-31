import React from "react";
import PropTypes from 'prop-types';

export default function Footer(props) {
  return (
    <footer
      style={{
        height: '30px',
        marginTop: 'auto',
        width: props.openDrawer ? `calc(100% - ${props.drawerWidth}px)` : '100%',
        marginLeft: props.openDrawer ? `${props.drawerWidth}px` : '0px',
        backgroundColor: '#fafffd',
        color: 'black',
        textAlign: 'center',
        boxShadow: '0 -5px grey'
      }}
    >
      © 2022 www.tournament-app.com Some Rights Reserved
    </footer>
  )
}

// TODO define correct prop types
Footer.propTypes = {
  openDrawer: PropTypes.any,
  drawerWidth: PropTypes.any
}