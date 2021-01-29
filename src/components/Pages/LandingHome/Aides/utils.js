import React from 'react';
import { ContainerLinks } from './styledComponents';

export const displayLink = links => {
  const AllLink = Object.values(links);
  return AllLink.map((link, index) => (
    <ContainerLinks key={`${link}${index}`}>
      <div>{link.VALUE}</div>
      <a href={link.HREF} rel="noreferrer" target="_blank">
        {link.HREF}
      </a>
    </ContainerLinks>
  ));
};
