import * as React from 'react';
import {Link} from 'react-router-dom';

interface Props {
  text: string;
  type: 'link' | 'button';
  to?: string;
  onClick?: () => void;
}

const LinkBtn: React.FC<Props> = React.memo(({
  text,
  type,
  to,
  onClick
}) => (
  type === 'link' ? (
    <Link to={to}>
      {text}
    </Link>
  ) : (
    <button onClick={onClick}>
      {text}
    </button>
  )
));

export default LinkBtn;
