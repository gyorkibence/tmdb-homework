import React, { FC } from 'react';
import { Link as MaterialLink } from '@material-ui/core';

export interface LinkProps {
  link: string;
  name?: string;
}

const Link: FC<LinkProps> = (props) => {
  const {
    link,
    name,
  } = props;
  return (
    <MaterialLink
      color="primary"
      target="__blank"
      rel="noopener"
      href={link}
      className="tmdb-homework-link-container"
    >
      {name || link}
    </MaterialLink>
  );
};

export default Link;
