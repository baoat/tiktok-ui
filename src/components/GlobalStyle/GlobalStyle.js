import PropType from 'prop-types';
import './GlobalStyle.scss';

function GlobalStyle({ children }) {
  return children;
}

GlobalStyle.prototype = {
  children: PropType.node.isRequired,
};

export default GlobalStyle;
