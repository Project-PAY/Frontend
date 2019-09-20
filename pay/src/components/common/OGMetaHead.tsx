import * as React from 'react';
import {Helmet} from 'react-helmet';
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_IMAGE,
  SITE_NAME,
} from '../../constants/env';
import {
  KEY_DESCRIPTION,
  KEY_OG_TITLE,
  KEY_OG_DESCRIPTION,
  KEY_OG_IMAGE,
  KEY_OG_SITE_NAME
} from '../../constants/head';

interface Props {
  title?: string;
  desc?: string;
  image?: string;
  siteName?: string;
  children?: React.ReactNode;
}

const OGMetaHead: React.FC<Props> = React.memo(({
  title = SITE_TITLE,
  desc = SITE_DESCRIPTION,
  image = SITE_IMAGE,
  siteName = SITE_NAME,
  children
}) => {
  const t = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={desc} key={KEY_DESCRIPTION}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={t} key={KEY_OG_TITLE}/>
      <meta property="og:description" content={desc} key={KEY_OG_DESCRIPTION}/>
      <meta property="og:image" content={image} key={KEY_OG_IMAGE}/>
      <meta property="og:site_name" content={siteName} key={KEY_OG_SITE_NAME}/>
      {children}
    </Helmet>
  );
});

export default OGMetaHead;
