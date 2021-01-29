import React from 'react';
import { StyledLink } from './styledComponents';

export const displayNavbarLink = (links, pageShow, setPageShow) => {
  return Object.values(links).map((link, index) => (
    <StyledLink
      key={`${link}${index}`}
      pageShow={pageShow === link}
      onClick={() => setPageShow(link)}
    >
      {link}
    </StyledLink>
  ));
};
