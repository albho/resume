import { useState, useEffect } from 'react';
import { List } from 'semantic-ui-react';

const links = [
  {
    name: 'linkedin',
    target: 'https://www.linkedin.com/in/albert-ho-vancouver',
    display: 'LinkedIn',
  },
  {
    name: 'github',
    target: 'https://github.com/albho',
    display: 'GitHub',
  },
  {
    name: 'medium',
    target: 'https://medium.com/@albert-ho',
    display: 'Medium',
  },
  {
    name: 'file text',
    target: 'https://resume.creddle.io/resume/hofvn8byj79',
    display: 'Resume',
  },
];

const breakpointQuery = '(min-width: 480px)';

const Links = ({ theme }) => {
  const [responsive, setResponsive] = useState({
    matches: window.matchMedia(breakpointQuery).matches,
  });

  useEffect(() => {
    const handler = e => setResponsive({ matches: e.matches });
    window.matchMedia(breakpointQuery).addEventListener('change', handler);
  }, []);

  const linksList = links.map((link, i) => {
    return (
      <List.Item key={i}>
        <List.Content>
          <List.Icon name={link.name} inverted={theme} />
          <a href={link.target} target="blank">
            {link.display}
          </a>
        </List.Content>
      </List.Item>
    );
  });

  return (
    <List
      horizontal={responsive.matches}
      inverted={theme}
      className="links-responsive"
    >
      {linksList}
    </List>
  );
};

export default Links;
